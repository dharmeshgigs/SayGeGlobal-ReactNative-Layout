import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Iconify } from 'react-native-iconify';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParams } from '../../../App';
import AppBar from '../../appcomponents/AppBar';
import ButtonComponent from '../../appcomponents/ButtonComponent';
import ImageComponent from '../../appcomponents/ImageComponent';
import InputLabelComponent from '../../appcomponents/InputLabelComponent';
import JoinButton from '../../appcomponents/JoinButton';
import StatusBarAndroid from '../../appcomponents/StatusBarAndroid';
import WrapInputLabelComponent from '../../appcomponents/WrapInputLabelComponent';
import { colors } from '../../css/colors';
import { Style } from '../../css/styles';
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metrics';
import ExperienceList from './ExperienceList';
import DayViewComponent from '../../appcomponents/DayViewComponent';
import TextComponent from '../../appcomponents/TextComponent';

type Props = NativeStackScreenProps<RootStackParams, "MyProfile">;

interface ItemProps {
    item: any
}

const MyProfilePage = ({ navigation }: Props) => {

    const availabilities = [
        {
            "weekDay": "Su",
            "day": true,
            "night": true
        },
        {
            "weekDay": "We",
            "night": true,
            "day": true
        },
        {
            "weekDay": "Th",
            "day": false,
            "night": true
        }
    ];

    const languages = [
        {
            "id": "1",
            "lang": "English"
        },
        {
            "id": "2",
            "lang": "Spanish"
        },
        {
            "id": "3",
            "lang": "Spanish"
        }
    ];

    const onAddAvailabilityClicked = () => navigation.navigate("MyAvailability");

    const onWeekDayEditClicked = () => navigation.navigate("MyAvailability");

    const onAvailabilityEditClicked = () => navigation.push("StorySelection", {});

    const onEditProfileClicked = () => navigation.navigate("EditProfile");

    const onWebsiteClicked = () => { };

    const onExperienceClicked = (item: any) => {
        navigation.push("StorySelection", { story: item });
    }

    const HeaderComponent = () => (
        <InputLabelComponent
            text={'Availability'}
            textStyle={[Style().poppinSemiBoldTextStyle, styles.header]}
        />
    )

    const ExperienceItem = ({ item }: ItemProps) => (
        <TouchableOpacity onPress={() => {
            onExperienceClicked(item);
        }}>
            <View style={styles.itemContainer}>
                <ImageComponent
                    url={require('../../assets/images/splash_logo.png')}
                    imgStyle={styles.itemIcon}
                    resizeMode="contain"
                />
                <View style={[Style().body]}>
                    <InputLabelComponent
                        text={item.subcategory}
                        noOfLine={3}
                        textStyle={[Style().poppinRegularTextStyle, styles.subcategory]}
                    />
                    <WrapInputLabelComponent
                        text={item.story}
                        textStyle={[Style().interRegular13TextStyle, styles.story]}
                    />
                    <InputLabelComponent
                        text={item.tag}
                        noOfLine={3}
                        textStyle={[Style().interRegularTextStyle, styles.tag]}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );

    const experiences = [
        {
            "id": "1",
            "subcategory": "Divorce",
            "story": "Resilient parent navigating life post-divorce, sharing custody wisdom 💙",
            "tag": "#CustodyIssues"
        },
        {
            "id": "2",
            "subcategory": "Divorce",
            "story": "Resilient parent navigating life post-divorce, sharing custody wisdom 💙",
            "tag": "#CustodyIssues"
        }
    ];

    return (
        <SafeAreaView style={Style().normalPage}>
            <StatusBarAndroid
                bgColor={colors.white}
                translucent={false}
            />
            <AppBar title={'My Profile'} />
            <ScrollView>
                <View style={styles.content}>
                    <View style={styles.profileOuterContainer}>
                        <View style={styles.profileContainer}>
                            <ImageComponent
                                url={require('../../assets/images/person.png')}
                                imgStyle={styles.profile}
                                resizeMode='contain'
                            />
                        </View>
                        <View style={styles.profileStatistics}>
                            <View style={[Style().flexCenterStyle, styles.joinedContainer]}>
                                <InputLabelComponent
                                    text='2023'
                                    textStyle={[Style().poppinRegularTextStyle, styles.joinedValue]}
                                />
                                <InputLabelComponent
                                    text='Joined'
                                    textStyle={[Style().poppinRegularTextStyle, styles.joined]}
                                />
                            </View>
                            <View style={styles.verticalDivider} />
                            <View style={[Style().flexCenterStyle, styles.joinedContainer]}>
                                <InputLabelComponent
                                    text='0'
                                    textStyle={[Style().poppinRegularTextStyle, styles.joinedValue]}
                                />
                                <InputLabelComponent
                                    text='Connects'
                                    textStyle={[Style().poppinRegularTextStyle, styles.joined]}
                                />
                            </View>
                            <View style={styles.verticalDivider} />
                            <View style={[Style().flexCenterStyle, styles.joinedContainer]}>
                                <Iconify icon="material-symbols:verified" height={verticalScale(34)} width={horizontalScale(34)} color={colors.ico_location} />
                                <InputLabelComponent
                                    text='Verified'
                                    textStyle={[Style().poppinRegularTextStyle, styles.joined]}
                                /></View>
                        </View>
                    </View>
                    <View style={styles.nameContainer}>
                        <View style={[Style().body]}>
                            <InputLabelComponent
                                text='Kayla L.'
                                textStyle={[Style().poppinRegularTextStyle, styles.name]}
                            />
                        </View>
                        <ButtonComponent
                            text='Edit profile'
                            touchableStyle={styles.editProfileButtonStyle}
                            textStyle={styles.editProfileTextStyle}
                            onPress={onEditProfileClicked}
                        />
                    </View>
                    <View style={styles.locationContainer}>
                        <Iconify icon="ion:location-sharp" height={verticalScale(22)} width={horizontalScale(18)} color={colors.icon_location_black} />
                        <InputLabelComponent
                            text='New Jersey, USA'
                            textStyle={[Style().poppinRegularTextStyle, styles.location]}
                        />
                    </View>
                    <WrapInputLabelComponent
                        text='I am a Kayla. I work in technology and I advocate for mental health. I have 7 dogs that I love so much. I look forward to connecting with you. '
                        textStyle={[Style().interRegularTextStyle, styles.description]} />
                    <View style={styles.websiteContainer}>
                        <Iconify icon="mdi:web"
                            height={verticalScale(28)}
                            width={horizontalScale(28)}
                            color={colors.ico_location} />
                        <InputLabelComponent
                            noOfLine={1}
                            onPress={onWebsiteClicked}
                            text={'www.kaylalafi.com'}
                            textStyle={styles.website}
                        />
                    </View>
                    {languages.length > 0 ?
                        <View>
                            <WrapInputLabelComponent
                                text={'My languages:'}
                                textStyle={[Style().interLight13TextStyle, styles.addYourGeneral]}
                            />
                            <View style={styles.languageContainer}>
                                {
                                    languages.map((lang, index) => {
                                        return (
                                            <View
                                                key={index.toString()}
                                                style={{
                                                    marginEnd: horizontalScale(8),
                                                    marginVertical: verticalScale(8),
                                                }}>
                                                <WrapInputLabelComponent
                                                    text={lang.lang}
                                                    textStyle={[Style().interLight13TextStyle, styles.language]}
                                                />
                                            </View>
                                        );
                                    })}
                            </View></View> : null}
                    <View style={styles.socialMediaContainer}>
                        <Iconify icon="devicon:facebook"
                            height={horizontalScale(24)}
                            width={horizontalScale(24)}
                            style={styles.socialIcon}
                            onPress={() => { }} />

                        <Iconify icon="skill-icons:instagram"
                            height={horizontalScale(24)}
                            width={horizontalScale(24)}
                            style={styles.socialIcon}
                            onPress={() => { }} />    

                        <Iconify icon="devicon:linkedin"
                            height={horizontalScale(24)}
                            width={horizontalScale(24)}
                            style={styles.socialIcon}
                            onPress={() => { }} />        
                    </View>
                    <View style={styles.horizontalDivider} />
                    {experiences.length > 0 ?
                        <View style={styles.container}>
                            <View style={styles.experiencesHeaderContainer}>
                                <InputLabelComponent
                                    text={'Experiences'}
                                    textStyle={[Style().poppinSemiBoldTextStyle, styles.experienceHeader]}
                                />
                                <Iconify icon="ic:baseline-edit"
                                    height={verticalScale(24)}
                                    width={horizontalScale(24)}
                                    onPress={onAvailabilityEditClicked}
                                    color={colors.icon_label} />
                            </View>

                            {experiences.map((exp, index) => {
                                return (
                                    <ExperienceItem
                                        key={index.toString()}
                                        item={exp} />
                                );
                            })}
                        </View> : null}

                    {/* <ExperienceList
                        onItemClick={(item) => {
                            onExperienceClicked(item);
                        }}
                        data={experiences}
                    /> */}
                    <View style={styles.horizontalDivider} />
                    <View style={styles.availabilityHeaderContainer}>
                        <HeaderComponent
                        />
                        <Iconify icon="ic:baseline-edit"
                            height={verticalScale(24)}
                            width={horizontalScale(24)}
                            onPress={onWeekDayEditClicked}
                            color={colors.icon_label} />
                    </View>
                    <View style={styles.availabilityContainer}>
                        <WrapInputLabelComponent
                            text={'Add your general availability '}
                            textStyle={[Style().interRegular13TextStyle, styles.addYourGeneral]}
                        />
                        <JoinButton
                            text='Add availability'
                            outerStyle={styles.addAvailability}
                            textStyle={styles.addAvailabilityButton}
                            onPress={onAddAvailabilityClicked} />
                    </View>
                    {/* {availabilities.length > 0 ? */}
                    <View>
                        <View style={styles.generalAvailabilityContainer}>
                            {availabilities.map((rec, index) => {
                                return (
                                    <View key={rec.weekDay}
                                        style={[index == 0 ? styles.firstItemAvailable : styles.itemAvailable]}>
                                        <DayViewComponent
                                            caption={rec.weekDay}
                                            selected={true}
                                            daySelected={rec.day}
                                            nightSelected={rec.night}
                                            show={false}
                                            onPress={() => { }}
                                            onDaySelected={() => { }}
                                            onNightSelected={() => { }}
                                        />
                                    </View>
                                );
                            })}
                        </View>
                        <View style={styles.availabilityHeaderContainer}>
                            <WrapInputLabelComponent
                                text={'Preferred contact type'}
                                textStyle={[Style().poppinRegular15TextStyle, styles.preferredContactType]}
                            />
                            <Iconify icon="ic:baseline-edit"
                                height={verticalScale(24)}
                                width={horizontalScale(24)}
                                onPress={onWeekDayEditClicked}
                                color={colors.icon_label} />
                        </View>
                        <View style={styles.availabilityHeaderContainer}>
                            <WrapInputLabelComponent
                                text={'Chat request'}
                                textStyle={[Style().poppinRegular15TextStyle, styles.preferredContactType]}
                            />
                            <Iconify icon="ic:baseline-edit"
                                height={verticalScale(24)}
                                width={horizontalScale(24)}
                                onPress={onWeekDayEditClicked}
                                color={colors.icon_label} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        paddingTop: verticalScale(12)
    },
    profileOuterContainer: {
        flexDirection: 'row'
    },
    profileContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileStatistics: {
        flex: 4,
        height: verticalScale(54),
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    profile: {
        height: 90,
        width: 90,
        borderRadius: 90
    },
    verticalDivider: {
        width: horizontalScale(1),
        height: '70%',
        backgroundColor: colors.divider_vertical
    },
    joinedContainer: {
        justifyContent: 'space-evenly',
        height: verticalScale(54)
    },
    joined: {
        color: colors.black,
        fontSize: moderateScale(10)
    },
    joinedValue: {
        color: colors.black
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: verticalScale(24),
        marginHorizontal: horizontalScale(24)
    },
    name: {
        fontFamily: 'Poppins-Bold',
        color: colors.black,
        fontSize: moderateScale(18),
        paddingEnd: horizontalScale(8)
    },
    editProfileButtonStyle: {
        height: verticalScale(48),
        borderRadius: moderateScale(8),
        elevation: 8,
        alignSelf: 'baseline',
        paddingHorizontal: horizontalScale(12),
        borderWidth: moderateScale(1),
        borderColor: colors.appPrimary,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white
    },
    editProfileTextStyle: {
        fontSize: moderateScale(13),
        fontFamily: 'Poppins-Bold',
        fontWeight: "600",
        color: colors.appPrimary
    },
    locationContainer: {
        flexDirection: 'row',
        marginHorizontal: horizontalScale(20)
    },
    location: {
        color: colors.text_input_hint_email,
        marginStart: horizontalScale(4),
        fontSize: moderateScale(12)
    },
    description: {
        marginHorizontal: horizontalScale(24),
        fontSize: moderateScale(13),
        marginTop: verticalScale(12)
    },
    horizontalDivider: {
        height: verticalScale(1),
        marginTop: verticalScale(12),
        backgroundColor: colors.divider_vertical
    },
    header: {
        fontSize: moderateScale(15),
        color: colors.text_msg,
        flex: 1,
        marginTop: verticalScale(12)
    },
    addYourGeneral: {
        marginHorizontal: horizontalScale(24)
    },
    addAvailability: {
        marginTop: verticalScale(32),
        paddingHorizontal: horizontalScale(16),
        alignSelf: 'center'
    },
    addAvailabilityButton: {
        fontSize: moderateScale(13),
        fontFamily: 'Poppins-Bold',
        fontWeight: "600"
    },
    availabilityContainer: {
        paddingBottom: verticalScale(16)
    },
    generalAvailabilityContainer: {
        marginHorizontal: horizontalScale(20),
        marginVertical: verticalScale(8),
        flexDirection: 'row'
    },
    firstItemAvailable: {
        marginEnd: horizontalScale(8)
    },
    itemAvailable: {
        marginHorizontal: horizontalScale(8)
    },
    availabilityHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: verticalScale(12),
        marginHorizontal: horizontalScale(24)
    },
    preferredContactType: {
        fontWeight: '500',
        color: colors.appPrimary,
        flex: 1
    },
    websiteContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: verticalScale(8),
        marginHorizontal: horizontalScale(20)
    },
    website: {
        fontFamily: 'Inter-Light',
        fontWeight: '400',
        fontSize: moderateScale(13),
        alignSelf: 'center',
        marginStart: horizontalScale(8),
        color: colors.chip_option_text
    },
    itemContainer: {
        flexDirection: 'row',
        marginVertical: verticalScale(8)
    },
    itemIcon: {
        width: horizontalScale(47),
        height: verticalScale(44),
        marginEnd: horizontalScale(8)
    },
    subcategory: {
        fontSize: moderateScale(15)
    },
    story: {
        marginTop: verticalScale(8)
    },
    tag: {
        fontSize: moderateScale(13),
        marginTop: verticalScale(4),
        color: colors.appPrimary
    },
    container: {
        marginVertical: verticalScale(12),
        marginHorizontal: horizontalScale(16)
    },
    experienceHeader: {
        fontSize: moderateScale(15),
        color: colors.text_msg,
        flex: 1,
        marginTop: verticalScale(12)
    },
    experiencesHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: verticalScale(12),
        marginHorizontal: horizontalScale(8)
    },
    languageContainer: {
        flex: 1,
        marginVertical: verticalScale(8),
        paddingHorizontal: horizontalScale(20),
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    language: {
        backgroundColor: colors.text_lang,
        borderWidth: moderateScale(1),
        borderColor: colors.ico_location,
        borderRadius: moderateScale(5),
        paddingHorizontal: horizontalScale(12),
        paddingVertical: verticalScale(4),
        color: colors.text_input_label
    },
    socialMediaContainer: {
        flexDirection: 'row',
        flex: 1,
        marginTop:verticalScale(12),
        marginHorizontal:horizontalScale(20)
    },
    socialIcon: {
        marginEnd: horizontalScale(16)
    }
});

export default MyProfilePage;