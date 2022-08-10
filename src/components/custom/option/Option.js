import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';

// style
import styles from './style';
// components
import CustomPressable from '../button/CustomPressable';
// context
import {DataContext} from '../../../context/DataContext/DataContext';

const Option = props => {
  const {getOptionBox} = useContext(DataContext);
  const {onPress, title} = props;
  return (
    <View style={styles.container}>
      <CustomPressable
        title={title}
        btnStyle={styles.btnStyle}
        titleStyle={styles.titleStyle}
        onPress={onPress}
      />
    </View>
  );
};

export default Option;
