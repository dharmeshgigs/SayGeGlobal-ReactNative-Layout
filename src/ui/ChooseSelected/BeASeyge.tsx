import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { RootStackParams } from '../../../App';
import ImageComponent from '../../appcomponents/ImageComponent';
import InputLabelComponent from '../../appcomponents/InputLabelComponent';
import JoinButton from '../../appcomponents/JoinButton';
import StatusBarAndroid from '../../appcomponents/StatusBarAndroid';
import { colors } from '../../css/colors';
import { Style } from '../../css/styles';
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metrics';

type Props = NativeStackScreenProps<RootStackParams, "BeASeyge">;

const BeASeygePage = ({ navigation }: Props) => {

  const onContinueClicked = () => navigation.navigate("AddName");

  const onSkipAndCreateLaterClicked = () => { };

  return (
    <View style={Style().colorPage}>
      <StatusBarAndroid />
      <ScrollView>
        <View>
          <ImageComponent
            url={require('../../assets/images/beasayge_img.png')}
            imgStyle={styles.image}
            resizeMode='cover' />
          <View style={styles.caption}>
            <View style={styles.alignCaption}>
              <InputLabelComponent
                text={'Thanks for being a SAYge!'}
                textStyle={[Style().poppinSemiBoldTextStyle, styles.thanksForBeingYou]} />
              <InputLabelComponent
                noOfLine={3}
                text={'Let’s get your profile created'}
                textStyle={[Style().poppinRegularTextStyle, styles.yourProfileCreated]}/>
            </View>
          </View>
          <View style={styles.itemContainer}>
            <View style={styles.yellowBullet}></View>
            <View style={Style().body}>
              <InputLabelComponent
                text={'Share your story'}
                textStyle={[Style().poppinSemiBoldTextStyle, styles.itemCaption]}/>
              <InputLabelComponent
                noOfLine={4}
                text={'Give value to your experiences and share your journey privately with women who most need to hear it'}
                textStyle={[Style().interRegularTextStyle]}/>
            </View>
          </View>
          <View style={styles.itemContainer}>
            <View style={styles.yellowBullet}></View>
            <View style={Style().body}>
              <InputLabelComponent
                text={'Expand your network'}
                textStyle={[Style().poppinSemiBoldTextStyle, styles.itemCaption]}/>
              <InputLabelComponent
                noOfLine={4}
                text={'Join or create groups based on shared interests. Host events for meaningful connections'}
                textStyle={[Style().interRegularTextStyle]}/>
            </View>
          </View>
          <JoinButton
            text='Continue'
            outerStyle={styles.continue}
            onPress={onContinueClicked}/>
          <InputLabelComponent
            noOfLine={3}
            onPress={onSkipAndCreateLaterClicked}
            text='Skip & create later'
            textStyle={styles.skipNCreateLater}/>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: verticalScale(375),
    width: '100%'
  },
  thanksForBeingYou: {
    marginTop: verticalScale(12),
    alignSelf: 'center'
  },
  yourProfileCreated: {
    textAlign: 'justify',
    marginBottom: verticalScale(20)
  },
  caption: {
    alignItems: 'center'
  },
  alignCaption: {
    alignItems: 'flex-start'
  },
  itemContainer: {
    flexDirection: 'row',
    marginHorizontal: horizontalScale(24),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(10),
    marginBottom: verticalScale(10)
  },
  yellowBullet: {
    borderRadius: moderateScale(44),
    height: horizontalScale(44),
    width: horizontalScale(44),
    marginEnd: horizontalScale(12),
    backgroundColor: colors.bullet
  },
  itemCaption: {
    fontSize: moderateScale(15),
    color: colors.text_msg,
    marginBottom: verticalScale(8)
  },
  continue: {
    marginVertical: verticalScale(8),
    marginTop: verticalScale(16),
    marginHorizontal: horizontalScale(12)
  },
  skipNCreateLater: {
    color: colors.appPrimary,
    fontSize: moderateScale(17),
    alignSelf: 'center',
    marginBottom: verticalScale(48)
  }
});

export default BeASeygePage;