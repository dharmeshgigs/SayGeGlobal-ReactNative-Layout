import React, { ReactNode } from 'react';
import {
    StyleProp,
    StyleSheet,
    TouchableOpacity,
    View,
    ViewStyle
} from 'react-native';
import { colors } from '../css/colors';
import { Style } from '../css/styles';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Metrics';
import InputLabelComponent from './InputLabelComponent';

interface Props {
    left: ReactNode,
    style?: StyleProp<ViewStyle>,
    checked: boolean,
    title: string,
    subtitle: string,
    onPress: () => void
}

const CardComponent = ({
    left,
    style = {},
    checked = false,
    title = '',
    subtitle = '',
    onPress
}: Props) => (
    <TouchableOpacity onPress={onPress}>
    <View style={[styles.container,{backgroundColor: checked ? colors.appPrimary : colors.white},style]}>
        <View style={[styles.iconContainer,
            {backgroundColor: checked ? colors.card_selected : colors.signup_bg,
        borderColor: checked ?  colors.appPrimary : colors.topbar_privacy_bg,
    }]}>
            {left}
        </View>

        <View style={styles.textContainer}>
            <View >
                <InputLabelComponent
                    text={title}
                    textStyle={[Style().poppinSemiBoldTextStyle, checked ? styles.cardSelectedCaption : styles.cardCaption]}
                />
            </View>
            <View>
                <InputLabelComponent
                    noOfLine={4}
                    text={subtitle}
                    textStyle={[Style().interRegularTextStyle, checked ? styles.cardSelectedCaption : styles.cardCaption]}
                />
            </View>
        </View>
    </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    cardCaption: {
        fontSize: moderateScale(17),
        color: colors.text_msg,
    },
    cardSelectedCaption: {
        fontSize: moderateScale(17),
        color: colors.white,
    },
    textContainer: {
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        height:verticalScale(150),
        marginVertical: verticalScale(19),
        marginStart: horizontalScale(16),
        flex: 1,
    },
    iconContainer: {
        height: 112,
        width: 112,
        alignItems: 'center',
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(10),
        justifyContent: 'center'
    },
    container:{
        elevation: 8,
        width: '100%',
        height: 150,
        borderRadius: moderateScale(16),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: horizontalScale(24),
        alignSelf: 'stretch'
    }
});

export default CardComponent;