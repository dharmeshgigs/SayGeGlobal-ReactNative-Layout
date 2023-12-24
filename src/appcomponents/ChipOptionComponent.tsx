import React from 'react';
import {
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    View
} from 'react-native';
import { colors } from '../css/colors';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Metrics';

interface Props {
    text: string,
    checked: boolean,
    textStyle?: StyleProp<TextStyle>,
    noOfLine?: number,
    elipsize?: any | undefined,
    onPress?: () => void,
}

const ChipOptionComponent = ({
    text,
    checked = false,
    textStyle = {},
    noOfLine = 1,
    elipsize = 'tail',
    onPress
}: Props) => (

    <TouchableOpacity onPress={onPress}>
        <View style={checked ? styles.checkedChip : styles.uncheckedChip}>
            <Text style={[checked ? styles.checkedTextStyle : styles.defaultTextStyle, textStyle]}
                numberOfLines={noOfLine}
                ellipsizeMode={elipsize}>
                {text}
            </Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    checkedChip:{
        height:verticalScale(40),
        borderRadius: 20,
        borderWidth: 1,
        paddingHorizontal:horizontalScale(24),
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.white,
        borderColor:colors.appPrimary,
    },
    uncheckedChip:{
        height:verticalScale(40),
        borderRadius: 20,
        paddingHorizontal:horizontalScale(24),
        borderWidth: 0,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.chip_option_unchecked,
    },
    defaultTextStyle: {
        fontFamily: 'Inter-Bold',
        fontWeight: '600',
        alignSelf: 'baseline',
        fontSize: moderateScale(13),
        color: colors.text_disable_accept_chip
    },
    checkedTextStyle: {
        fontFamily: 'Inter-Bold',
        fontWeight: '600',
        alignSelf: 'baseline',
        fontSize: moderateScale(13),
        color: colors.appPrimary
    },
});


export default ChipOptionComponent;