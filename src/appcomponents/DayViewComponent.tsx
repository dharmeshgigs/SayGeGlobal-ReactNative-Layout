import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { colors } from "../css/colors";
import { moderateScale, verticalScale } from "../utils/Metrics";
import WrapInputLabelComponent from "./WrapInputLabelComponent";
import { Iconify } from "react-native-iconify";

interface Props {
    caption: string,
    selected: boolean,
    daySelected: boolean,
    nightSelected: boolean,
    show?: boolean,
    onPress: () => any,
    onDaySelected: () => any,
    onNightSelected: () => any
}

const DayViewComponent = ({
    caption,
    selected = false,
    daySelected = false,
    nightSelected = false,
    show = true,
    onPress,
    onDaySelected,
    onNightSelected
}: Props) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <View style={selected ? styles.selectedDayContainer : styles.dayContainer}>
                    <WrapInputLabelComponent
                        text={caption}
                        textStyle={selected ? styles.selectedWeekDay : styles.weekDay}
                    />
                </View>
            </TouchableOpacity>
            {show ?
                <View>
                    <View style={daySelected ? styles.selectedDayContainer : styles.dayContainer}>
                        <Iconify icon="akar-icons:sun-fill"
                            onPress={onDaySelected}
                            height={26}
                            width={26}
                            color={daySelected ? colors.ico_location : colors.divider_or}
                            style={styles.dayIcon} />
                    </View>
                    <View style={nightSelected ? styles.selectedDayContainer : styles.dayContainer}>
                        <Iconify icon="akar-icons:moon-fill"
                            onPress={onNightSelected}
                            height={26}
                            width={26}
                            color={nightSelected ? colors.ico_location : colors.divider_or}
                            style={styles.dayIcon} />
                    </View></View> :
                <View>
                    {daySelected ?
                        <View style={styles.selectedDayContainer}>
                            <Iconify icon="akar-icons:sun-fill"
                                onPress={onDaySelected}
                                height={26}
                                width={26}
                                color={colors.ico_location}
                                style={styles.dayIcon} />
                        </View> : null}
                    {nightSelected ?
                        <View style={styles.selectedDayContainer}>
                            <Iconify icon="akar-icons:moon-fill"
                                onPress={onNightSelected}
                                height={26}
                                width={26}
                                color={colors.ico_location}
                                style={styles.dayIcon} />
                        </View> : null}</View>
            }
        </View>
    )
};

const styles = StyleSheet.create({
    dayContainer: {
        height: 33,
        width: 33,
        borderRadius: 33,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        marginVertical: verticalScale(8),
        borderColor: colors.topbar_privacy_bg
    },
    selectedDayContainer: {
        height: 33,
        width: 33,
        borderRadius: 33,
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

export default DayViewComponent;