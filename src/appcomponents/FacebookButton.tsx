
import React from "react";
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import TextComponent from "../appcomponents/TextComponent";
import FacebookIcon from '../assets/images/facebook.svg';
import { colors } from "../css/colors";
import { horizontalScale, moderateScale, verticalScale } from "../utils/Metrics";

interface Props {
    text : string, 
    outerStyle?:StyleProp<ViewStyle>,
    onPress : () => any, 
}

const FacebookButton = ({
    text,
    outerStyle,
    onPress,
}: Props) => {
    return (
        <TouchableOpacity onPress={onPress}
            style={[styles.touchableStyle,outerStyle]}>
                <FacebookIcon height={verticalScale(24)} width={horizontalScale(24)} marginStart={horizontalScale(24)} />
                <TextComponent text={text}
                textStyle={styles.textStyle} />
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    touchableStyle:{
        height:verticalScale(48),
        borderRadius:moderateScale(8),
        elevation:8,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:colors.button_fb
    },
    textStyle:{
        fontSize:moderateScale(17),
        fontFamily:'Poppins-Regular',
        fontWeight:"400",
        color: colors.white,
        width:'100%',
        position:'absolute',
        textAlign:'center',
    }
  });

export default FacebookButton;