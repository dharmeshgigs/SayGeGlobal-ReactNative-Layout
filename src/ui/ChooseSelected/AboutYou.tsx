import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RootStackParams } from '../../../App';
import InputLabelComponent from '../../appcomponents/InputLabelComponent';
import JoinButton from '../../appcomponents/JoinButton';
import StatusBarAndroid from '../../appcomponents/StatusBarAndroid';
import TextInputErrorComponent from '../../appcomponents/TextInputErrorComponent';
import WizardProgressComponent from '../../appcomponents/WizardProgressComponent';
import { colors } from '../../css/colors';
import { Style } from '../../css/styles';
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metrics';

type Props = NativeStackScreenProps<RootStackParams, "AboutYou">;

const AboutYouPage = ({ navigation }: Props) => {

  const onContinueClicked = () => navigation.navigate("StorySelection",{});

  return (
    <SafeAreaView style={[Style().normalPage]}>
      <StatusBarAndroid
        bgColor={colors.white}
        translucent={false}/>
      <KeyboardAwareScrollView contentContainerStyle={Style().body} bounces={false}>
        <View style={styles.body}>
          <WizardProgressComponent
            progress={'100'}
            widthStyle={styles.progress100Style} />
          <InputLabelComponent
            text={'Share a bit about you'}
            textStyle={[Style().poppinSemiBoldTextStyle, styles.whatYourName]} />
          <InputLabelComponent
            noOfLine={3}
            text={'Tell SAYge members a bit about who you are such as your interests, inspirations and why you want to be a SAYge'}
            textStyle={[Style().poppinRegularTextStyle, styles.nameWilBeVisible]} />
          <InputLabelComponent
            text={'About me:'}
            textStyle={[Style().poppinSemiBoldTextStyle, styles.aboutMe]} />
          <TextInputErrorComponent
            text=''
            placeHolderText='Add about you'
            inputOuterStyle={styles.nameInput}
            textStyle={styles.textInput}
            noOfLine={5}
            onChangeText={(text) => {}} />
          <JoinButton
            text='Continue'
            outerStyle={styles.continue}
            onPress={onContinueClicked} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingVertical: verticalScale(24),
    paddingHorizontal: horizontalScale(24),
    flex: 1
  },
  progress100Style: {
    width: '100%',
    borderTopRightRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20)
  },
  whatYourName: {
    marginTop: verticalScale(48)
  },
  nameWilBeVisible: {
    marginTop: verticalScale(12),
    textAlign: 'justify',
    fontSize: moderateScale(15),
    marginBottom: verticalScale(24)
  },
  nameInput: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.border_about,
    backgroundColor: colors.white,
    borderRadius: 8,
    borderWidth: 1,
    height:verticalScale(140)
  },
  textInput: {
    textAlignVertical: 'top',
    paddingLeft:horizontalScale(8),
    paddingTop:verticalScale(18),
    height:verticalScale(140)
  },
  continue: {
    position: 'absolute',
    width: '100%',
    marginHorizontal: horizontalScale(24),
    bottom: verticalScale(64)
  },
  aboutMe: {
    fontSize: moderateScale(15),
    color: colors.ico_location
  }
});

export default AboutYouPage;