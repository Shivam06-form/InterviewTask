import {Button, CheckBox, Image, Text} from '@rneui/themed';
import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {Styles} from '../../../Styles';
import CustomInput from '../../Common/CustomInput';
import CustomText from '../../Common/CustomText';
import {color} from '@rneui/base';
import {url} from '../../Common/url';
import {useDispatch} from 'react-redux';
import {LOGIN} from '../../../redux';

const {styles, width, height, TextColor2, iconsize} = Styles();
const Signup = ({setState}) => {
  const [signin, setSignin] = useState({name: '', email: '', password: ''});
  const Dispatch = useDispatch();

  const signup = async () => {
    await fetch(`${url}register`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        name: signin.name,
        password: signin.password,
        phone: signin.email,
      }),
    }).then(async res => {
      const data = await res.json();

      if (data.status) {
        Dispatch(LOGIN({detials: data}));
      }
    });
  };

  return (
    <SafeAreaView style={[{...styles2.Container}]}>
      <Text style={[{...styles.text2}, {marginBottom: (height / 100) * 0.5}]}>
        Sign Up
      </Text>
      <View style={[{marginBottom: (height / 100) * 2.5}]}>
        <Text style={[{...styles.summery}, {color: 'grey'}]}>
          Fill in the below form and add life to
        </Text>
        <Text style={[{...styles.summery}, {color: 'grey'}]}>your car!</Text>
      </View>

      {/*  Name */}
      <CustomInput
        IconName={'person'}
        labelTitle={'Email'}
        placeholder={'Enter your name'}
        onSetText={e => {
          setSignin({...signin, name: e});
        }}
      />
      {/*  Email */}
      <CustomInput
        IconName={'email'}
        labelTitle={'Email'}
        placeholder={'xyz@gmail.com'}
        onSetText={e => {
          setSignin({...signin, email: e});
        }}
      />
      {/* password */}

      <CustomInput
        IconName={'lock'}
        labelTitle={'password'}
        placeholder={'password'}
        onSetText={e => {
          setSignin({...signin, password: e});
        }}
      />
      <View style={[{flexDirection: 'row'}]}>
        <CheckBox
          iconType="material-community"
          checkedIcon="checkbox-marked"
          uncheckedIcon="checkbox-blank-outline"
          checkedColor="red"
        />
        <CustomText
          GOTOFunction={() => {
            setState('Signin');
          }}
          summery={'Agree With'}
          title={'Terms & Conditions'}
          customSummeryStyle={{color: 'black'}}
          customtitleStyle={{color: 'grey'}}
        />
      </View>
      <Button
        onPress={() => {
          signup();
        }}
        color={'transparent'}
        title={'Sign In'}
        titleStyle={[
          {...styles.text},
          {color: TextColor2, fontSize: (width / 100) * 6},
        ]}
        containerStyle={[
          {...styles.button},
          {
            width: '100%',
            padding: (width / 100) * 1,
            marginTop: (height / 100) * 1,
          },
        ]}
      />
      <CustomText
        GOTOFunction={() => {
          setState('Signin');
        }}
        summery={'Already have an account?'}
        title={'  Sign In'}
      />
      <Text
        style={[{...styles.summery}, {color: '#808080', textAlign: 'center'}]}>
        By login or sign up, you agree to our terms of use and privacy policy
      </Text>
    </SafeAreaView>
  );
};

export default Signup;

const styles2 = StyleSheet.create({
  Container: {
    width: (width / 100) * 85,
    flex: 1,
    position: 'relative',
  },
});
