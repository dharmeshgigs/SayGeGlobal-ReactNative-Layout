import React from 'react';
import {
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity
} from 'react-native';
import { colors } from '../css/colors';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Metrics';

interface Props {
    text: string,
    checked:boolean,
    textStyle?: StyleProp<TextStyle>,
    noOfLine?: number,
    elipsize?: any | undefined,
    onPress?: () => void ,
}

const ChipComponent = ({
    text,
    checked = false,
    textStyle = {},
    noOfLine = 1,
    elipsize = 'tail',
    onPress
}: Props) => (

    <TouchableOpacity onPress={() => {
        if(onPress != null){
            onPress();
        }
    }}>
    
    <Text style={[checked ? styles.checkedTextStyle : styles.defaultTextStyle,textStyle]}
        numberOfLines={noOfLine}
        ellipsizeMode={elipsize}>
        {text}
    </Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    defaultTextStyle: {
      fontFamily:'Inter-Regular',
      fontWeight:'400',
      alignSelf:'baseline',
      borderWidth:1,
      paddingHorizontal:horizontalScale(12),
      paddingVertical:verticalScale(8),
      borderRadius:14,
      borderColor:colors.topbar_privacy_bg,
      fontSize:moderateScale(10),
      color : colors.text_disable_accept_chip
    },
    checkedTextStyle: {
        fontFamily:'Inter-Regular',
        fontWeight:'400',
        borderWidth:1,
        alignSelf:'baseline',
        borderRadius:14,
        paddingHorizontal:horizontalScale(16),
        paddingVertical:verticalScale(8),
        borderColor:colors.appPrimary,
        fontSize:moderateScale(10),
        color : colors.appPrimary
      },
  });

  
export default ChipComponent;