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

type Props = NativeStackScreenProps<RootStackParams, "NotificationPermission">;

const LocationPermissionPage = ({ navigation }: Props) => {
  
  const onAllowNotificationsClicked = () => navigation.navigate('Community');

  return (
    <View style={Style().body}>
      <SignUpScreenBackground />
      <View style={Style().content}>
        <View style={styles.topSection}>
          <Iconify icon="ri:notification-fill" height={verticalScale(100)} width={horizontalScale(100)}
          color={colors.ico_location} />
          <InputLabelComponent
            noOfLine={3}
            text='Allow notifications'
            textStyle={styles.allowNotiTextStyle}
          />
          <InputLabelComponent
            noOfLine={4}
            text='Don’t miss a beat, or a connection!  Stay up-to-date with the latest activity on SAYge by enabling notifications.'
            textStyle={styles.messageTextStyle}
          />
        </View>
        <View style={styles.bottomSection}>
          <JoinButton
            text='Allow notifications'
            outerStyle={styles.allowNotiButtonStyle}
            onPress={onAllowNotificationsClicked}
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
  allowNotiButtonStyle: {
    marginVertical: verticalScale(24),
    marginHorizontal: horizontalScale(12)
  },
  messageTextStyle: {
    marginTop: verticalScale(32),
    fontSize: moderateScale(17),
    marginHorizontal: horizontalScale(24),
    color:colors.black
  },
  allowNotiTextStyle: {
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