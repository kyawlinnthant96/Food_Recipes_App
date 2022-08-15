import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Dimensions,
  TextInput,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import SelectDropdown from 'react-native-select-dropdown';

// redux
import {useSelector, useDispatch} from 'react-redux';

// data
import {getAllIngredients, getNameArray} from '@data/MockData';

// style
import styles from './style';
import BackArrow from '@assets/icons/BackArrow';
import Camera from '@assets/icons/Camera';
import Gallery from '@assets/icons/Gallery';
import Add from '@assets/icons/Add';
import Delete from '@assets/icons/Delete';

const RecipeForm = (props) => {
  const {
    pickIngAction,
    completeRecipeAction,
    deletePickIngAction,
    initialValue,
  } = props;
  const [animation, setAnimation] = useState(new Animated.Value(0));
  // category list
  const catData = useSelector((state) => state.catList.categoryLists);
  // pick ingredient list
  const curPickArr = useSelector((state) => state.ingList.pickIngredient);
  // ingredient list
  const ingData = useSelector((state) => state.ingList.ingredientsList);
  const [data, setData] = useState({
    catId: initialValue.catId,
    recTitle: initialValue.recTitle,
    time: initialValue.time,
    photo_url: initialValue.photo_url,
    description: initialValue.description,
  });
  const currPickIngData = getAllIngredients(curPickArr, ingData);
  const catNameArr = getNameArray(catData);

  const onCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((image) => {
        setData({
          ...data,
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
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((image) => {
        setData({
          ...data,
          photo_url: image.path,
        });
        cancleBox();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  /* Animation */
  const openBox = () => {
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

  const recInputChange = (val) => {
    setData({
      ...data,
      recTitle: val,
    });
  };
  const timeInputChange = (val) => {
    setData({
      ...data,
      time: val,
    });
  };

  const descInputChange = (val) => {
    setData({
      ...data,
      description: val,
    });
  };

  return (
    <>
      <ScrollView style={styles.container}>
        {/* Recipes Data */}

        <TouchableOpacity activeOpacity={0.5} onPress={openBox}>
          <View style={styles.imageContainer}>
            {data.photo_url ? (
              <View style={styles.addContent}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{uri: data.photo_url}}
                />
              </View>
            ) : (
              <View style={styles.addContent}>
                <Text>Add Cover Image</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <SelectDropdown
            data={catNameArr}
            onSelect={(selectedItem, index) => {
              setData({
                ...data,
                catId: index,
              });
            }}
            defaultButtonText={
              data ?? catId ? catNameArr[data.catId] : 'Select Category'
            }
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Recipes Name</Text>
          <TextInput
            style={styles.inputField}
            value={data.recTitle}
            onChangeText={(val) => recInputChange(val)}
            placeholder="Enter your recipe name here"
          />
        </View>
        <View style={styles.inputTimeContainer}>
          <Text style={styles.inputTitle}>Preparation Time</Text>
          <TextInput
            style={styles.inputFieldTime}
            value={data.time}
            onChangeText={(val) => timeInputChange(val)}
            placeholder="Enter Cooking Time"
          />
        </View>
        <TouchableOpacity style={styles.addContainer} onPress={pickIngAction}>
          <Add width={20} height={20} />
          <Text style={styles.addText}>Add ingredients to recipes</Text>
        </TouchableOpacity>
        <View style={styles.line} />
        {currPickIngData.length > 0
          ? currPickIngData.map((item, index) => (
              <View key={index} style={styles.ingContainer}>
                <View style={styles.imgContainer}>
                  <Image
                    style={styles.ingImage}
                    resizeMode="cover"
                    source={{uri: item[0].photo_url}}
                  />
                </View>
                <View style={styles.info}>
                  <Text style={styles.infoTitle}>{item[0].name}</Text>
                  <Text style={styles.infoUnit}>
                    {item[1]} {item[0].unit}{' '}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.deleteBtn}
                  onPress={() => deletePickIngAction(item[0])}>
                  <Delete width={20} height={20} color="#fff" />
                </TouchableOpacity>
              </View>
            ))
          : null}
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Description</Text>
          <TextInput
            value={data.description}
            onChangeText={(val) => descInputChange(val)}
            style={styles.descriInput}
            placeholder="Enter Description"
            multiline={true}
            numberOfLines={10}
          />
        </View>
      </ScrollView>
      {data.recTitle.length && currPickIngData.length > 0 ? (
        <TouchableOpacity
          style={styles.doneContent}
          activeOpacity={0.8}
          onPress={() => completeRecipeAction(data)}>
          <Text style={styles.doneText}>Done</Text>
        </TouchableOpacity>
      ) : null}

      <Animated.View
        style={[StyleSheet.absoluteFill, styles.cover, backdrop]}
      />

      {/* Image Pick Box  */}
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
    </>
  );
};

RecipeForm.defaultProps = {
  initialValue: {
    catId: '',
    recTitle: '',
    time: '',
    photo_url: null,
    description: '',
  },
};

export default RecipeForm;
