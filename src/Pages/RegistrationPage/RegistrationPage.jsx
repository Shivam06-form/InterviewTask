import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  View,
} from 'react-native';
import {Styles} from '../../../Styles';
import SignIn from './SignIn';
import Signup from './Signup';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const RegistrationPage = () => {
  const [state, setState] = useState('Signin');

  const {styles} = Styles();
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        height: height,
        width: width,
      }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Image
        source={require('../../Images/logo.png')}
        resizeMode="cover"
        style={[
          {...styles.mainImage},
          {width: (width / 100) * 40, height: (height / 100) * 15},
        ]}
      />
      {state === 'Signup' && (
        <Image
          source={require('../../Images/Maskgroup2.png')}
          style={{
            width: (width / 100) * 55,
            height: (height / 100) * 25,
            position: 'absolute',
            right: 0,

            bottom: 0,
          }}
          resizeMode="cover"
        />
      )}
      {state === 'Signin' && (
        <Image
          source={require('../../Images/Maskgroup3.png')}
          style={{
            width: (width / 100) * 55,
            height: (height / 100) * 25,
            position: 'absolute',
            left: 0,
            bottom: 0,
          }}
          resizeMode="cover"
        />
      )}
      <View>
        {state === 'Signin' && <SignIn setState={setState} />}
        {state === 'Signup' && <Signup setState={setState} />}
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegistrationPage;
