import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RootStackParams } from '../../../App';
import InputLabelComponent from '../../appcomponents/InputLabelComponent';
import JoinButton from '../../appcomponents/JoinButton';
import StatusBarAndroid from '../../appcomponents/StatusBarAndroid';
import TextInputErrorComponent from '../../appcomponents/TextInputErrorComponent';
import { colors } from '../../css/colors';
import { Style } from '../../css/styles';
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metrics';

type Props = NativeStackScreenProps<RootStackParams, "AboutCommunity">;

const AboutCommunityPage = ({ navigation }: Props) => {

  const onContinueClicked = () => navigation.navigate("UploadProfile");

  return (
    <SafeAreaView style={[Style().normalPage]}>
      <StatusBarAndroid
        bgColor={colors.white}
        translucent={false} />
      <KeyboardAwareScrollView contentContainerStyle={Style().body} bounces={false}>
        <View style={styles.body}>
          <InputLabelComponent
            text={'Share a bit about you'}
            textStyle={[Style().poppinSemiBoldTextStyle, styles.whatYourName]} />
          <InputLabelComponent
            noOfLine={3}
            text={'This will only be seen by matches and members of private groups you join!'}
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
            onChangeText={(text) => { }} />
          <JoinButton
            text='Save Profile'
            outerStyle={styles.continue}
            onPress={onContinueClicked} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingVertical: verticalScale(12),
    paddingHorizontal: horizontalScale(24),
    flex: 1
  },
  whatYourName: {
    marginTop: verticalScale(24)
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
    height: verticalScale(140)
  },
  textInput: {
    textAlignVertical: 'top',
    paddingLeft: horizontalScale(8),
    paddingTop: verticalScale(18),
    height: verticalScale(140)
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

export default AboutCommunityPage;