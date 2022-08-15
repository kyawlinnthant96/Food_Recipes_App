import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

// style
import styles from './style';
import {COLORS, FONTS, SIZES} from '@constants';
import Bookmark2 from '@assets/icons/Bookmark2';
import Chef from '@assets/icons/Chef';
import Language from '@assets/icons/Language';
import About from '@assets/icons/About';
import Logout from '@assets/icons/Logout';

const UserStatusSetting = (props) => {
  const {logoutAction, languageAction, yourRecipeList, goToBookmarkAction} =
    props;
  return (
    <View style={styles.statusContainer}>
      <TouchableOpacity onPress={goToBookmarkAction}>
        <View style={styles.favContainer}>
          <View style={styles.titleContainer}>
            <Bookmark2 width={40} height={40} color={COLORS.darkLime} />
            <Text style={styles.titleText}>My Save Recipes</Text>
          </View>
          <View style={styles.titleDescription}>
            <Text style={styles.descText}>
              See your favourite recipes history here. LetCook is the best tool
              to optimize the way your looking for recipes
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={yourRecipeList}>
        <View style={styles.favContainer}>
          <View style={styles.titleContainer}>
            <Chef width={40} height={40} color={COLORS.darkLime} />
            <Text style={styles.titleText}>My Recipes</Text>
          </View>
          <View style={styles.titleDescription}>
            <Text style={styles.descText}>
              Your cooking journey and recipes history here. LetCook is the best
              tool to optimize the way your looking for recipes
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.utilContainer}>
        <TouchableOpacity onPress={languageAction}>
          <View style={styles.listContaier}>
            <Language width={35} height={35} color="#444" />
            <Text style={styles.listText}>Language</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.listContaier}>
            <About width={30} height={30} color={COLORS.black} />
            <Text style={styles.listText}>About LetCook</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={logoutAction}>
          <View style={styles.logoutContainer}>
            <Logout width={30} height={30} />
            <Text style={styles.listText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserStatusSetting;
