import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RootStackParams } from '../../../App';
import InputLabelComponent from '../../appcomponents/InputLabelComponent';
import JoinButton from '../../appcomponents/JoinButton';
import LogoSection from '../../appcomponents/LogoSection';
import SignUpScreenBackground from '../../appcomponents/SignUpScreenBackground';
import TextInputErrorComponent from '../../appcomponents/TextInputErrorComponent';
import { horizontalScale, verticalScale } from '../../utils/Metrics';
import { Style } from '../../css/styles';

type Props = NativeStackScreenProps<RootStackParams, "ForgotPassword">;

const ForgotPasswordPage = ({ navigation }: Props) => {

  const onSendEmailClicked = () => navigation.navigate("CheckEmail");

  return (
    <View style={Style().body}>
      <SignUpScreenBackground />
      <View style={Style().content}>
        <LogoSection
          text='Forgot password' />
        <InputLabelComponent
          text='Email address*'
          textStyle={styles.emailLabelStyle} />
        <TextInputErrorComponent
          text=''
          placeHolderText='Enter email address'
          inputOuterStyle={styles.emailInputStyle}
          onChangeText={(text) => {
          }} />
        <JoinButton
          text='Send email'
          outerStyle={styles.signUpButton2Style}
          onPress={onSendEmailClicked} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  signUpButton2Style: {
    marginVertical: verticalScale(28),
    marginHorizontal: horizontalScale(12)
  },
  emailInputStyle: {
    marginHorizontal: horizontalScale(12)
  },
  emailLabelStyle: {
    marginTop: verticalScale(32),
    marginHorizontal: horizontalScale(12)
  }
});

export default ForgotPasswordPage;