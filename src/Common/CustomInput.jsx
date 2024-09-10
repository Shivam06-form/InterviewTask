import {Icon} from '@rneui/base';
import {Text} from '@rneui/themed';
import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import {Styles} from '../../Styles';

const {styles, width, height, iconsize} = Styles();
const CustomInput = ({
  labelTitle,
  placeholder,
  IconName,
  IconType,
  onSetText,
  secureTextEntry,
}) => {
  return (
    <SafeAreaView>
      <View style={[{...styles2.labelContainer}]}>
        <Text style={[{...styles.text}]}>{labelTitle}</Text>
        <View style={[{...styles2.InputContainer}]}>
          <Icon name={IconName} type={IconType} size={iconsize} />
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={'grey'}
            style={{color: 'black', fontSize: (width / 100) * 3.5}}
            onChangeText={e => {
              onSetText(e);
            }}
            secureTextEntry={secureTextEntry}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomInput;

const styles2 = StyleSheet.create({
  InputContainer: {
    borderRadius: (width / 100) * 3,
    display: 'flex',
    flexDirection: 'row',
    width: (width / 100) * 85,
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: (width / 100) * 0.2,
    padding: (width / 100) * 1.5,
  },
  labelContainer: {
    gap: (height / 100) * 1.5,
    marginBottom: (height / 100) * 2,
  },
});
