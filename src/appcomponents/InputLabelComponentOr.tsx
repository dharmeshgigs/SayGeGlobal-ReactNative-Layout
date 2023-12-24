import React from 'react';
import {
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity
} from 'react-native';
import { colors } from '../css/colors';
import { moderateScale } from '../utils/Metrics';

interface Props {
    text: string,
    textStyle?: StyleProp<TextStyle>,
    noOfLine?: number,
    elipsize?: any | undefined,
    onPress?: () => void ,
}

const InputLabelComponentOr = ({
    text,
    textStyle = {},
    noOfLine = 1,
    elipsize = 'tail',
    onPress
}: Props) => (
    <Text style={[styles.defaultTextStyle,textStyle]}
        numberOfLines={noOfLine}
        ellipsizeMode={elipsize}>
        {text}
    </Text>
);

const styles = StyleSheet.create({
    defaultTextStyle: {
      fontFamily:'Inter-Light',
      fontWeight:'400',
      fontSize:moderateScale(13),
      color : colors.text_input_label
    },
  });

  
export default InputLabelComponentOr;