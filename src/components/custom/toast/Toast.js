import {ToastAndroid} from 'react-native';
import React from 'react';

const setToastMsg = msg => {
  ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
};

export default setToastMsg;
