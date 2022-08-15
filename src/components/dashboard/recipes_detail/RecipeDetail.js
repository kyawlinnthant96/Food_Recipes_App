import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';

// style
import styles from './style';
import {COLORS} from '@constants';
import Clock from '@assets/icons/Clock';
import BackArrow from '@assets/icons/BackArrow';
import Edit from '@assets/icons/Edit';
// components
import CustomPressable from '../../custom/button/CustomPressable';

// data
import {getCategoryName} from '@data/MockData';
import {useSelector} from 'react-redux';

const RecipeDetail = (props) => {
  const {data, goIngAction, backAction, editRecipeAction} = props;
  const categories = useSelector((state) => state.catList.categoryLists);
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {/* image */}
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              resizeMode="cover"
              source={{uri: data.photo_url}}
            />
          </View>

          {/* info */}
          <View style={styles.infoContainer}>
            <Text style={styles.mainTitle}>{data.title}</Text>
            <Text style={styles.catTitle}>
              {getCategoryName(data.categoryId, categories).toUpperCase()}
            </Text>
            <View style={styles.timeContainer}>
              <Clock width={20} height={20} color={COLORS.black} />
              <Text style={styles.time}>{data.time} minutes</Text>
            </View>

            <CustomPressable
              btnStyle={styles.ingBtnContent}
              onPress={() => goIngAction(data)}
              title="View Ingredients"
              titleStyle={styles.ingBtnText}
            />
            <Text style={styles.descText}>{data.description}</Text>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.backButton}
        onPress={backAction}>
        <BackArrow width={20} height={20} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.editButton}
        onPress={editRecipeAction}>
        <Edit width={30} height={30} color={COLORS.white} />
      </TouchableOpacity>
    </>
  );
};

export default RecipeDetail;
