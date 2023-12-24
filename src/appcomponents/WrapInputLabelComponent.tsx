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
    elipsize?: any | undefined
}

const WrapInputLabelComponent = ({
    text,
    textStyle = {},
    elipsize = 'tail',
}: Props) => (
    <Text style={[styles.defaultTextStyle,textStyle]}
        ellipsizeMode={elipsize}>
        {text}
    </Text>
);

const styles = StyleSheet.create({
    defaultTextStyle: {
      fontFamily:'Inter-Light',
      fontWeight:'400',
      alignSelf:'baseline',
      fontSize:moderateScale(13),
      color : colors.text_input_label
    },
  });

  
export default WrapInputLabelComponent;