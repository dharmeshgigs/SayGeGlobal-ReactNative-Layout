import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RootStackParams } from '../../../App';
import FacebookButton from '../../appcomponents/FacebookButton';
import GoogleButton from '../../appcomponents/GoogleButton';
import InputLabelComponent from '../../appcomponents/InputLabelComponent';
import JoinButton from '../../appcomponents/JoinButton';
import LogoSection from '../../appcomponents/LogoSection';
import OrComponent from '../../appcomponents/OrComponent';
import SignUpScreenBackground from '../../appcomponents/SignUpScreenBackground';
import TextInputErrorComponent from '../../appcomponents/TextInputErrorComponent';
import { colors } from '../../css/colors';
import { Style } from '../../css/styles';
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metrics';
import TermsAndConditionModal from '../TermsAndCondition/TermsAndConditionModal';
import { Iconify } from 'react-native-iconify';

type Props = NativeStackScreenProps<RootStackParams, "SignIn">;

const SignInPage = ({ navigation }: Props) => {

  const [termsAndConditionVisible, showTermsAndCondition] = useState(false);
  const [privacyPolicyVisible, showPrivacyPolicy] = useState(false);

  const onSignUpClicked = () => navigation.replace("SignUp");

  const onLoginClicked = () => navigation.navigate("LocationPermission");

  const onForgotPasswordClicked = () => navigation.navigate("ForgotPassword");

  return (
    <View style={styles.body}>
      <SignUpScreenBackground />
      <KeyboardAwareScrollView style={styles.content} contentContainerStyle={Style().body} bounces={false}>
        <View >
          <LogoSection
            text='Welcome back'
          />
          <InputLabelComponent
            text='Email address*'
            textStyle={styles.emailLabelStyle}
          />
          <TextInputErrorComponent
            text=''
            placeHolderText='Enter email address'
            inputOuterStyle={styles.emailInputStyle}
            onChangeText={(text) => {
            }}
          />
          <InputLabelComponent
            text='Password*'
            textStyle={styles.emailInputStyle}
          />
          <TextInputErrorComponent
            text=''
            errorText={''}
            inputOuterStyle={styles.emailInputStyle}
            rightIcon={<Iconify icon="clarity:eye-hide-line" height={verticalScale(24)} width={horizontalScale(24)} color={colors.appPrimary} />}
            placeHolderText='Enter password'
            secureText={true}
            onChangeText={(text) => {
            }}
          />
          <InputLabelComponent
            text='Forgot Password?'
            onPress={onForgotPasswordClicked}
            textStyle={styles.forgotPasswordTextStyle}
          />
          <JoinButton
            text='Log In'
            outerStyle={styles.signUpButton2Style}
            onPress={onLoginClicked}
          />

          <View style={styles.dontHaveAccountContainer}>
            <Text style={styles.normalTextStyle}>Don’t have an account?</Text>
            <TouchableOpacity onPress={() => {
              onSignUpClicked();
            }}><Text style={Style().linkTextStyle}> Sign up</Text></TouchableOpacity></View>

          <OrComponent style={styles.emailInputStyle} />

          <FacebookButton
            text='Login with Facebook'
            outerStyle={styles.facebookButtonStyle}
            onPress={() => { }}
          />
          <GoogleButton
            text='Login with Google'
            outerStyle={styles.googleButtonStyle}
            onPress={() => { }}
          />

        </View>
        <TermsAndConditionModal
          visible={termsAndConditionVisible}
          screen='Terms & Conditions'
          onDismiss={() => {
            showTermsAndCondition(false);
          }}
        />
        <TermsAndConditionModal
          visible={privacyPolicyVisible}
          screen='Privacy Policy'
          onDismiss={() => {
            showPrivacyPolicy(false);
          }}
        />
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1
  },
  content: {
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: verticalScale(48),
    paddingHorizontal: horizontalScale(12),
    position: 'absolute'
  },
  topSection: {
    flex: 1.8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  middleSection: {
    flex: 2.2,
    paddingHorizontal: horizontalScale(24)
  },
  bottomSection: {
    flex: 2,
    paddingHorizontal: horizontalScale(24)
  },
  weUseYourEmailTextStyle: {
    fontFamily: 'Inter-Regular',
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: verticalScale(24),
    fontSize: moderateScale(13),
    marginHorizontal: horizontalScale(12),
    color: colors.text_msg
  },
  signUpButton2Style: {
    marginVertical: verticalScale(28),
    marginHorizontal: horizontalScale(12)
  },
  googleButtonStyle: {
    marginHorizontal: horizontalScale(12),
    marginTop: verticalScale(24)
  },
  facebookButtonStyle: {
    marginTop: verticalScale(36),
    marginHorizontal: horizontalScale(12)
  },
  normalTextStyle: {
    color: colors.text_input_label,
    fontSize: moderateScale(13),
    fontFamily: 'Inter-Regular',
    fontWeight: '400'
  },
  bottomViewStyle: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: verticalScale(32),
    marginHorizontal: horizontalScale(12),
    justifyContent: 'center',
    paddingVertical: verticalScale(12)
  },
  emailInputStyle: {
    marginHorizontal: horizontalScale(12)
  },
  emailLabelStyle: {
    marginTop: verticalScale(32),
    marginHorizontal: horizontalScale(12)
  },
  forgotPasswordTextStyle: {
    ...Style().linkTextStyle,
    fontSize: moderateScale(10),
    marginEnd: horizontalScale(12),
    alignSelf: 'flex-end'
  },
  dontHaveAccountContainer: {
    flexDirection: 'row',
    marginBottom: verticalScale(48),
    alignSelf: 'center'
  }
});

export default SignInPage;