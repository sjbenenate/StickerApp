import { styles } from '../styles_common';
import { View, Image } from 'react-native';

export const ImageViewer = ({ imageSource }) => {
    return (
        <View style={styles.imageContainer}>
            <Image source={imageSource} style={styles.image} />
        </View>
    );
};
