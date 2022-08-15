import React, {useState} from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

// style
import styles from './style';
// data
import language from '../../../data/language';
// hook
import {useLocal} from '../../../hooks';

const LanguageBox = (props) => {
  const {handleChange, langList} = props;
  const local = useLocal();
  return (
    <View style={styles.container}>
      <View style={styles.langBox}>
        <Text style={styles.title}>{local.langBoxTitle}</Text>
        {langList.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.listContainer}
              onPress={() => handleChange(item.value)}>
              <CheckBox value={item.isChecked} />
              <Text style={styles.langText}>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default LanguageBox;
