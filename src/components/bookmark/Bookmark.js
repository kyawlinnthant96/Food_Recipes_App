import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';

// style
import styles from './style';
import Option from '@assets/icons/Option';
// components
import OptionBox from '../custom/option/Option';

const Bookmark = props => {
  const {data, goToDetalAction, options, visible, deleteAction} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Save Recipes</Text>

      <ScrollView>
        <View style={styles.bookList}>
          {data.map(item => (
            <TouchableOpacity
              key={`${item.recipeId}`}
              onPress={() => goToDetalAction(item)}
              activeOpacity={0.5}>
              {visible && (
                <OptionBox
                  title="Delete"
                  onPress={() => deleteAction(item.recipeId)}
                />
              )}
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
                    onPress={options}>
                    <Option width={24} height={24} color="#000" />
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
