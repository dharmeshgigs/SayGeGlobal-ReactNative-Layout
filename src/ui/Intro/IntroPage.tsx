import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RootStackParams } from '../../../App';
import ButtonComponent from '../../appcomponents/ButtonComponent';
import ImageComponent from '../../appcomponents/ImageComponent';
import JoinButton from '../../appcomponents/JoinButton';
import SplashScreenBackground from '../../appcomponents/SplashScreenBackground';
import StatusBarAndroid from '../../appcomponents/StatusBarAndroid';
import TextComponent from '../../appcomponents/TextComponent';
import { colors } from '../../css/colors';
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metrics';

type Props = NativeStackScreenProps<RootStackParams, "Intro">;

const IntroPage = ({ navigation }: Props) => {

  const onJoinSayGeGlobalClicked = () => navigation.navigate('SignUp');

  const onLoginClicked = () => navigation.navigate('SignIn');

  return (
    <View style={styles.body}>
      <StatusBarAndroid />
      <SplashScreenBackground />
      <View style={styles.logoView}>
        <TextComponent
          text='Let’s connect and share our'
          textStyle={styles.connectTextStyle} />
        <TextComponent
          text='stories'
          textStyle={styles.storiesTextStyle} />
      </View>
      <View style={styles.bottomView}>
        <JoinButton
          text='Join SAYgeLink'
          outerStyle={styles.joinButtonStyle}
          onPress={onJoinSayGeGlobalClicked} />
        <ButtonComponent
          text='Log in to existing account'
          touchableStyle={styles.loginButtonStyle}
          textStyle={styles.loginTextStyle}
          onPress={onLoginClicked} />
      </View>
      <ImageComponent
        url={require('../../assets/images/splash_logo.png')}
        imgStyle={styles.logoStyle}
        resizeMode='contain' />
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
    backgroundColor: '#FFFFFF44',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute'
  },
  logoStyle: {
    height: verticalScale(124),
    width: horizontalScale(124),
    top: verticalScale(70),
    right: horizontalScale(20),
    alignSelf: 'flex-end',
    position: 'absolute'
  },
  connectTextStyle: {
    fontSize: moderateScale(20),
    fontWeight: "600",
    color: colors.text_lets_connect,
    fontFamily: 'Poppins-SemiBold'
  },
  storiesTextStyle: {
    fontSize: moderateScale(28),
    fontWeight: "500",
    color: colors.text_stories,
    fontFamily: 'Poppins-Medium'
  },
  bottomView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: verticalScale(70),
    paddingStart: horizontalScale(24),
    paddingEnd: horizontalScale(24),
    position: 'absolute'
  },
  loginButtonStyle: {
    height: verticalScale(48),
    borderRadius: moderateScale(8),
    elevation: 8,
    marginTop: verticalScale(12),
    marginBottom: verticalScale(12),
    borderWidth: moderateScale(1),
    borderColor: colors.appPrimary,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white
  },
  loginTextStyle: {
    fontSize: moderateScale(17),
    fontFamily: 'Poppins-Regular',
    fontWeight: "400",
    color: colors.appPrimary
  },
  joinButtonStyle: {
    width: '100%'
  }
});

export default IntroPage;