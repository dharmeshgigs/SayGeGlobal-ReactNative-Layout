
import React from "react";
import { StyleProp, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";

interface Props {
    text : string, 
    onPress : () => any, 
    touchableStyle?:StyleProp<ViewStyle>, 
    textStyle?:StyleProp<TextStyle>, 
    showLeftIcon?:React.ReactNode, 
    leftIcon?:React.ReactNode,  
}

const ButtonComponent = ({
    text,
    onPress,
    touchableStyle,
    textStyle,
    showLeftIcon,
    leftIcon
}: Props) => {
    return (
        <TouchableOpacity onPress={onPress}
            style={touchableStyle}>
            <View style={{ flexDirection: 'row' }}>
                {showLeftIcon && leftIcon}
                <Text style={textStyle}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
};

export default ButtonComponent;