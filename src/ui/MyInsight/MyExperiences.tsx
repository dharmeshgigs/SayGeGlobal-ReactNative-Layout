import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Iconify } from 'react-native-iconify';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParams } from '../../../App';
import ButtonComponent from '../../appcomponents/ButtonComponent';
import ChipComponent from '../../appcomponents/ChipComponent';
import ChipOptionComponent from '../../appcomponents/ChipOptionComponent';
import InputLabelComponent from '../../appcomponents/InputLabelComponent';
import JoinButton from '../../appcomponents/JoinButton';
import StatusBarAndroid from '../../appcomponents/StatusBarAndroid';
import TextInputErrorComponent from '../../appcomponents/TextInputErrorComponent';
import { colors } from '../../css/colors';
import { Style } from '../../css/styles';
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metrics';

type Props = NativeStackScreenProps<RootStackParams, "MyExperiences">;

const MyExperiencesPage = ({ navigation }: Props) => {

  const onBackClicked = () => navigation.goBack();

  const onContinueClicked = () => navigation.navigate("MyProfile");

  return (
    <SafeAreaView style={Style().normalPage}>
      <StatusBarAndroid
        bgColor={colors.white}
        translucent={false}
      />
      <ScrollView>
        <View style={styles.content}>
          <Iconify icon="ion:chevron-back"
            onPress={onBackClicked}
            height={28} width={28} color={colors.divider_or}
            style={styles.backIcon} />
          <InputLabelComponent
            noOfLine={2}
            text={'My experiences'}
            textStyle={[Style().poppinSemiBoldTextStyle, styles.myExperience]} />
          <InputLabelComponent
            noOfLine={3}
            text={'Share a bit more about your experiences with each insight so that matches can learn more about you.'}
            textStyle={[Style().poppinRegularTextStyle, styles.shareABit]}
          />
          <InputLabelComponent
            text={'Relationships -  Divorce '}
            textStyle={[Style().poppinSemiBoldTextStyle, styles.categoryTitle]}
          />
          <InputLabelComponent
            text={'Choose hashtag(s) about your specific insight*'}
            textStyle={[Style().interRegularTextStyle, styles.chooseHashtab]}
          />
          <View style={styles.chipContainer}>
            <View style={styles.chipRawcontainer}>
              <ChipComponent
                text={'#ChildSupport'}
                checked={true}
              />
              <ChipComponent
                text={'#Finances'}
                checked={false}
              />
              <ChipComponent
                text={'#HappierAfter'}
                checked={false}
              />
            </View>
            <View style={styles.chipRawcontainer}>
              <ChipComponent
                text={'#Stigma'}
                checked={false}
              />
              <ChipComponent
                text={'#CustodyIssues'}
                checked={false}
              />
              <ChipComponent
                text={'#LegalMatters'}
                checked={false}
              />
            </View>
          </View>
          <InputLabelComponent
            text={'Add more to your story (optional)'}
            textStyle={[Style().interRegularTextStyle, styles.addMore]}
          />
          <TextInputErrorComponent
            text=''
            placeHolderText='Tell your story'
            inputOuterStyle={styles.nameInput}
            textStyle={styles.textInput}
            noOfLine={4}
            onChangeText={(text) => {
            }} />
          <View style={styles.bottomButtonsContainer}>
            <View style={styles.chipOptionContainer}>
              <ChipOptionComponent
                text={'been there'}
                checked={true}
                onPress={()=>{}}
              />
              <InputLabelComponent
                noOfLine={2}
                text={'have navigated\nthrough it'}
                textStyle={[Style().interRegularTextStyle, styles.haveNavigated]}
              />
            </View>
            <View style={styles.chipOptionRightContainer}>
            <ChipOptionComponent
                text={'in there'}
                checked={false}
                onPress={()=>{}}
              />
              <InputLabelComponent
                noOfLine={2}
                text={'currently\nnavigating'}
                textStyle={[Style().interRegularTextStyle, styles.haveNavigated]}
              />
            </View>
          </View>
          <JoinButton
            text='Complete Profile'
            outerStyle={styles.continue}
            onPress={onContinueClicked} />
          <ButtonComponent
            text='Add another experience'
            touchableStyle={styles.addAnotherExperienceButton}
            textStyle={styles.addAnotherExperienceButtonText}
            onPress={() => { }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  myExperience: {
    marginTop: verticalScale(16),
    marginHorizontal: horizontalScale(20)
  },
  shareABit: {
    marginTop: verticalScale(12),
    textAlign: 'justify',
    marginHorizontal: horizontalScale(20)
  },
  continue: {
    marginTop:verticalScale(32),
    width: Dimensions.get('window').width - horizontalScale(48),
    alignSelf: 'center'
  },
  categoryTitle: {
    color: colors.ico_location,
    marginHorizontal: horizontalScale(20),
    fontSize: moderateScale(15),
    marginTop: verticalScale(12)
  },
  content: {
    flex: 1,
    paddingTop: verticalScale(12)
  },
  chooseHashtab: {
    fontSize: moderateScale(13),
    marginTop: verticalScale(4),
    marginHorizontal: horizontalScale(20)
  },
  backIcon: {
    marginLeft: horizontalScale(12)
  },
  addMore: {
    fontSize: moderateScale(13),
    marginTop: verticalScale(8),
    marginHorizontal: horizontalScale(20)
  },
  nameInput: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.border_about,
    backgroundColor: colors.white,
    borderRadius: 8,
    borderWidth: 1,
    marginTop: verticalScale(8),
    marginHorizontal: horizontalScale(20),
    height: verticalScale(120)
  },
  textInput: {
    textAlignVertical: 'top',
    fontSize: moderateScale(11),
    paddingLeft: horizontalScale(8),
    paddingTop: verticalScale(18),
    height: verticalScale(120)
  },
  addAnotherExperienceButton: {
    height: verticalScale(48),
    borderRadius: moderateScale(8),
    elevation: 8,
    marginTop: verticalScale(12),
    marginBottom: verticalScale(12),
    borderWidth: moderateScale(1),
    borderColor: colors.appPrimary,
    width: Dimensions.get('window').width - horizontalScale(48),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white
  },
  addAnotherExperienceButtonText: {
    fontSize: moderateScale(17),
    fontFamily: 'Poppins-Regular',
    fontWeight: "400",
    color: colors.appPrimary
  },
  bottomButtonsContainer: {
    height: verticalScale(130),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
  },
  chipRawcontainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: verticalScale(4)
  },
  chipContainer: {
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(8)
  },
  chipOptionContainer:{
    marginEnd: horizontalScale(12),
    alignItems:'center',
    justifyContent:'center'
  },
  chipOptionRightContainer:{
    marginStart: horizontalScale(12),
    alignItems:'center',
    justifyContent:'center'
  },
  haveNavigated: {
    fontSize: moderateScale(13),
    marginTop: verticalScale(8),
    textAlign:'center',
    color:colors.chip_option_text,
    marginHorizontal: horizontalScale(20)
  }
});

export default MyExperiencesPage;