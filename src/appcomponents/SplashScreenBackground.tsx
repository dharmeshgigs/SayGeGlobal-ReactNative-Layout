import React from 'react';
import { StyleSheet } from 'react-native';
import ImageComponent from '../appcomponents/ImageComponent';

const SplashScreenBackground = () => {
  return (
    <ImageComponent
      url={require('../assets/images/splash_bg.png')}
      imgStyle={styles.backgroundStyle}
      resizeMode='cover' />
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    height: '100%',
    width: '100%'
  }
});

export default SplashScreenBackground;