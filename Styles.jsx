import {Dimensions, StyleSheet} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  summery: {
    fontSize: (width / 100) * 3.5,
    fontWeight: '700',
    fontFamily: 'sans-serif',
    textTransform: 'capitalize',
    letterSpacing: (width / 100) * 0.1,
  },
  text: {
    fontSize: (width / 100) * 4.5,
    fontWeight: '700',
    fontFamily: 'sans-serif',
    textTransform: 'capitalize',
    letterSpacing: (width / 100) * 0.2,
  },
  text2: {
    fontSize: (width / 100) * 7.5,
    fontWeight: '900',
    fontFamily: 'sans-serif',
    textTransform: 'capitalize',
    letterSpacing: (width / 100) * 0.2,
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: (width / 100) * 0.3,
    padding: (width / 100) * 1.5,
  },
  inputTextStyle: {
    fontSize: (width / 100) * 5,
    fontFamily: 'san-sarif',
  },
  button: {
    backgroundColor: '#94C7FF',
    width: (width / 100) * 70,
    padding: (width / 100) * 2.5,
    alignItems: 'center',
    borderRadius: (width / 100) * 8,
  },
  mainImage: {
    width: (width / 100) * 80,
    height: (height / 100) * 35,
    // marginBottom: (height / 100) * 4,
  },
});

export const Styles = () => {
  return {
    styles,
    APP_fontFamily: 'Roboto, sans-serif',
    TextColor: '#d6175e',
    TextColor2: '#092A4D',
    iconsize: (width / 100) * 5,
    width,
    height,
  };
};
