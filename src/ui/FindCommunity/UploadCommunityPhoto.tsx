import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Alert, Dimensions, Modal, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Iconify } from 'react-native-iconify';
import { RootStackParams } from '../../../App';
import InputLabelComponent from '../../appcomponents/InputLabelComponent';
import JoinButton from '../../appcomponents/JoinButton';
import StatusBarAndroid from '../../appcomponents/StatusBarAndroid';
import WizardProgressComponent from '../../appcomponents/WizardProgressComponent';
import { colors } from '../../css/colors';
import { Style } from '../../css/styles';
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metrics';
import WrapInputLabelComponent from '../../appcomponents/WrapInputLabelComponent';
import ImageComponent from '../../appcomponents/ImageComponent';

type Props = NativeStackScreenProps<RootStackParams, "UploadCommunityPhoto">;

const UploadCommunityPhotoPage = ({ navigation }: Props) => {

  const [modalVisible, setModalVisible] = useState(false);

  const onContinueClicked = () => {
    setModalVisible(!modalVisible);
  }

  const onOkayClicked = () => {
    setModalVisible(false);
    navigation.navigate("FindCommunity");
  }

  return (
    <SafeAreaView style={[Style().normalPage]}>
      <StatusBarAndroid
        bgColor={colors.white}
        translucent={false} />
      <View style={styles.body}>
        <WizardProgressComponent
         progress={'100'}
          widthStyle={styles.progressStyle} />
        <InputLabelComponent
          text={'Upload your profile photo'}
          textStyle={[Style().poppinSemiBoldTextStyle, styles.uploadYourPhoto]} />
        <Text style={[Style().poppinRegularTextStyle, styles.takeAPicture]}>Take a picture or upload a photo for your profile. <Text style={{ fontStyle: 'italic' }}>Tip: Profiles with photos help SAYges get to know you better</Text></Text>
        <View style={[styles.photoContainer]}>
          <Iconify icon="tabler:photo-plus" height={verticalScale(100)} width={horizontalScale(100)} color={colors.ico_location} />
        </View>
        <WrapInputLabelComponent
          text={'Or choose an avatar'}
          textStyle={styles.chooseAnAvatar} />
        <View style={styles.avatarsContainer}>
          <ImageComponent
            url={require('../../assets/images/avatar_1.png')}
            imgStyle={styles.imgStyle} />
          <ImageComponent
            url={require('../../assets/images/avatar_1.png')}
            imgStyle={styles.imgStyle} />
          <ImageComponent
            url={require('../../assets/images/avatar_1.png')}
            imgStyle={styles.imgStyle} />
          <ImageComponent
            url={require('../../assets/images/avatar_1.png')}
            imgStyle={styles.imgStyle} />
        </View>
        <JoinButton
          text='Continue'
          outerStyle={styles.continue}
          onPress={onContinueClicked} />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <WrapInputLabelComponent
              text={'Oops!'}
              textStyle={styles.modalText} />
            <WrapInputLabelComponent
              text={'If you don’t want to upload a photo, you must select an avatar. '}
              textStyle={styles.ifYouDont} />

            <JoinButton
              text='Okay'
              outerStyle={styles.okay}
              onPress={onOkayClicked} />
          </View>
        </View>
      </Modal>
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
    width: '100%',
    borderTopRightRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20)
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
    height: verticalScale(200),
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
  },
  chooseAnAvatar: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
    marginTop: verticalScale(32),
    fontSize: moderateScale(17),
    color: colors.ico_location
  },
  avatarsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  imgStyle: {
    height: horizontalScale(84),
    width: horizontalScale(84)
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF50'
  },
  modalView: {
    width: Dimensions.get('window').width - 48,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: moderateScale(20),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: moderateScale(24),
    color: colors.text_msg,
    fontWeight: '600',
    alignSelf: 'center'
  },
  ifYouDont: {
    fontFamily: 'Inter-Regular',
    fontSize: moderateScale(16),
    color: colors.text_msg,
    marginVertical: verticalScale(12),
    fontWeight: '400',
    textAlign: 'center',
    alignSelf: 'center'
  },
  okay: {
    alignSelf: 'center',
    paddingHorizontal: horizontalScale(24),
    marginVertical: verticalScale(24)
  }
});

export default UploadCommunityPhotoPage;