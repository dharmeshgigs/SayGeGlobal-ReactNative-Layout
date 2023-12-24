import React from 'react';
import {
    StyleProp,
    StyleSheet,
    View,
    ViewStyle
} from 'react-native';
import { colors } from '../css/colors';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Metrics';

interface Props {
    style?: StyleProp<ViewStyle>,
    widthStyle?: StyleProp<ViewStyle>,
    progress?:string | null
}

const WizardProgressComponent = ({
    style = {},
    widthStyle = {},
    progress = null
}: Props) => (
    <View style={[styles.body, style]}>
        <View style={[styles.progressStyle, widthStyle]}>
        </View>
        {progress != null ?null  : <View style={styles.stepContainer}>
            <View style={styles.dotView} />   
            <View style={styles.dotView} />
            <View style={styles.dotView} />
        </View> }
    </View>
);

const styles = StyleSheet.create({
    body: {
        height: verticalScale(4),
        backgroundColor: colors.topbar_privacy_bg,
        borderRadius: moderateScale(20),
    },
    stepContainer: {
        position: 'absolute',
        left: 0,
        flexDirection: 'row',
        right: 0,
        height: verticalScale(4),
        backgroundColor: colors.transparent,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    dotView:{
        height: verticalScale(4),
                width: horizontalScale(8),
                backgroundColor: colors.wizard_step,
                borderRadius: moderateScale(20)
    },
    progressStyle: {
        position: 'absolute',
        left: 0,
        borderTopLeftRadius: moderateScale(20),
        borderBottomLeftRadius: moderateScale(20),
        height: 4,
        backgroundColor: colors.ico_location
    },

});

export default WizardProgressComponent;