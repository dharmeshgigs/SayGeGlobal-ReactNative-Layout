import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../css/colors';
import OverlapCircle from './OverlapCircle';

const SignUpScreenBackground = () => {

  const top = -160;
  const left = -120;
  const bottom = -160;
  const right = -120;

  return (
    <View style={styles.body}>
    <OverlapCircle top={top} left={left} />
    <OverlapCircle bottom={bottom} right={right} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.signup_bg
  },
  bottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0
  }
});

export default SignUpScreenBackground;