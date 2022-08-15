import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';

// style
import styles from './style';
import Delete from '../../../assets/icons/Delete';

const Bookmark = (props) => {
  const {data, goToDetalAction, deleteAction} = props;

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>My Save Recipes</Text> */}

      <ScrollView>
        <View style={styles.bookList}>
          {data.map((item) => (
            <TouchableOpacity
              key={`${item.recipeId}`}
              onPress={() => goToDetalAction(item)}
              activeOpacity={0.5}>
              <View style={styles.listContainer}>
                {/* image */}
                <View style={styles.imageContainer}>
                  <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{uri: item.photo_url}}
                  />
                  <TouchableOpacity
                    style={styles.option}
                    activeOpacity={0.5}
                    onPress={() => deleteAction(item.recipeId)}>
                    <Delete width={24} height={24} color="#000" />
                  </TouchableOpacity>
                </View>

                {/* info */}
                <View style={styles.infoContainer}>
                  <Text style={styles.titleText}>{item.title}</Text>
                  <Text style={styles.ingText}>
                    {item.ingredients.length} ingredients
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Bookmark;
