import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Styles} from '../../../Styles';
import {Button, Image} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {LOGOUT} from '../../../redux';

const {styles, width, height, TextColor2, iconsize} = Styles();

const Profile = () => {
  const state2 = useSelector(state => state.Login);
  const navigation = useNavigation();
  const Dispatch = useDispatch();

  const name = state2.detials.data.name;
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        width: width,
        height: height,
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}>
      <Image
        source={require('../../Images/logo.png')}
        resizeMode="cover"
        style={[
          {...styles.mainImage},
          {width: (width / 100) * 40, height: (height / 100) * 15},
        ]}
      />
      <Text style={[{...styles.text2}, {color: 'black'}]}>Welcome {name}</Text>
      <Button
        onPress={() => {
          Dispatch(LOGOUT());
        }}
        color={'transparent'}
        title={'Logout'}
        titleStyle={[
          {...styles.text},
          {color: TextColor2, fontSize: (width / 100) * 6},
        ]}
        containerStyle={[
          {...styles.button},
          {
            width: '80%',
            padding: (width / 100) * 1,
            marginTop: (height / 100) * 2,
          },
        ]}
      />
    </SafeAreaView>
  );
};

export default Profile;
