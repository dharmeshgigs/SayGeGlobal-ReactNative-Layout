import { StackActions } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParams } from '../../../App';
import InputLabelComponent from '../../appcomponents/InputLabelComponent';
import JoinButton from '../../appcomponents/JoinButton';
import LogoSection from '../../appcomponents/LogoSection';
import SignUpScreenBackground from '../../appcomponents/SignUpScreenBackground';
import { colors } from '../../css/colors';
import { Style } from '../../css/styles';
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metrics';

type Props = NativeStackScreenProps<RootStackParams, "CheckEmail">;

const CheckEmailPage = ({ navigation }: Props) => {

  const onResendClicked = () => navigation.goBack();

  const onBackToLogInClicked = () => {
    const popAction = StackActions.pop(2);
    navigation.dispatch(popAction);
  }

  return (
    <View style={[Style().body]}>
      <SignUpScreenBackground />
      <View style={Style().content}>
        <LogoSection
          text='Check email' />
        <InputLabelComponent
          noOfLine={3}
          text='Please check your email to reset your password. If email is not found, please check spam.'
          textStyle={styles.messageTextStyle} />
        <JoinButton
          text='Back to Log in'
          outerStyle={styles.backToLoginButtonStyle}
          onPress={onBackToLogInClicked} />
        <View style={styles.didNotReceiveEmailContainer}>
          <Text style={styles.normalTextStyle}>Did not receive email? </Text>
          <TouchableOpacity onPress={onResendClicked}>
            <Text style={Style().linkTextStyle}>Resend?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backToLoginButtonStyle: {
    marginVertical: verticalScale(28),
    marginHorizontal: horizontalScale(12)
  },
  didNotReceiveEmailContainer: {
    flexDirection: 'row',
    marginBottom: verticalScale(48),
    alignSelf: 'center'
  },
  normalTextStyle: {
    color: colors.text_input_label,
    fontSize: moderateScale(13),
    fontFamily: 'Inter-Regular',
    fontWeight: '400'
  },
  messageTextStyle: {
    marginTop: verticalScale(32),
    fontSize: moderateScale(16),
    marginHorizontal: horizontalScale(12)
  }
});

export default CheckEmailPage;