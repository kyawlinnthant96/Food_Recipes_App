import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// pages
import BookmarkListScreen from '../../pages/bookmark/bookmark_list/BookmarkList';

const BookmarkStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Bookmark" component={BookmarkListScreen} />
    </Stack.Navigator>
  );
};

export default BookmarkStack;
