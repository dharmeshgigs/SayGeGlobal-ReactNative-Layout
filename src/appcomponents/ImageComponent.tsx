import React from 'react';
import {
    Image,
    ImageResizeMode,
    ImageSourcePropType,
    ImageStyle,
    StyleProp,
} from 'react-native';

interface Props {
    url: ImageSourcePropType,
    imgStyle: StyleProp<ImageStyle>,
    resizeMode?: ImageResizeMode
}

const ImageComponent = ({
    url,
    imgStyle,
    resizeMode
}: Props) => (
    <Image
        source={url}
        style={imgStyle}
        resizeMode={resizeMode}
    ></Image>
);

export default ImageComponent;