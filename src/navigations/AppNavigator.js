import React, {useEffect, useState} from 'react';

// Redux
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
// Stack
import AuthStack from './stack/AuthStack';
import TabsStack from './tabs/TabsStack';
// context
import {DataContext} from '../context/DataContext/DataContext';
import {localStorage} from '../utils/localStorage';
// pages
import Splash from '../pages/splash/Splash';
// firebase
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
// redux store
import store from '../store';
// splash
import SplashScreen from 'react-native-splash-screen';

const AppNavigator = () => {
  const [lang, setLang] = useState('EN');
  const [initialAuth, setInitialAuth] = useState(false);
  const [ownRecipes, setOwnRecipes] = useState();
  const [user, setUser] = useState();
  const [info, setInfo] = useState('');
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    SplashScreen.hide();
    const subscriber = auth().onAuthStateChanged(userSession);
    return subscriber;
  }, []);

  // firebase persist user session
  const userSession = (user) => {
    if (!user) {
      setInitialAuth(false);
      setTimeout(() => {
        setSplash(false);
      }, 3000);
    } else {
      setUser(user);
      setInitialAuth(true);
      const userInfo = localStorage.getItem('@UserData:info');
      const userRecipes = localStorage.getItem('@User:recipe');
      if (userRecipes) {
        const formatRecipes = JSON.parse(userRecipes);
        setOwnRecipes(formatRecipes);
      }
      const langData = localStorage.getItem('@User:lang');
      if (userInfo) {
        let formatInfo = JSON.parse(userInfo);
        setInfo(formatInfo);
      } else {
        firestore()
          .collection('users')
          .doc(user.uid)
          .get()
          .then((user) => {
            setInfo(user.data());
          });
      }
      setLang(langData);
      setTimeout(() => {
        setSplash(false);
      }, 3000);
    }
  };

  // context
  const context = {
    ownRecipes,
    info,
    user,
    lang,
    getAuth: (value) => {
      setInitialAuth(value);
    },
    getUserInfo: (value) => {
      setInfo(value);
    },
    getLang: (value) => {
      setLang(value);
    },
  };

  if (splash) {
    return <Splash />;
  } else if (initialAuth) {
    return (
      <Provider store={store}>
        <DataContext.Provider value={context}>
          <TabsStack />
        </DataContext.Provider>
      </Provider>
    );
  } else {
    return (
      <Provider store={store}>
        <DataContext.Provider value={context}>
          <AuthStack />
        </DataContext.Provider>
      </Provider>
    );
  }
};

export default AppNavigator;
