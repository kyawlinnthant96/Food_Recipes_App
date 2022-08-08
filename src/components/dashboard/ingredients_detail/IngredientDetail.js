import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';

// Styles
import styles from './style';

const IngredientDetail = props => {
  const {curData, goToIngInfo} = props;

  const renderComponents = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => goToIngInfo(item[0])}>
        <View style={styles.listContainer}>
          <View style={styles.imgContainer}>
            <Image
              style={styles.image}
              resizeMode="cover"
              source={{uri: item[0].photo_url}}
            />
          </View>
          <Text style={styles.listTitle}>{item[0].name}</Text>
          <Text style={styles.listAmount}>
            {item[1]} {item[0].unit}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* List */}
      <FlatList
        data={curData}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderComponents}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}
      />
    </View>
  );
};

export default IngredientDetail;
