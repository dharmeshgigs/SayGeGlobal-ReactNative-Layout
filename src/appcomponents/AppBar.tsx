import { StyleProp, StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import { colors } from "../css/colors";
import { horizontalScale, moderateScale } from "../utils/Metrics";
import InputLabelComponent from "./InputLabelComponent";
import { Iconify } from 'react-native-iconify';

interface Props {
    title?: string,
    bgColor?: StyleProp<ViewStyle>,
    titleStyle?: StyleProp<TextStyle>,
    onBackClicked?: () => void,
    showback?: boolean
}

const AppBar = ({
    title = '',
    bgColor = styles.defaultBackground,
    titleStyle = {},
    showback = false,
    onBackClicked
}: Props) => {
    return (
        <View style={[styles.appBar, bgColor]}>
            {showback ? <Iconify icon="ion:chevron-back"
                onPress={onBackClicked}
                height={28} width={28} color={colors.divider_or}
                style={styles.backIcon} /> : null}
            <InputLabelComponent
                text={title}
                textStyle={[styles.defaultTitleStyle, titleStyle]}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    defaultBackground: {
        backgroundColor: colors.white
    },
    appBar: {
        height: 48,
        alignItems: 'center',
        justifyContent: 'center'
    },
    defaultTitleStyle: {
        fontFamily: "Poppins-SemiBold",
        fontWeight: '600',
        fontSize: moderateScale(17),
        color: colors.text_input_label
    },
    backIcon: {
        marginLeft: horizontalScale(12),
        position:'absolute',
        padding:moderateScale(12),
        left:0
    },
})

export default AppBar;