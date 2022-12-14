import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import Bookmark from '@assets/icons/Bookmark';

// Style
import styles from './style';
import {COLORS} from '@constants';
// data
import {getCategoryName} from '@data/MockData';
import {useSelector} from 'react-redux';

const RecipeLists = (props) => {
  const {data, bookMarkAction, recDetailAction} = props;
  const categories = useSelector((state) => state.catList.categoryLists);

  const renderComponents = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => recDetailAction(item)}>
        <View style={styles.listContainer}>
          <View style={styles.imageContainer}>
            <ImageBackground
              style={styles.image}
              resizeMode="cover"
              source={{uri: item.photo_url}}>
              {/* Top */}
              <View style={styles.top}>
                <View style={styles.catContaier}>
                  <Text style={styles.catText}>
                    {getCategoryName(item.categoryId, categories)}
                  </Text>
                </View>
                <View style={styles.icon}>
                  <TouchableOpacity
                    onPress={() => bookMarkAction(item.recipeId)}>
                    <Bookmark
                      width={45}
                      height={45}
                      color={item.isBookMark ? COLORS.darkLime : COLORS.white}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.bottom}>
                <Text style={styles.bottomText}>{item.time} min</Text>
              </View>
            </ImageBackground>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>{item.title}</Text>
            <Text style={styles.ingCount}>
              Ingredients-{item.ingredients.length}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderComponents}
      contentContainerStyle={{paddingBottom: 80}}
    />
  );
};

export default RecipeLists;
