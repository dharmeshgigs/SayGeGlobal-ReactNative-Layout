
import React, { ReactElement } from "react";
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import WrapInputLabelComponent from "./WrapInputLabelComponent";
import { Style } from "../css/styles";
import { colors } from "../css/colors";
import { horizontalScale, moderateScale, verticalScale } from "../utils/Metrics";

interface Props {
    caption: string,
    captionStyle?: StyleProp<TextStyle>,
    selected: boolean,
    icon: ReactElement,
    selectedView?: StyleProp<ViewStyle>,
    unselectedView?: StyleProp<ViewStyle>,
    containerStyle?:StyleProp<ViewStyle>,
    onPress: () => any
}

const LabelIconComponent = ({
    caption,
    captionStyle,
    icon,
    selected = false,
    selectedView = {},
    unselectedView = {},
    containerStyle={},
    onPress
}: Props) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.centerContent,containerStyle]}>
                <View style={[selected ? styles.selectedView : styles.unselectedView, selected ? selectedView : unselectedView]}>
                    {icon}
                </View>
                <WrapInputLabelComponent
                    text={caption}
                    textStyle={[Style().poppinRegular15TextStyle, captionStyle]}/>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    centerContent: {
        alignItems: 'center',
        alignSelf: 'baseline',
        justifyContent: 'center'
    },
    selectedView: {
        borderColor: colors.appPrimary,
        borderWidth: moderateScale(1),
        width: 64,
        borderRadius: 10,
        height: 58,
        alignItems: 'center',
        justifyContent: 'center'
    },
    unselectedView: {
        borderColor: colors.topbar_privacy_bg,
        borderWidth: moderateScale(1),
        width: 64,
        borderRadius: 10,
        height: 58,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default LabelIconComponent;