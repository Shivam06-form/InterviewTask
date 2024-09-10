import {Button, Icon, Input, Text} from '@rneui/themed';
import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {Styles} from '../../../Styles';
import {TextInput} from 'react-native';
import CustomInput from '../../Common/CustomInput';
import CustomText from '../../Common/CustomText';
import {url} from '../../Common/url';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {LOGIN} from '../../../redux';

const {styles, width, height, TextColor2, iconsize} = Styles();
const SignIn = ({setState}) => {
  const navigation = useNavigation();
  const [signin, setSignin] = useState({
    email: '8800318235',
    password: '1234567',
  });
  const Dispatch = useDispatch();

  const signIn = async () => {
    await fetch(`${url}login`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        password: signin.password,
        phone: signin.email,
      }),
    }).then(async res => {
      const data = await res.json();
      console.log(data);
      if (data.status) {
        Dispatch(LOGIN({detials: data}));
      }
    });
  };

  return (
    <SafeAreaView style={[{...styles2.Container}]}>
      <Text style={[{...styles.text2}, {marginBottom: (height / 100) * 0.5}]}>
        Sign In
      </Text>
      <View style={[{marginBottom: (height / 100) * 2.5}]}>
        <Text style={[{...styles.summery}, {color: 'grey'}]}>
          Hi ! Welcome back,
        </Text>
        <Text style={[{...styles.summery}, {color: 'grey'}]}>
          you have been missed
        </Text>
      </View>
      {/* <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}> */}
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
      <Text style={[{...styles.summery}, {marginLeft: 'auto'}]}>
        Forget Password ?
      </Text>
      <Button
        onPress={() => {
          // navigation.navigate('profile');
          signIn();
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
            marginTop: (height / 100) * 2,
          },
        ]}
      />
      <View style={[{...styles2.divider}]}>
        <View style={styles2.divider_line}></View>
        <Text style={[{...styles.summery}, {color: 'grey'}]}>or</Text>
        <View style={styles2.divider_line}></View>
      </View>
      <View style={[{...styles2.iconConatiner}]}>
        <View style={[{...styles2.iconStyle}]}>
          <Icon name="google" type="antdesign" size={iconsize} />
        </View>
        <View style={[{...styles2.iconStyle}]}>
          <Icon name="apple" size={iconsize} />
        </View>
      </View>

      <CustomText
        GOTOFunction={() => {
          setState('Signup');
        }}
        summery={'Don’t have an account?'}
        title={'Sign Up'}
      />
      <Text
        style={[{...styles.summery}, {color: '#808080', textAlign: 'center'}]}>
        By login or sign up, you agree to our terms of use and privacy policy
      </Text>
      {/* </KeyboardAvoidingView> */}
    </SafeAreaView>
  );
};

export default SignIn;

const styles2 = StyleSheet.create({
  Container: {
    width: (width / 100) * 85,
    flex: 1,
  },
  divider_line: {
    height: (height / 100) * 0.1,
    width: (width / 100) * 35,
    backgroundColor: 'grey',
  },
  divider: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: (height / 100) * 2,
    alignItems: 'center',
    gap: (width / 100) * 2,
  },
  iconStyle: {
    width: (width / 100) * 10,
    height: (height / 100) * 5,
    borderRadius: (width / 100) * 45,
    justifyContent: 'center',
    borderStyle: 'solid',
    borderWidth: (width / 100) * 0.2,
  },
  iconConatiner: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: (width / 100) * 10,
    marginTop: (height / 100) * 1,
  },
});
