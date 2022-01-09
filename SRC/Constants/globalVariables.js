import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");

const wp = (number) => {
    let givenWidth = typeof number === "number" ? number : parseFloat(number);
    return PixelRatio.roundToNearestPixel((width * givenWidth) / 100);
};

const hp = (number) => {
    let givenHeight = typeof number === "number" ? number : parseFloat(number);
    return PixelRatio.roundToNearestPixel((height * givenHeight) / 100);
};

const scale = width / 320;

function normalize(size) {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}

const font_size = {
    mini: normalize(12),
    small: normalize(15),
    medium: normalize(17),
    large: normalize(20),
    xlarge: normalize(24),
};

export { wp, hp, normalize, font_size };