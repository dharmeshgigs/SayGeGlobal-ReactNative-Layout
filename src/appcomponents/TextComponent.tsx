import React from 'react';
import {
    StyleProp,
    Text,
    TextStyle
} from 'react-native';

interface Props {
    text?: string | null | undefined,
    textStyle: StyleProp<TextStyle>,
    noOfLine?: number,
    elipsize?: any | undefined,
}

const TextComponent = ({
    text,
    textStyle,
    noOfLine = 1,
    elipsize = 'tail'
}: Props) => (

    <Text style={textStyle}
        numberOfLines={noOfLine}
        ellipsizeMode={elipsize}>
        {text}
    </Text>
);

export default TextComponent;