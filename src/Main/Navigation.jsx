import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './Main';
import RegistrationPage from '../Pages/RegistrationPage/RegistrationPage';
import Profile from '../Pages/Profile/Profile';
import {useSelector} from 'react-redux';

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  const state2 = useSelector(state => state.Login);
  console.log(state2.login, 'Login');

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!state2.login && <Stack.Screen name="Home" component={Main} />}
        {!state2.login && (
          <Stack.Screen name="registration" component={RegistrationPage} />
        )}
        {state2.login && <Stack.Screen name="profile" component={Profile} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
