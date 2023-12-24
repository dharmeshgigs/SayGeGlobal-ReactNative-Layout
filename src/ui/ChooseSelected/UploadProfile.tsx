import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Iconify } from 'react-native-iconify';
import { RootStackParams } from '../../../App';
import InputLabelComponent from '../../appcomponents/InputLabelComponent';
import JoinButton from '../../appcomponents/JoinButton';
import StatusBarAndroid from '../../appcomponents/StatusBarAndroid';
import WizardProgressComponent from '../../appcomponents/WizardProgressComponent';
import { colors } from '../../css/colors';
import { Style } from '../../css/styles';
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metrics';

type Props = NativeStackScreenProps<RootStackParams, "UploadProfile">;

const UploadProfilePage = ({ navigation }: Props) => {

  const onContinueClicked = () => navigation.navigate("AboutYou");

  return (
    <SafeAreaView style={[Style().normalPage]}>
      <StatusBarAndroid
        bgColor={colors.white}
        translucent={false}/>
      <View style={styles.body}>
        <WizardProgressComponent
          widthStyle={styles.progressStyle} />
        <InputLabelComponent
          text={'Upload your profile photo'}
          textStyle={[Style().poppinSemiBoldTextStyle, styles.uploadYourPhoto]} />
        <InputLabelComponent
          noOfLine={4}
          text={'Take a picture or upload a photo for your profile. This is required to be a SAYge as it helps verify that you a real person'}
          textStyle={[Style().poppinRegularTextStyle, styles.takeAPicture]} />
          <View style={[styles.photoContainer]}>
            <Iconify icon="tabler:photo-plus" height={verticalScale(80)} width={horizontalScale(80)} color={colors.ico_location} />
          </View>
        <JoinButton
          text='Continue'
          outerStyle={styles.continue}
          onPress={onContinueClicked} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingVertical: verticalScale(24),
    paddingHorizontal: horizontalScale(24),
    flex: 1
  },
  progressStyle: {
    width: '75%'
  },
  uploadYourPhoto: {
    marginTop: verticalScale(48)
  },
  takeAPicture: {
    marginTop: verticalScale(12),
    textAlign: 'justify',
    fontSize: moderateScale(15),
    marginBottom: verticalScale(24)
  },
  continue: {
    position: 'absolute',
    width: '100%',
    marginHorizontal: horizontalScale(24),
    bottom: verticalScale(64)
  },
  photoContainer: {
    height: verticalScale(300),
    backgroundColor: colors.photo_upload_border,
    borderRadius: 13,
    borderWidth: moderateScale(3),
    borderColor: colors.photo_upload,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center'
  },
  photoOuterContainer: {
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default UploadProfilePage;