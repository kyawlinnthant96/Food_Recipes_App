import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomPressable = ({btnStyle, onPress, title, titleStyle}) => {
  return (
    <TouchableOpacity style={{...btnStyle}} onPress={onPress}>
      <Text style={{...titleStyle}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomPressable;
