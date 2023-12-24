
import React from "react";
import { StyleSheet, View } from "react-native";
import ImageComponent from "../appcomponents/ImageComponent";
import TextComponent from "../appcomponents/TextComponent";
import { colors } from "../css/colors";
import { horizontalScale, moderateScale, verticalScale } from "../utils/Metrics";

interface Props {
    text: string,
}

const LogoSection = ({
    text,
}: Props) => {
    return (
        <View style={styles.body}>
            <ImageComponent
                imgStyle={styles.logoStyle}
                url={require('../assets/images/splash_logo.png')}
                resizeMode='contain' />
            <TextComponent
                text={text}
                textStyle={styles.textStyle}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    body:{
        alignItems:'center',
        justifyContent:'center'
    },
    logoStyle: {
        height: verticalScale(88),
        width: horizontalScale(108)
    },
    textStyle: {
        fontFamily: 'Poppins-SemiBold',
        fontWeight: '600',
        fontSize: moderateScale(20),
        color: colors.appPrimary
    }
});

export default LogoSection;