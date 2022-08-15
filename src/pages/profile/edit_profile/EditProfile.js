import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {CustomPressable, setToastMsg} from '@components';

// context
import {DataContext} from '../../../context/DataContext/DataContext';

// storage
import {localStorage} from '../../../utils/localStorage';
// hooks
import {useLocal} from '../../../hooks';

// style
import styles from './style';
import Camera from '@assets/icons/Camera';
import Gallery from '@assets/icons/Gallery';

const EditProfile = ({navigation}) => {
  const local = useLocal();
  const {info, getUserInfo} = useContext(DataContext);
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const [userInfo, setUserInfo] = useState({
    username: info.username,
    about: info.about,
    photo_url: info.photo_url,
  });

  const screenHeight = Dimensions.get('window').height;

  const backdrop = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 0.01],
          outputRange: [screenHeight, 0],
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: animation.interpolate({
      inputRange: [0.01, 0.5],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
  };
  const slideUp = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0.01, 1],
          outputRange: [0, -1 * screenHeight],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const nameInputChange = (val) => {
    setUserInfo({
      ...userInfo,
      username: val,
    });
  };
  const aboutInputChange = (val) => {
    setUserInfo({
      ...userInfo,
      about: val,
    });
  };

  const onCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
    })
      .then((image) => {
        setUserInfo({
          ...userInfo,
          photo_url: image.path,
        });
        cancleBox();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const onGallery = () => {
    ImagePicker.openPicker({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
    })
      .then((image) => {
        setUserInfo({
          ...userInfo,
          photo_url: image.path,
        });
        cancleBox();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleOpen = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  const cancleBox = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const userInfoAction = (data) => {
    try {
      if (userInfo.username.length && userInfo.photo_url.length > 0) {
        getUserInfo(data);
        localStorage.setItem('@UserData:info', JSON.stringify(data));
        setToastMsg(local.updateProSuccess);
        navigation.goBack();
      } else {
        setToastMsg(local.validLogError);
      }
    } catch (error) {
      setToastMsg(local.error);
      console.log(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileBoxContainer}>
        <TouchableOpacity style={styles.profileBox} onPress={handleOpen}>
          {userInfo.photo_url ? (
            <Image
              style={styles.image}
              resizeMode="cover"
              source={{uri: userInfo.photo_url}}
            />
          ) : (
            <Camera width={30} height={30} />
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.info}>
        <View style={styles.infoBox}>
          <Text style={styles.label}>{local.placeholderUserNameTitle}</Text>
          <TextInput
            value={userInfo.username}
            onChangeText={nameInputChange}
            style={styles.inputField}
            placeholder={local.placeholderUsername}
          />
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.label}>{local.bioTitle}</Text>
          <TextInput
            value={userInfo.about}
            onChangeText={aboutInputChange}
            style={[styles.inputField, {textAlignVertical: 'top', height: 200}]}
            placeholder={local.bioPlaceholder}
            multiline={true}
            numberOfLines={5}
          />
        </View>
      </View>
      <CustomPressable
        title={local.updateBtn}
        btnStyle={styles.btnStyle}
        titleStyle={styles.titleStyle}
        onPress={() => userInfoAction(userInfo)}
      />

      <Animated.View
        style={[StyleSheet.absoluteFill, styles.cover, backdrop]}
      />
      <View style={[styles.sheet]}>
        <Animated.View style={[styles.popup, slideUp]}>
          <Text style={styles.popupTitle}>Add a photo</Text>
          <TouchableOpacity onPress={onCamera} style={styles.popBtnContent}>
            <Camera width={30} height={20} />
            <Text style={styles.popupBtnText}>Take a photo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onGallery} style={styles.popBtnContent}>
            <Gallery width={30} height={20} color="#000" />
            <Text style={styles.popupBtnText}>Choose from gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={cancleBox} style={styles.popBtnContent}>
            <Text style={styles.popupBtnText}>Cancle</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
};

export default EditProfile;
