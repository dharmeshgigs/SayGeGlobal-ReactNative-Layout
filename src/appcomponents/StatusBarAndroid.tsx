
import React from "react";
import { StatusBar, StatusBarStyle } from "react-native";

interface Props {
  bar_style?:StatusBarStyle,
  bgColor?:string,
  translucent?:boolean
}

const StatusBarAndroid = ({
  bar_style ='dark-content',
  bgColor="#00000000",
  translucent=true
}: Props) => {
    return (
        <StatusBar
      translucent={translucent}
      animated={false}
      barStyle={bar_style}
      backgroundColor={bgColor}
      hidden={false} />
    )
};

export default StatusBarAndroid;