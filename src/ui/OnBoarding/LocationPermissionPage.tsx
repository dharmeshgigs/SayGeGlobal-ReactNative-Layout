import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Iconify } from 'react-native-iconify';
import { RootStackParams } from '../../../App';
import InputLabelComponent from '../../appcomponents/InputLabelComponent';
import JoinButton from '../../appcomponents/JoinButton';
import SignUpScreenBackground from '../../appcomponents/SignUpScreenBackground';
import { colors } from '../../css/colors';
import { Style } from '../../css/styles';
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metrics';

type Props = NativeStackScreenProps<RootStackParams, "LocationPermission">;

const LocationPermissionPage = ({ navigation }: Props) => {

  const onSetYourLocationClicked = () => navigation.navigate('NotificationPermission');

  return (
    <View style={Style().body}>
      <SignUpScreenBackground />
      <View style={Style().content}>
        <View style={styles.topSection}>
          <Iconify icon="ion:location-sharp" height={verticalScale(100)} width={horizontalScale(100)}
          color={colors.ico_location} />
          <InputLabelComponent
            noOfLine={3}
            text='Set your location'
            textStyle={styles.setYourLocationTextStyle}
          />
          <InputLabelComponent
            noOfLine={3}
            text='We use your location to show you SAYges in your area '
            textStyle={styles.messageTextStyle}
          />
        </View>
        <View style={styles.bottomSection}>
          <JoinButton
            text='Set your location'
            outerStyle={styles.setYourLocationButtonStyle}
            onPress={onSetYourLocationClicked}
          />
          <InputLabelComponent
            noOfLine={3}
            text='Skip'
            onPress={() =>{}}
            textStyle={Style().skipTextStyle}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  setYourLocationButtonStyle: {
    marginVertical: verticalScale(24),
    marginHorizontal: horizontalScale(12)
  },
  messageTextStyle: {
    marginTop: verticalScale(32),
    fontSize: moderateScale(17),
    marginHorizontal: horizontalScale(24),
    color:colors.black
  },
  setYourLocationTextStyle: {
    fontWeight:'500',
    fontSize:moderateScale(28),
    fontFamily:'Poppins-Medium',
    color:colors.text_msg,
    marginTop:verticalScale(24),
    marginHorizontal: horizontalScale(24)
  },
  bottomSection:{
    flex:2
  },
  topSection:{
    flex: 4,
    alignItems: 'flex-start',
    justifyContent:'center'
  }
});

export default LocationPermissionPage;