import React from 'react';
import {
  Button,
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Styles} from '../../Styles';
import {useNavigation} from '@react-navigation/native';
import CustomText from '../Common/CustomText';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const {styles} = Styles();
const Main = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{backgroundColor: 'white', width: width, height: height}}>
      <View style={styles2.Top_Image_conatiner}>
        <Image
          style={[{...styles2.Top_image_style}]}
          source={require('../Images/logo1.png')}
          resizeMode="cover"
        />
        <Image
          style={[{...styles2.Top_image_style}, {marginLeft: 'auto'}]}
          source={require('../Images/Maskgroup1.png')}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <Image
          resizeMode="cover"
          source={require('../Images/logo.png')}
          style={styles.mainImage}
        />
        <View>
          <Text
            style={[{...styles.text}, {color: '#808080'}]}
            numberOfLines={2}>
            Sparkle & Shine Transform
          </Text>
          <Text
            style={[{...styles.text}, {color: '#808080'}]}
            numberOfLines={2}>
            Your Drive with Every Wash!
          </Text>
        </View>
        <Pressable
          onPress={() => {
            navigation.navigate('registration');
          }}
          style={[{...styles.button}, {marginTop: (height / 100) * 4}]}>
          <Text style={[{...styles.text}, {color: '#092A4D'}]}>
            Let's Start
          </Text>
        </Pressable>

        <CustomText
          GOTOFunction={() => {
            navigation.navigate('registration');
          }}
          summery={'Already have an account?'}
          title={'  Sign In'}
        />
      </View>
    </SafeAreaView>
  );
};

export default Main;

const styles2 = StyleSheet.create({
  Top_Image_conatiner: {
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: 'red',
    width: width,
  },
  Top_image_style: {
    width: (width / 100) * 45,
    height: (height / 100) * 25,
  },
});
