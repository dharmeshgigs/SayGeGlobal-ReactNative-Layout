import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import SplashScreenBackground from '../../appcomponents/SplashScreenBackground';
import ImageComponent from '../../appcomponents/ImageComponent';
import StatusBarAndroid from '../../appcomponents/StatusBarAndroid';

const SplashPage = () => {

  return (
    <View style={styles.body}>
      <StatusBarAndroid />
      <SplashScreenBackground />
      <View style={styles.logoView}>
      <ImageComponent
        url={require('../../assets/images/splash_logo.png')}
        imgStyle={styles.logoStyle}
        resizeMode='contain' />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    height: '100%',
    width: '100%'
  },
  logoView: {
    height: '100%',
    width: '100%',
    position:'absolute',
    alignItems:'center',
    justifyContent:'center'
  },
  logoStyle: {
    height: 200,
    width: 200
  }
});

export default SplashPage;