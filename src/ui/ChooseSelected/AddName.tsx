import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { RootStackParams } from '../../../App';
import InputLabelComponent from '../../appcomponents/InputLabelComponent';
import JoinButton from '../../appcomponents/JoinButton';
import StatusBarAndroid from '../../appcomponents/StatusBarAndroid';
import TextInputComponent from '../../appcomponents/TextInputComponent';
import WizardProgressComponent from '../../appcomponents/WizardProgressComponent';
import { colors } from '../../css/colors';
import { Style } from '../../css/styles';
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metrics';

type Props = NativeStackScreenProps<RootStackParams, "AddName">;

const AddNamePage = ({ navigation }: Props) => {

  const onContinueClicked = () => navigation.navigate("UploadProfile");

  return (
    <SafeAreaView style={[Style().normalPage]}>
      <StatusBarAndroid
        bgColor={colors.white}
        translucent={false}/>
        <View style={styles.body}>
          <WizardProgressComponent
            widthStyle={styles.progressStyle} />
          <InputLabelComponent
            text={'What’s your name?'}
            textStyle={[Style().poppinSemiBoldTextStyle, styles.whatYourName]} />
          <InputLabelComponent
            noOfLine={2}
            text={'Your name will be visible to other members'}
            textStyle={[Style().poppinRegularTextStyle, styles.nameWilBeVisible]}/>
          <TextInputComponent
            text=''
            placeHolderText='Add your name'
            inputOuterStyle={styles.nameInput}
            onChangeText={(text) => {}}/>
          <JoinButton
            text='Continue'
            outerStyle={styles.continue}
            onPress={onContinueClicked}/>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingVertical: verticalScale(24),
    paddingHorizontal: horizontalScale(24),
    flex:1
  },
  progressStyle: {
    width: '50%'
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
    elevation: 8,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    borderRadius:8
  },
  continue: {
    position:'absolute',
    width:'100%',
    marginHorizontal:horizontalScale(24),
    bottom:verticalScale(64)
  }
});

export default AddNamePage;