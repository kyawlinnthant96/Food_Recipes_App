import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
// style
import styles from './style';

// components
import SearchBar from '../../custom/header/search/SearchBar';
import CustomPressable from '../../custom/button/CustomPressable';
// redux
import {useSelector} from 'react-redux';

const IngredientList = (props) => {
  const {goSaveIng} = props;
  const ingData = useSelector((state) => state.ingList.ingredientsList);
  const [term, setTerm] = useState('');
  const [amount, setAmount] = useState('');
  const [data, setData] = useState(ingData);

  const handleSearch = (text) => {
    const nameUpper = term.toUpperCase();
    let newArray = [];
    ingData.map((data) => {
      if (data.name.toUpperCase().includes(nameUpper)) {
        newArray.push(data);
      }
    });
    if (text == '') {
      setData([]);
    } else {
      setData(newArray);
    }
  };

  const renderComponent = ({item}) => (
    <TouchableOpacity>
      <View style={styles.listContainer}>
        <View style={styles.imageContainer}>
          <ImageBackground
            style={styles.image}
            resizeMode="cover"
            source={{uri: item.photo_url}}>
            <View style={styles.absolute}>
              <Text style={styles.title}>{item.name}</Text>
            </View>
          </ImageBackground>
        </View>

        <CustomPressable
          title="Save"
          titleStyle={styles.titleStyle}
          btnStyle={styles.btnStyle}
          onPress={() => goSaveIng([item.ingredientId, amount])}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <SearchBar
        option={{
          flex: 1,
        }}
        option2={{
          marginVertical: 10,
        }}
        term={term}
        setTerm={setTerm}
        startSearch={() => handleSearch(term)}
      />
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Quantity</Text>
        <TextInput
          placeholder="--"
          placeholderTextColor="#666"
          style={styles.input}
          value={amount}
          onChangeText={(val) => setAmount(val)}
        />
      </View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderComponent}
        contentContainerStyle={{paddingBottom: 50}}
      />
    </View>
  );
};

export default IngredientList;
