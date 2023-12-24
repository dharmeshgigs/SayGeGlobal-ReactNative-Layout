import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { RootStackParams } from '../../../App';
import StatusBarAndroid from '../../appcomponents/StatusBarAndroid';
import WrapInputLabelComponent from '../../appcomponents/WrapInputLabelComponent';
import { colors } from '../../css/colors';
import { Style } from '../../css/styles';
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metrics';
import ImageComponent from '../../appcomponents/ImageComponent';
import InputLabelComponent from '../../appcomponents/InputLabelComponent';
import ButtonComponent from '../../appcomponents/ButtonComponent';
import JoinButton from '../../appcomponents/JoinButton';

type Props = NativeStackScreenProps<RootStackParams, "Matches">;

interface ItemProps {
    item: any,
    index: number
}

const MatchesPage = ({ navigation }: Props) => {

    const profiles = [
        {
            "id": "1",
            "name": "Linda N.",
            "category": "Parenting | Parenting | Career"
        },
        {
            "id": "2",
            "name": "Linda N.",
            "category": "Parenting | Parenting | Career"
        },
        {
            "id": "3",
            "name": "Linda N.",
            "category": "Parenting | Parenting | Career"
        }
    ];

    const onViewProfileClicked = () => navigation.navigate("ViewProfile");

    const ProfileCard = ({ item, index }: ItemProps) => (
        <View style={index == 0 ? styles.firstprofileCard : styles.profileCard}>
            <WrapInputLabelComponent
                text={item.name}
                textStyle={styles.nameStyle} />
            <ImageComponent
                url={require('../../assets/images/avatar_2.png')}
                imgStyle={styles.avatarStyle} />
            <InputLabelComponent
                text={item.category}
                noOfLine={2}
                textStyle={styles.categoryStyle} />
            <ButtonComponent
                text='View profile'
                touchableStyle={styles.editProfileButtonStyle}
                textStyle={styles.editProfileTextStyle}
                onPress={onViewProfileClicked} />
        </View>
    )

    return (
        <SafeAreaView style={[Style().normalPage]}>
            <StatusBarAndroid
                bgColor={colors.white}
                translucent={false} />
            <ScrollView >
                <View>
                    <WrapInputLabelComponent
                        text={'Your SAYge matches'}
                        textStyle={[Style().poppinSemiBoldTextStyle, styles.whatYourName]} />
                    <WrapInputLabelComponent
                        text={'Members have insight from experience are waiting to share their story with you'}
                        textStyle={[Style().poppinRegularTextStyle, styles.nameWilBeVisible]} />
                    <ScrollView horizontal
                        showsHorizontalScrollIndicator={false}>
                        <View style={styles.horizontalItems}>
                            {profiles.map((profile, index) => <ProfileCard key={index.toString()} item={profile} index={index} />)}
                        </View>
                    </ScrollView>
                    <View style={styles.horizontalDivider} />
                    <WrapInputLabelComponent
                        text={'You might also like'}
                        textStyle={styles.youMightAlso} />
                    <View style={styles.storyContainer}>
                        <ImageComponent
                            url={require('../../assets/images/avatar_story.png')}
                            imgStyle={styles.avatarStoryStyle} />
                        <WrapInputLabelComponent
                            text={'SAYge Real Stories: Divorced, Not Devoiced'}
                            textStyle={styles.realStory} />
                    </View>
                    <WrapInputLabelComponent
                        text={'In this SAYge Real Stories event, we heard from two incredible women who have come through the other side of divorce and are now helping other women be empowered as they navigate their way through it.'}
                        textStyle={styles.inThisSAYGE} />
                    <JoinButton
                        text='Watch'
                        outerStyle={styles.watch}
                        textStyle={styles.watchText}
                        onPress={() => { }} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    continue: {
        marginVertical: verticalScale(8),
        marginTop: verticalScale(16),
        marginHorizontal: horizontalScale(24)
    },
    whatYourName: {
        marginTop: verticalScale(24),
        marginHorizontal: horizontalScale(24)
    },
    nameWilBeVisible: {
        marginTop: verticalScale(12),
        textAlign: 'justify',
        fontSize: moderateScale(15),
        marginHorizontal: horizontalScale(24),
        marginBottom: verticalScale(24)
    },
    horizontalItems: {
        flexDirection: 'row',
        marginVertical: verticalScale(4)
    },
    firstprofileCard: {
        width: horizontalScale(228),
        height: verticalScale(280),
        marginStart: horizontalScale(24),
        marginHorizontal: horizontalScale(12),
        borderRadius: 13,
        paddingVertical: verticalScale(12),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation:4,
        backgroundColor: colors.white
    },
    profileCard: {
        width: horizontalScale(228),
        height: verticalScale(280),
        marginHorizontal: horizontalScale(12),
        borderRadius: 13,
        paddingVertical: verticalScale(12),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation:4,
        backgroundColor: colors.white
    },
    nameStyle: {
        alignSelf: 'center',
        fontFamily: 'Poppins-SemiBold',
        fontWeight: '600',
        fontSize: moderateScale(17),
        color: colors.text_msg
    },
    avatarStyle: {
        width: verticalScale(100),
        height: verticalScale(100),
        alignSelf: 'center',
        marginVertical: verticalScale(16)
    },
    categoryStyle: {
        alignSelf: 'center',
        fontFamily: 'Poppins-Regular',
        fontWeight: '400',
        fontSize: moderateScale(12),
        color: colors.text_msg
    },
    editProfileButtonStyle: {
        height: verticalScale(48),
        borderRadius: moderateScale(8),
        elevation: 8,
        alignSelf: 'center',
        marginVertical: verticalScale(12),
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
    horizontalDivider: {
        height: verticalScale(1),
        marginHorizontal: horizontalScale(24),
        marginVertical: verticalScale(24),
        backgroundColor: colors.divider_vertical
    },
    youMightAlso: {
        fontSize: moderateScale(16),
        fontFamily: 'Poppins-Regular',
        marginHorizontal: horizontalScale(24),
        fontWeight: "500",
        color: colors.text_msg
    },
    avatarStoryStyle: {
        width: verticalScale(55),
        height: verticalScale(55)
    },
    storyContainer: {
        marginHorizontal: horizontalScale(24),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: verticalScale(12)
    },
    realStory: {
        fontSize: moderateScale(15),
        fontFamily: 'Poppins-SemiBold',
        marginStart: horizontalScale(24),
        fontWeight: "600",
        color: colors.ico_location
    },
    inThisSAYGE: {
        fontFamily: 'Inter-Regular',
        fontWeight: '400',
        fontSize: moderateScale(16),
        color: colors.text_msg,
        marginHorizontal: horizontalScale(24)
    },
    watch: {
        alignSelf: 'baseline',
        marginHorizontal: horizontalScale(24),
        paddingHorizontal: horizontalScale(24),
        marginVertical: verticalScale(24)
    },
    watchText: {
        fontFamily: 'Inter-Bold',
        fontWeight: '600',
        fontSize: moderateScale(12)
    }
});

export default MatchesPage;