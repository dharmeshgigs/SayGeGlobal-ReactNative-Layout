import React from "react";

import { useState } from "react";
import { KeyboardTypeOptions, StyleProp, StyleSheet, TextInput, TextStyle, View, ViewStyle } from "react-native";
import TextComponent from "./TextComponent";
import { colors } from "../css/colors";
import { horizontalScale, moderateScale, verticalScale } from "../utils/Metrics";
interface Props {
    text?: string | undefined,
    textStyle?: StyleProp<TextStyle> ,
    inputOuterStyle?: StyleProp<ViewStyle>,
    inputStyle?: StyleProp<ViewStyle>,
    showIcon?: boolean,
    icon?:string ,
    placeholderTextColor?: string,
    placeHolderText?:string | undefined,
    onChangeText : (text:string) => void,
    errorText?:string | null,
    errorTextStyle?:StyleProp<TextStyle>,
    secureText?:boolean,
    noOfLine?:number,
    keyboardType?:KeyboardTypeOptions | undefined,
    rightIcon?:any,
    leftIcon?:any
}

const TextInputComponent = ({
    text = '',
    inputStyle = {},
    inputOuterStyle={},
    placeholderTextColor = colors.text_input_hint_email,
    placeHolderText = '',
    textStyle = {},
    secureText = false,
    onChangeText,
    noOfLine = 1,
    rightIcon = null,
    leftIcon = null,
    keyboardType = 'default' } : Props) => {

    const [error, setError] = useState("");

    return (
        <View style={[styles.defaultInputOuterStyle,inputOuterStyle]}>
            <View style={[styles.defaultInputStyle,inputStyle]}>
            {leftIcon && <View style={styles.rightIconContainer}>
                    {leftIcon}
                    </View>}
                <TextInput 
                    value={text}
                    placeholder={placeHolderText}
                    placeholderTextColor={placeholderTextColor}
                    style={[styles.defaultInputTextStyle,textStyle]}
                    keyboardType={keyboardType}
                    numberOfLines={noOfLine}
                    secureTextEntry={secureText}
                    underlineColorAndroid="transparent"
                    onChangeText={onChangeText}
                /> 
                {rightIcon && <View style={styles.rightIconContainer}>
                    {rightIcon}
                    </View>}
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    defaultInputOuterStyle:{
            paddingHorizontal: 0,
            marginVertical:verticalScale(4)
    },
    defaultErrorTextStyle: {
        color: colors.red,
        fontFamily:'Inter-Regular',
        fontWeight:'400',
        fontSize:moderateScale(10)
    },
    defaultInputTextStyle:{
        fontSize:moderateScale(16),
        fontWeight:'400',
        flex:1,
        paddingHorizontal:horizontalScale(8),
        fontFamily:'Inter-Regular',
        color:colors.text_input_label,
    },
    defaultInputStyle:{
        flexDirection: 'row',
        height:verticalScale(48),
        backgroundColor:colors.white,
        alignItems:'center',
        width:'100%',
        borderRadius:8,
    },
    leftIconStyle:{
        height: verticalScale(24),
        width: horizontalScale(24),
        alignSelf: 'center',
    },
    rightIconContainer:{
        marginHorizontal:horizontalScale(8)
    }
});
export default TextInputComponent;