
import React from "react";
import { TouchableOpacity } from "react-native";
import { Iconify } from 'react-native-iconify';
import { colors } from "../css/colors";
import { horizontalScale, verticalScale } from "../utils/Metrics";

interface Props {
    checked: boolean,
    onPress?: () => any,
}

const CheckBoxComponent = ({
    checked = false,
    onPress,
}: Props) => {
    return (
        <TouchableOpacity onPress={onPress}>
            {checked ?
                <Iconify icon="fluent:checkbox-checked-16-filled" height={verticalScale(24)} width={horizontalScale(24)} fill={colors.ico_location} color={colors.ico_location} />
                :
                <Iconify icon="system-uicons:checkbox-empty" style={{
                }} height={verticalScale(24)} width={horizontalScale(24)} color={colors.ico_location} fill={colors.white} />
            }
        </TouchableOpacity>
    )
};
export default CheckBoxComponent;