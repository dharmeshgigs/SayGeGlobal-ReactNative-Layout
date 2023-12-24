import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Iconify } from 'react-native-iconify';
import SwitchToggle from "react-native-switch-toggle";
import AppBar from '../../appcomponents/AppBar';
import JoinButton from '../../appcomponents/JoinButton';
import PronounViewComponent from '../../appcomponents/PronounViewComponent';
import WrapInputLabelComponent from '../../appcomponents/WrapInputLabelComponent';
import { colors } from '../../css/colors';
import { Style } from '../../css/styles';
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metrics';
import StatusBarAndroid from '../../appcomponents/StatusBarAndroid';

interface Props {
    onClosed: () => any
}

const SelectPronouns = ({ onClosed }: Props) => {

    const [switchEnabled, setSwitchEnabled] = useState(false);

    const onBackClicked = () => {
        onClosed();
    }

    return (
        <View style={styles.body}>
             <StatusBarAndroid
                bgColor={colors.white}
                translucent={false} />
            <AppBar
                title={'My pronouns'}
                titleStyle={styles.title}
                showback={true}
                onBackClicked={onBackClicked} />
            <WrapInputLabelComponent
                text={'Select up to 3 preferred pronouns'}
                textStyle={styles.selectUpto3} />
            <View style={styles.selectionContainer}>
                <View style={styles.selectionRawContainer}>
                    <PronounViewComponent
                        caption={'She/Her'}
                        selected={true}
                        onPress={() => { }} />
                    <PronounViewComponent
                        caption={'He/Him'}
                        selected={false}
                        onPress={() => { }} />
                </View>
                <View style={styles.selectionRawContainer}>
                    <PronounViewComponent
                        caption={'They/Them'}
                        selected={false}
                        onPress={() => { }} />
                </View>
            </View>
            <View style={styles.whyPronouns}>
                <Text>Why pronouns are important?</Text>
                <TouchableOpacity onPress={() => { }}><Text style={Style().linkTextStyle}> Learn more.</Text></TouchableOpacity>
            </View>
            <View style={styles.horizontalDivider} />
            <View style={styles.visibleContainer}>
                <WrapInputLabelComponent
                    text={'Visible'}
                    textStyle={styles.visible} />
                <Iconify icon="clarity:eye-show-line"
                    height={verticalScale(24)}
                    width={horizontalScale(24)}
                    color={colors.ico_location} />
                <SwitchToggle
                    switchOn={switchEnabled}
                    containerStyle={styles.switchOuterContainer}
                    circleStyle={styles.switchCircleContainer}
                    onPress={() => {
                        setSwitchEnabled(!switchEnabled)
                    }}
                    circleColorOff={colors.white}
                    circleColorOn={colors.photo_upload}
                    backgroundColorOn={colors.ico_location}
                    backgroundColorOff={colors.divider_vertical} />
            </View>
            <View style={styles.saveContainer}>
                <JoinButton
                    text='Save'
                    outerStyle={styles.saveButton}
                    onPress={() => { }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        overflow: 'hidden'
    },
    title: {
        fontFamily: 'Poppins-Regular',
        fontWeight: '400',
        fontSize: moderateScale(17),
        color: colors.appPrimary
    },
    selectUpto3: {
        fontFamily: 'Inter-Regular',
        fontWeight: '400',
        fontSize: moderateScale(13),
        color: colors.text_msg,
        alignSelf: "center"
    },
    selectionRawContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    selectionContainer: {
        marginTop: verticalScale(32),
        marginBottom: verticalScale(12),
        marginHorizontal: horizontalScale(24)
    },
    whyPronouns: {
        marginHorizontal: horizontalScale(24),
        flexDirection: 'row',
        marginBottom: verticalScale(8)
    },
    horizontalDivider: {
        height: verticalScale(0.5),
        backgroundColor: colors.divider_vertical
    },
    visibleContainer: {
        paddingVertical: verticalScale(12),
        flexDirection: 'row',
        paddingHorizontal: horizontalScale(24),
        alignItems: 'center'
    },
    visible: {
        fontFamily: 'Poppins-Regular',
        fontWeight: '400',
        fontSize: moderateScale(15),
        marginEnd: horizontalScale(12),
        color: colors.text_msg,
        alignSelf: "center"
    },
    switchOuterContainer: {
        width: horizontalScale(60),
        height: verticalScale(40),
        borderRadius: 25,
        padding: 3,
        marginStart: horizontalScale(8)
    },
    switchCircleContainer: {
        width: horizontalScale(28),
        height: horizontalScale(28),
        borderRadius: 20
    },
    saveButton: {
        alignSelf: 'center',
        paddingHorizontal: horizontalScale(24),
        marginVertical: verticalScale(32)
    },
    saveContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
});

export default SelectPronouns;