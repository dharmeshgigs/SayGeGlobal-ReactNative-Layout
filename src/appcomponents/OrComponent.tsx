import React from 'react';
import {
    StyleProp,
    StyleSheet,
    View,
    ViewStyle
} from 'react-native';
import { colors } from '../css/colors';
import { horizontalScale } from '../utils/Metrics';
import InputLabelComponentOr from './InputLabelComponentOr';

interface Props {
    style?: StyleProp<ViewStyle>
}

const OrComponent = ({
    style = {}
}: Props) => (
    <View style={[styles.body,style]}>
        <View style={styles.dividerStyle}></View>
        
        <InputLabelComponentOr
            text='or'
            textStyle={styles.orTextStyle}
        /></View>
);

const styles = StyleSheet.create({
    body: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    dividerStyle: {
        width: '100%',
        height: 1,
        backgroundColor: colors.divider_or
    },
    orTextStyle: {
        paddingHorizontal:horizontalScale(24),
        backgroundColor: colors.signup_bg,
        position: 'absolute'
    }
});

export default OrComponent;