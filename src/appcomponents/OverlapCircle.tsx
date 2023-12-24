import React from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {
  children: React.ReactNode;
}

function OverlapCircle(props: {
  top?: any | undefined;
  left?: any | undefined;
  bottom?: any | undefined;
  right?: any | undefined;
}) {
  return (
    <View
      style={{
        top: props.top,
        left: props.left,
        bottom: props.bottom,
        right: props.right,
        position: 'absolute',
        zIndex: 1,
        width: 295,
        height: 274,
      }}>
      <View
        style={{
          width: 200,
          height: 200,
          left: 0,
          top: 74,
          position: 'absolute',
          backgroundColor: 'rgba(252, 132.63, 132.63, 0.45)',
          borderRadius: 100,
        }}
      />
      <View
        style={{
          width: 200,
          height: 200,
          left: 95,
          top: 0,
          position: 'absolute',
          backgroundColor: 'rgba(252, 132.63, 132.63, 0.45)',
          borderRadius: 100,
        }}
      />
    </View>
  );
}

export default OverlapCircle;