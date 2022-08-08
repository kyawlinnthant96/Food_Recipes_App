import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

// Styles
import styles from './style';

const RecipeList = ({navigation}) => {
  return (
    <View>
      <Text>RecipeList</Text>
      <TouchableOpacity onPress={() => navigation.navigate('IngDetail')}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RecipeList;
