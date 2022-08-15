import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';

// style
import styles from './style';
import {COLORS} from '@constants';
// data
import {getCategoryName} from '@data/MockData';
import {SIZES} from '@constants';
// redux
import {useSelector} from 'react-redux';

const Trending = (props) => {
  const categories = useSelector((state) => state.catList.categoryLists);

  const {trendData, recDetailAction} = props;

  const renderComponent = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => recDetailAction(item)}
        style={[
          styles.listContainer,
          {marginLeft: index == 0 ? SIZES.padding : 0},
        ]}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{uri: item.photo_url}}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.catText}>
            {getCategoryName(item.categoryId, categories)}
          </Text>
        </View>
        <View blurType="dark" style={styles.cardInfo}>
          <View style={styles.titleContainer}>
            <Text style={styles.infoTitle}>{item.title}</Text>
          </View>
          <Text style={styles.ingText}>
            {item.ingredients.length} ingredients
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trending Recipes</Text>
      <FlatList
        data={trendData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderComponent}
      />
    </View>
  );
};

export default Trending;
