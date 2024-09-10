import {Text} from '@rneui/themed';
import React from 'react';
import {View} from 'react-native';
import {Styles} from '../../Styles';

const {styles, height, width} = Styles();
const CustomText = ({
  GOTOFunction,
  summery,
  title,
  customSummeryStyle,
  customtitleStyle,
}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: (height / 100) * 2,
        marginBottom: (height / 100) * 2,
        alignSelf: 'center',
      }}>
      <Text
        style={[{...styles.summery}, {color: 'grey'}, {...customSummeryStyle}]}>
        {summery}
      </Text>
      <Text
        onPress={() => {
          GOTOFunction();
        }}
        style={[
          {...styles.summery},
          {
            color: 'black',
            marginLeft: (width / 100) * 1.5,
            textDecorationLine: 'underline',
            textDecorationColor: 'grey',
            // width: '55%'
          },
          {...customtitleStyle},
        ]}>
        {title}
      </Text>
    </View>
  );
};

export default CustomText;
