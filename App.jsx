import React, {useState} from 'react';
import {Dimensions, SafeAreaView, Text} from 'react-native';
import AnimatedSplash from 'react-native-animated-splash-screen';
import Main from './src/Main/Main';
import Navigation from './src/Main/Navigation';
import {Provider} from 'react-redux';
import {store} from './redux';

const App = () => {
  const [Loading, setLoading] = useState(false);
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  setTimeout(() => {
    setLoading(true);
  }, 2000);

  return (
    <SafeAreaView style={{flex: 1}}>
      <AnimatedSplash
        translucent={false}
        isLoaded={Loading}
        logoImage={require('../Portfolio/src/Images/splash.png')}
        backgroundColor={'white'}
        logoHeight={height}
        logoWidth={width}>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </AnimatedSplash>
    </SafeAreaView>
  );
};

export default App;
