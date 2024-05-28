import { View, Image, StyleSheet } from 'react-native';

const imageDefault = require('../assets/images/background-image.png');

export const ImageViewer = ({ imageUri }) => {
    const imageSource = imageUri ? { uri: imageUri } : imageDefault;

    return (
        <View style={imageStyles.container}>
            <Image source={imageSource} style={imageStyles.image} />
        </View>
    );
};

const imageStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 35,
    },
    image: {
        width: 320,
        height: 440,
        borderRadius: 20,
    },
});
