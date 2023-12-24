import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { colors } from "../css/colors";
import { moderateScale, verticalScale } from "../utils/Metrics";
import WrapInputLabelComponent from "./WrapInputLabelComponent";

interface Props {
    caption: string,
    selected: boolean,
    onPress: () => any
}

const PronounViewComponent = ({
    caption,
    selected = false,
    onPress
}: Props) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <View style={selected ? styles.selectedContainer : styles.Container}>
                    <WrapInputLabelComponent
                        text={caption}
                        textStyle={selected ? styles.selectedWeekDay : styles.weekDay}
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    Container: {
        height: 40,
        width: 140,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        marginVertical: verticalScale(8),
        borderColor: colors.topbar_privacy_bg
    },
    selectedContainer: {
        height: 40,
        width: 140,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        marginVertical: verticalScale(8),
        borderColor: colors.photo_upload
    },
    weekDay: {
        fontWeight: '500',
        color: colors.text_msg,
        alignSelf: 'center',
        fontSize: moderateScale(11)
    },
    selectedWeekDay: {
        fontWeight: '500',
        alignSelf: 'center',
        color: colors.ico_location,
        fontSize: moderateScale(11)
    },
    dayIcon: {
        marginVertical: verticalScale(8)
    }
});

export default PronounViewComponent;