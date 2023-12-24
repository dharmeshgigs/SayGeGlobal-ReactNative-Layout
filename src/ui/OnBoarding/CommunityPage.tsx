import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RootStackParams } from '../../../App';
import CheckBoxComponent from '../../appcomponents/CheckBoxComponent';
import InputLabelComponent from '../../appcomponents/InputLabelComponent';
import JoinButton from '../../appcomponents/JoinButton';
import LogoSection from '../../appcomponents/LogoSection';
import SignUpScreenBackground from '../../appcomponents/SignUpScreenBackground';
import { colors } from '../../css/colors';
import { Style } from '../../css/styles';
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metrics';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

type Props = NativeStackScreenProps<RootStackParams, "Community">;

const CommunityPage = ({ navigation }: Props) => {

  const [checkBox1, setCheckBox1] = useState(false);
  const [checkBox2, setCheckBox2] = useState(false);
  const [checkBox3, setCheckBox3] = useState(false);
  const [checkBox4, setCheckBox4] = useState(false);
  const [checkBox5, setCheckBox5] = useState(false);

  const onBackToSignUpClicked = () => navigation.navigate("SignUp");

  const onIAcceptClicked = () => navigation.navigate("ChooseSelected");

  const isAllChecked = () => {
    return checkBox1 && checkBox2 && checkBox3 && checkBox4 && checkBox5;
  }

  return (
    <View style={Style().body}>
      <SignUpScreenBackground />
      <KeyboardAwareScrollView style={Style().content} contentContainerStyle={Style().body} bounces={false}>
        <View >
          <LogoSection
            text='Community Rules'
          />
          <Text style={styles.messageTextStyle}>
            SAYgeLink is building a network of{'\n'}authenticity and support. Please check{'\n'}that you agree to use this platform in{'\n'}alignment with our values.
          </Text>

          <TouchableWithoutFeedback onPress={() => {
            setCheckBox1(!checkBox1);
          }}><View style={styles.checkedItemContainer} >
              <CheckBoxComponent
                checked={checkBox1}
              />
              <InputLabelComponent
                noOfLine={2}
                text='I am the person my profile says I am'
                textStyle={styles.checkBoxTextStyle}
              />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => {
            setCheckBox2(!checkBox2);
          }}><View style={styles.checkedItemContainer}>
              <CheckBoxComponent
                checked={checkBox2}
              />
              <InputLabelComponent
                noOfLine={2}
                text='I will respect individual perspectives.'
                textStyle={styles.checkBoxTextStyle}
              />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => {
            setCheckBox3(!checkBox3);
          }}><View style={styles.checkedItemContainer}>
              <CheckBoxComponent
                checked={checkBox3}
              />
              <InputLabelComponent
                noOfLine={2}
                text='I understand that peer matches do not offer professional or medical advice'
                textStyle={styles.checkBoxTextStyle}
              />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => {
            setCheckBox4(!checkBox4);
          }}><View style={styles.checkedItemContainer}>
              <CheckBoxComponent
                checked={checkBox4}
              />
              <InputLabelComponent
                noOfLine={2}
                text='I will not use the platform to solicit my business.'
                textStyle={styles.checkBoxTextStyle}
              />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => {
            setCheckBox5(!checkBox5);
          }}><View style={styles.checkedItemContainer}>
              <CheckBoxComponent
                checked={checkBox5}
              />
              <InputLabelComponent
                noOfLine={2}
                text='I am over the age of 18'
                textStyle={styles.checkBoxTextStyle}
              />
            </View>
          </TouchableWithoutFeedback>
          <JoinButton
            text='I accept'
            textStyle={isAllChecked() ? styles.iAcceptTextStyle : styles.iAcceptDisableTextStyle}
            outerStyle={isAllChecked() ? styles.iAcceptButtonStyle : styles.iAcceptDisableStyle}
            onPress={onIAcceptClicked}
          />
          <InputLabelComponent
            noOfLine={3}
            onPress={onBackToSignUpClicked}
            text='Back to Sign Up'
            textStyle={Style().skipTextStyle}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  iAcceptTextStyle: {
    color: colors.white
  },
  iAcceptDisableTextStyle: {
    color: colors.text_disable_accept
  },
  iAcceptButtonStyle: {
    marginVertical: verticalScale(28),
    marginHorizontal: horizontalScale(12)
  },
  iAcceptDisableStyle: {
    marginVertical: verticalScale(28),
    marginHorizontal: horizontalScale(12),
    backgroundColor: colors.topbar_privacy_bg
  },
  checkBoxTextStyle: {
    color: colors.text_input_label,
    fontSize: moderateScale(14),
    fontFamily: 'Poppins-Regular',
    marginVertical: verticalScale(12),
    marginStart: horizontalScale(4),
    marginEnd: horizontalScale(16),
    fontWeight: '400'
  },
  messageTextStyle: {
    fontFamily: 'Inter-Light',
    fontWeight: '400',
    alignSelf: 'center',
    marginTop: verticalScale(12),
    marginBottom: verticalScale(24),
    marginHorizontal: horizontalScale(24),
    fontSize: moderateScale(16),
    color: colors.text_input_label
  },
  checkedItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: horizontalScale(12)
  }
});

export default CommunityPage;