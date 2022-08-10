import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

// Stack
import DashboardStack from '../stack/DashboardStack';
import RecipesStack from '../stack/RecipesStack';
import BookmarkStack from '../stack/BookmarkStack';
import ProfileStack from '../stack/ProfileStack';

// Icon & styles
import styles from './style';
import Home from '@assets/icons/Home';
import Setting from '@assets/icons/Setting';
import Bookmark from '@assets/icons/Bookmark';
import Search from '@assets/icons/Search';
import {COLORS} from '@constants';

const TabsStack = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: styles.tabStyle,
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={DashboardStack}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.tabContainer}>
                <Home
                  width={hp(5)}
                  height={hp(5)}
                  color={focused ? COLORS.darkLime : COLORS.gray}
                />
                {focused && <View style={styles.bottomLine} />}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={RecipesStack}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.tabContainer}>
                <Search
                  width={hp(5)}
                  height={hp(5)}
                  color={focused ? COLORS.darkLime : COLORS.gray}
                />
                {focused && <View style={styles.bottomLine} />}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Collect"
          component={BookmarkStack}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.tabContainer}>
                <Bookmark
                  width={hp(5)}
                  height={hp(5)}
                  color={focused ? COLORS.darkLime : COLORS.gray}
                />
                {focused && <View style={styles.bottomLine} />}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Info"
          component={ProfileStack}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.tabContainer}>
                <Setting
                  width={hp(5)}
                  height={hp(5)}
                  color={focused ? COLORS.darkLime : COLORS.gray}
                />
                {focused && <View style={styles.bottomLine} />}
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabsStack;
