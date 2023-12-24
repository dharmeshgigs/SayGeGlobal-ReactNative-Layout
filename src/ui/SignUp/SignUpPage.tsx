import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Iconify } from 'react-native-iconify';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RootStackParams } from '../../../App';
import FacebookButton from '../../appcomponents/FacebookButton';
import GoogleButton from '../../appcomponents/GoogleButton';
import InputLabelComponent from '../../appcomponents/InputLabelComponent';
import JoinButton from '../../appcomponents/JoinButton';
import LogoSection from '../../appcomponents/LogoSection';
import OrComponent from '../../appcomponents/OrComponent';
import SignUpScreenBackground from '../../appcomponents/SignUpScreenBackground';
import TextComponent from '../../appcomponents/TextComponent';
import TextInputErrorComponent from '../../appcomponents/TextInputErrorComponent';
import { colors } from '../../css/colors';
import { Style } from '../../css/styles';
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metrics';
import TermsAndConditionModal from '../TermsAndCondition/TermsAndConditionModal';

type Props = NativeStackScreenProps<RootStackParams, "SignUp">;

const SignUpPage = ({ navigation }: Props) => {

  const [termsAndConditionVisible, showTermsAndCondition] = useState(false);
  const [privacyPolicyVisible, showPrivacyPolicy] = useState(false);

  const onTermsAndConditionClicked = (screen: string) => {
    showTermsAndCondition(true);
  }

  const onSignUpClicked = () => navigation.navigate("LocationPermission");

  const onPrivacyPolicyClicked = (screen: string) => {
    showPrivacyPolicy(true);
  }

  return (
    <View style={Style().body}>
      <SignUpScreenBackground />
      <KeyboardAwareScrollView
        style={Style().content}
        contentContainerStyle={[Style().flexGrowStyle]}
        bounces={false}
        enableOnAndroid={true}
        enableAutomaticScroll={Platform.OS === 'ios' ? true : false}
      >
        <View >
          <LogoSection
            text='Sign up with email'
          />
          <TextComponent
            text="We use your email to contact you about account issues or changes to Sayge"
            noOfLine={2}
            textStyle={styles.weUseYourEmailTextStyle}
          />

          <InputLabelComponent
            text='Email address*'
            textStyle={styles.emailInputStyle}
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
            rightIcon={<Iconify icon="clarity:eye-show-line" height={verticalScale(24)} width={horizontalScale(24)} color={colors.appPrimary} />}
            placeHolderText='Enter password'
            secureText={true}
            onChangeText={(text) => {
            }}
          />
          <JoinButton
            text='Sign up'
            outerStyle={styles.signUpButton2Style}
            onPress={onSignUpClicked}
          />
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
          <View style={styles.bottomViewStyle}>
            <Text style={styles.normalTextStyle}>By signing up, you agree to our</Text>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => {
                onTermsAndConditionClicked('Terms & Conditions');
              }}><Text style={Style().linkTextStyle}>Terms & Conditions.</Text></TouchableOpacity>
              <Text style={styles.normalTextStyle}> See how we</Text></View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.normalTextStyle}>use your data in our </Text>
              <TouchableOpacity onPress={() => {
                onPrivacyPolicyClicked('Privacy Policy');
              }}><Text style={Style().linkTextStyle}>Privacy Policy.</Text></TouchableOpacity></View>
          </View>
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
    marginVertical: verticalScale(36),
    marginHorizontal: horizontalScale(12)
  },
  googleButtonStyle: {
    marginHorizontal: horizontalScale(12),
    marginTop: verticalScale(12)
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
    marginTop: verticalScale(24),
    marginHorizontal: horizontalScale(12),
    justifyContent: 'center',
    paddingVertical: verticalScale(12)
  },
  emailInputStyle: {
    marginHorizontal: horizontalScale(12)
  }
});

export default SignUpPage;