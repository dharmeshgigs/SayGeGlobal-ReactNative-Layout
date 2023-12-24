import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useRef } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Iconify } from 'react-native-iconify';
import { Modalize } from 'react-native-modalize';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParams } from '../../../App';
import AppBar from '../../appcomponents/AppBar';
import ImageComponent from '../../appcomponents/ImageComponent';
import InputLabelComponent from '../../appcomponents/InputLabelComponent';
import StatusBarAndroid from '../../appcomponents/StatusBarAndroid';
import TextInputComponent from '../../appcomponents/TextInputComponent';
import TextInputErrorComponent from '../../appcomponents/TextInputErrorComponent';
import WrapInputLabelComponent from '../../appcomponents/WrapInputLabelComponent';
import { colors } from '../../css/colors';
import { Style } from '../../css/styles';
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metrics';
import SelectLanguages from './SelectLanguages';
import SelectPronouns from './SelectPronouns';

type Props = NativeStackScreenProps<RootStackParams, "EditProfile">;

const EditProfilePage = ({ navigation }: Props) => {

    const modalizeRef = useRef<Modalize>(null);
    const modalizeLanguageRef = useRef<Modalize>(null);

    const onBackClicked = () => navigation.goBack();

    const onExperienceClicked = (item: any) => {
        navigation.push("StorySelection", { story: item });
    }

    const onPronounsSelection = () => {
        modalizeRef?.current?.open();
    }

    const onLanguageSelection = () => {
        modalizeLanguageRef?.current?.open();
    }

    return (
        <SafeAreaView style={Style().normalPage}>
            <StatusBarAndroid
                bgColor={colors.white}
                translucent={false}
            />
            <AppBar
                title={'Edit Profile'}
                showback={true}
                onBackClicked={onBackClicked}
            />
            <ScrollView>
                <View style={styles.content}>
                    <View style={styles.profileContainer}>
                        <ImageComponent
                            url={require('../../assets/images/person.png')}
                            imgStyle={styles.profile}
                            resizeMode='contain' />
                        <InputLabelComponent
                            text={'Change photo'}
                            textStyle={[Style().interRegularTextStyle, styles.changePhoto]} />

                    </View>
                    <View style={styles.nameContainer}>
                        <View style={styles.nameInnerContainer}>
                            <WrapInputLabelComponent
                                text={'Name'}
                                textStyle={[Style().interLight13TextStyle, styles.name]} />
                        </View>
                        <TextInputComponent
                            text='Kayla Lafi'
                            errorText={''}
                            inputOuterStyle={styles.nameInputStyle}
                            textStyle={styles.nameTextInputStyle}
                            placeHolderText='Enter name'
                            onChangeText={(text) => {
                            }} />
                    </View>
                    <View style={styles.horizontalDivider} />
                    <View style={styles.nameContainer}>
                        <View style={styles.nameInnerContainer}>
                            <WrapInputLabelComponent
                                text={'Email'}
                                textStyle={[Style().interLight13TextStyle, styles.name]} />
                        </View>
                        <TextInputComponent
                            text='klafi@email.com'
                            errorText={''}
                            inputOuterStyle={styles.nameInputStyle}
                            textStyle={styles.nameTextInputStyle}
                            placeHolderText='Enter email'
                            onChangeText={(text) => {
                            }} />
                    </View>
                    <View style={styles.horizontalDivider} />
                    <View style={styles.nameContainer}>
                        <View style={styles.nameInnerContainer}>
                            <WrapInputLabelComponent
                                text={'Pronouns'}
                                textStyle={[Style().interLight13TextStyle, styles.name]} />
                        </View>
                        <TouchableOpacity onPress={onPronounsSelection}
                            style={styles.selectProunounsContainer}>
                            <View style={styles.selectProunounsContainer}>
                                <View style={styles.selectProunouns}>
                                    <WrapInputLabelComponent
                                        text={'Select pronouns'}
                                        textStyle={styles.pronounsValue}
                                    />
                                </View>
                                <Iconify icon="ci:chevron-right"
                                    height={verticalScale(34)}
                                    width={horizontalScale(34)}
                                    color={colors.black}
                                    style={styles.chevronRight} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.horizontalDivider} />
                    <View style={styles.nameContainer}>
                        <View style={styles.nameInnerContainer}>
                            <WrapInputLabelComponent
                                text={'Location'}
                                textStyle={[Style().interLight13TextStyle, styles.name]} />
                        </View>
                        <TouchableOpacity
                            style={styles.selectProunounsContainer}>
                            <View style={styles.selectProunounsContainer}>
                                <View style={styles.selectProunouns}>
                                    <WrapInputLabelComponent
                                        text={'New Jersey, USA'}
                                        textStyle={styles.pronounsValue}
                                    />
                                </View>
                                <Iconify icon="ci:chevron-right"
                                    height={verticalScale(34)}
                                    width={horizontalScale(34)}
                                    color={colors.black}
                                    style={styles.chevronRight} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.horizontalDivider} />
                    <View style={styles.nameContainer}>
                        <View style={styles.nameInnerContainer}>
                            <WrapInputLabelComponent
                                text={'Languages'}
                                textStyle={[Style().interLight13TextStyle, styles.name]} />
                        </View>
                        <TouchableOpacity onPress={onLanguageSelection}
                            style={styles.selectProunounsContainer}>
                            <View style={styles.selectProunounsContainer}>
                                <View style={styles.selectProunouns}>
                                    <WrapInputLabelComponent
                                        text={'Select languages'}
                                        textStyle={styles.pronounsValue}
                                    />
                                </View>
                                <Iconify icon="ci:chevron-right"
                                    height={verticalScale(34)}
                                    width={horizontalScale(34)}
                                    color={colors.black}
                                    style={styles.chevronRight} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.horizontalDivider} />
                    <InputLabelComponent
                        noOfLine={1}
                        text={'About me:'}
                        textStyle={[Style().poppinSemiBoldTextStyle, styles.aboutMe]}
                    />
                    <TextInputErrorComponent
                        text=''
                        placeHolderText='Add about you'
                        inputOuterStyle={styles.nameInput}
                        textStyle={styles.textInput}
                        noOfLine={5}
                        onChangeText={(text) => { }} />
                    <InputLabelComponent
                        noOfLine={1}
                        text={'Additonal Info'}
                        textStyle={[Style().poppinSemiBoldTextStyle, styles.aboutMe]}
                    />
                    <View style={styles.nameContainer}>
                        <View style={styles.nameInnerContainer}>
                            <WrapInputLabelComponent
                                text={'Website'}
                                textStyle={[Style().interLight13TextStyle, styles.name]} />
                        </View>
                        <TextInputComponent
                            text=''
                            errorText={''}
                            placeholderTextColor={colors.black}
                            inputOuterStyle={styles.nameInputStyle}
                            textStyle={styles.nameTextInputStyle}
                            placeHolderText='Add Website'
                            onChangeText={(text) => { }} />
                    </View>
                </View>
            </ScrollView>
            <Modalize
                ref={modalizeRef}
                onClosed={() => { }}
                withHandle={false}
                adjustToContentHeight={true}>
                <SelectPronouns
                    onClosed={() => {
                        modalizeRef?.current?.close();
                    }}
                />
            </Modalize>
            <Modalize
                ref={modalizeLanguageRef}
                onClosed={() => { }}
                withHandle={false}
                adjustToContentHeight={true}>
                <SelectLanguages
                    onClosed={() => {
                        modalizeLanguageRef?.current?.close();
                    }}
                />
            </Modalize>
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
    horizontalDivider: {
        height: verticalScale(1),
        backgroundColor: colors.divider_vertical
    },
    changePhoto: {
        fontWeight: '500',
        fontSize: moderateScale(13),
        color: colors.ico_location,
        marginTop: verticalScale(12)
    },
    nameContainer: {
        flexDirection: 'row',
        height: verticalScale(60),
        alignItems: 'center',
        justifyContent: 'center'
    },
    nameInnerContainer: {
        flex: 2.4,
        alignItems: 'center'
    },
    name: {
        color: colors.black_38,
        paddingStart: horizontalScale(24)
    },
    nameInputStyle: {
        flex: 3.6,
        color: colors.name_input,
        fontFamily: 'Inter-Regular',
        fontWeight: '500',
        fontSize: moderateScale(13)
    },
    nameTextInputStyle: {
        color: colors.name_input,
        fontFamily: 'Inter-Regular',
        fontWeight: '500',
        paddingHorizontal: 0,
        fontSize: moderateScale(13)
    },
    fieldContainer: {
        flexDirection: 'row',
        marginVertical: verticalScale(8),
        alignItems: 'center',
        paddingHorizontal: horizontalScale(20)
    },
    selectorFieldContainer: {
        flexDirection: 'row',
        height: verticalScale(48),
        marginVertical: verticalScale(8),
        alignItems: 'center',
        justifyContent: "center",
        paddingHorizontal: horizontalScale(20)
    },
    pronounsValue: {
        color: colors.name_input,
        fontFamily: 'Inter-Regular',
        fontWeight: '500',
        alignSelf: 'baseline',
        flex: 1,
        fontSize: moderateScale(13)
    },
    selectProunouns: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    chevronRight: {
        marginEnd: horizontalScale(16)
    },
    aboutMe: {
        color: colors.ico_location,
        marginHorizontal: horizontalScale(20),
        fontSize: moderateScale(15),
        marginTop: verticalScale(12)
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
        height: verticalScale(140)
    },
    textInput: {
        textAlignVertical: 'top',
        paddingLeft: horizontalScale(8),
        paddingTop: verticalScale(18),
        height: verticalScale(140)
    },
    selectProunounsContainer: {
        flex: 3.6,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default EditProfilePage;