import React from 'react';
import {View, TextInput} from 'react-native';

// style
import styles from './style';
import {COLORS, FONTS} from '@constants';
import Search from '@assets/icons/Search';

// hook
import {useLocal} from '../../../../hooks';

const SearchBar = ({term, setTerm, startSearch, option, option2}) => {
  const local = useLocal();
  return (
    <View style={[styles.bar, {...option2}]}>
      <Search width={30} height={30} color={COLORS.gray} />
      <TextInput
        style={[styles.input, {...option}]}
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor={COLORS.gray}
        placeholder={local.searchBarPlaceHolder}
        value={term}
        onChangeText={setTerm}
        onEndEditing={startSearch}
      />
    </View>
  );
};

export default SearchBar;
