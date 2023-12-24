
import React from "react";
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import { colors } from "../css/colors";
import { moderateScale, verticalScale } from "../utils/Metrics";

interface Props {
    text : string, 
    outerStyle?:StyleProp<ViewStyle>,
    textStyle?:StyleProp<TextStyle>,
    onPress : () => void, 
}

const JoinButton = ({
    text,
    outerStyle,
    textStyle = {},
    onPress,
}: Props) => {
    return (
        <TouchableOpacity onPress={onPress}
            style={[styles.touchableStyle,outerStyle]}>
                <Text style={[styles.textStyle,textStyle]}>{text}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    touchableStyle:{
        height:verticalScale(48),
        borderRadius:moderateScale(8),
        elevation:8,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.appPrimary
    },
    textStyle:{
        fontSize:moderateScale(17),
        fontFamily:'Poppins-Regular',
        fontWeight:"400",
        color: colors.white,
    }
  });

export default JoinButton;