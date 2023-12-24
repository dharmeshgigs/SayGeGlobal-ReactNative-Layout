import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Dimensions, StyleSheet, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Iconify } from 'react-native-iconify';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParams } from '../../../App';
import DayViewComponent from '../../appcomponents/DayViewComponent';
import InputLabelComponent from '../../appcomponents/InputLabelComponent';
import LabelIconComponent from '../../appcomponents/LabelIconComponent';
import StatusBarAndroid from '../../appcomponents/StatusBarAndroid';
import WrapInputLabelComponent from '../../appcomponents/WrapInputLabelComponent';
import { colors } from '../../css/colors';
import { Style } from '../../css/styles';
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metrics';
import JoinButton from '../../appcomponents/JoinButton';
import TextInputErrorComponent from '../../appcomponents/TextInputErrorComponent';
import TextInputComponent from '../../appcomponents/TextInputComponent';

type Props = NativeStackScreenProps<RootStackParams, "MyAvailability">;

const MyAvailabilityPage = ({ navigation }: Props) => {

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
                        text={'My availability'}
                        textStyle={[Style().poppinSemiBoldTextStyle, styles.myExperience]} />
                    <InputLabelComponent
                        noOfLine={1}
                        text={'Preferred contact type'}
                        textStyle={[Style().poppinSemiBoldTextStyle, styles.preferredContactType]}
                    />
                    <WrapInputLabelComponent
                        text={'Select at least one'}
                        textStyle={[Style().interRegular13TextStyle, styles.selectAtLeast]}
                    />
                    <View style={styles.prefferedContainer}>
                        <LabelIconComponent
                            onPress={() => { }}
                            caption={'Video'}
                            icon={<Iconify icon="majesticons:video"
                                onPress={onBackClicked}
                                height={28} width={28} color={true ? colors.appPrimary : colors.icon_label}
                            />}
                            selected={true}
                            captionStyle={true ? styles.iconSelectedCaption : styles.iconCaption}
                        />
                        <LabelIconComponent
                            onPress={() => { }}
                            caption={'Phone'}
                            icon={<Iconify icon="solar:phone-bold"
                                onPress={onBackClicked}
                                height={28} width={28} color={false ? colors.appPrimary : colors.icon_label}
                            />}
                            selected={false}
                            captionStyle={false ? styles.iconSelectedCaption : styles.iconCaption}
                        />
                        <LabelIconComponent
                            onPress={() => { }}
                            caption={'Messaging'}
                            icon={<Iconify icon="icon-park-solid:message"
                                onPress={onBackClicked}
                                height={28} width={28} color={false ? colors.appPrimary : colors.icon_label}
                            />}
                            selected={false}
                            captionStyle={false ? styles.iconSelectedCaption : styles.iconCaption}
                        />
                        <LabelIconComponent
                            onPress={() => { }}
                            caption={'in-person'}
                            icon={<Iconify icon="mdi:person-multiple"
                                onPress={onBackClicked}
                                height={28} width={28} color={false ? colors.appPrimary : colors.icon_label}
                            />}
                            selected={false}
                            captionStyle={false ? styles.iconSelectedCaption : styles.iconCaption}
                        />
                    </View>
                    <View style={styles.horizontalDivider} />
                    <InputLabelComponent
                        noOfLine={1}
                        text={'General availability'}
                        textStyle={[Style().poppinSemiBoldTextStyle, styles.preferredContactType]}
                    />
                    <WrapInputLabelComponent
                        text={'Tip: Selecting days you are usually available to connect makes it easier to arrange once matched.'}
                        textStyle={[Style().interRegular13TextStyle, styles.selectAtLeast]}
                    />
                    <View style={styles.generalAvailabilityContainer}>
                        <DayViewComponent
                            caption={'Su'}
                            selected={true}
                            daySelected={true}
                            nightSelected={true}
                            onPress={() => { }}
                            onDaySelected={() => { }}
                            onNightSelected={() => { }}
                        />
                        <DayViewComponent
                            caption={'Mo'}
                            selected={false}
                            onPress={() => { }}
                            daySelected={false}
                            nightSelected={false}
                            onDaySelected={() => { }}
                            onNightSelected={() => { }}
                        />
                        <DayViewComponent
                            caption={'Tu'}
                            selected={false}
                            onPress={() => { }}
                            daySelected={false}
                            nightSelected={false}
                            onDaySelected={() => { }}
                            onNightSelected={() => { }}
                        />
                        <DayViewComponent
                            caption={'We'}
                            selected={false}
                            onPress={() => { }}
                            daySelected={false}
                            nightSelected={false}
                            onDaySelected={() => { }}
                            onNightSelected={() => { }}
                        />
                        <DayViewComponent
                            caption={'Th'}
                            selected={false}
                            onPress={() => { }}
                            daySelected={false}
                            nightSelected={false}
                            onDaySelected={() => { }}
                            onNightSelected={() => { }}
                        />
                        <DayViewComponent
                            caption={'Fr'}
                            selected={false}
                            onPress={() => { }}
                            daySelected={false}
                            nightSelected={false}
                            onDaySelected={() => { }}
                            onNightSelected={() => { }}
                        />
                        <DayViewComponent
                            caption={'Sa'}
                            selected={false}
                            onPress={() => { }}
                            daySelected={false}
                            nightSelected={false}
                            onDaySelected={() => { }}
                            onNightSelected={() => { }}
                        />
                    </View>
                    <View style={styles.horizontalDivider} />
                    <InputLabelComponent
                        noOfLine={1}
                        text={'Chat requests (optional)'}
                        textStyle={[Style().poppinSemiBoldTextStyle, styles.preferredContactType]}
                    />
                    <WrapInputLabelComponent
                        text={'Set a limit  for the number of chat requests you receive per month.'}
                        textStyle={[Style().interRegular13TextStyle, styles.selectAtLeast]}
                    />
                    <View style={styles.chatRequestContainer}>
                        <View style={[Style().flexCenterStyle]}>
                            <TextInput
                                value='0'
                                keyboardType='number-pad'
                                style={[Style().poppinSemiBoldTextStyle, styles.textInput]}
                            />
                        </View>
                        <View style={styles.verticalDivider} />
                        <View>
                            <View style={[Style().flexCenterStyle]}>
                                <Iconify icon="majesticons:chevron-up-line"
                                    height={28} width={28} color={colors.icon_label}
                                />
                            </View>
                            <View style={styles.horizontalDivider2} />
                            <View style={[Style().flexCenterStyle]}>
                                <Iconify icon="majesticons:chevron-down"
                                    height={28} width={28} color={colors.icon_label}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <JoinButton
                text={'Save & Finish'}
                outerStyle={styles.continue}
                onPress={onContinueClicked} />
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
        marginTop: verticalScale(32),
        bottom: verticalScale(50),
        position: 'absolute',
        width: Dimensions.get('window').width - horizontalScale(48),
        alignSelf: 'center'
    },
    preferredContactType: {
        color: colors.ico_location,
        marginHorizontal: horizontalScale(20),
        fontSize: moderateScale(15),
        marginTop: verticalScale(12)
    },
    selectAtLeast: {
        marginTop: verticalScale(8),
        marginHorizontal: horizontalScale(20)
    },
    content: {
        flex: 1,
        paddingTop: verticalScale(12)
    },
    backIcon: {
        marginLeft: horizontalScale(12)
    },
    horizontalDivider: {
        height: verticalScale(1),
        marginTop: verticalScale(12),
        backgroundColor: colors.divider_vertical
    },
    iconCaption: {
        color: colors.icon_label,
        marginVertical: verticalScale(8),
        alignSelf: 'center'
    },
    iconSelectedCaption: {
        color: colors.appPrimary,
        marginVertical: verticalScale(8),
        alignSelf: 'center'
    },
    prefferedContainer: {
        marginHorizontal: horizontalScale(20),
        marginTop: verticalScale(12),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    generalAvailabilityContainer: {
        marginHorizontal: horizontalScale(20),
        marginVertical: verticalScale(8),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dayContainer: {
        height: 33,
        width: 33,
        borderRadius: 33,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.topbar_privacy_bg
    },
    weekDay: {
        fontWeight: '500',
        fontSize: moderateScale(11)
    },
    chatRequestContainer: {
        marginVertical: verticalScale(16),
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderColor: colors.border_about,
        height: verticalScale(80),
        width: horizontalScale(100),
        marginBottom: verticalScale(120)
    },
    textInput: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: moderateScale(20),
        color: colors.icon_label
    },
    verticalDivider: {
        height: '100%',
        width: moderateScale(1),
        backgroundColor: colors.divider_vertical
    },
    horizontalDivider2: {
        height: verticalScale(1),
        backgroundColor: colors.divider_vertical
    },
});

export default MyAvailabilityPage;