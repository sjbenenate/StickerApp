import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles, toggleColorMode } from './styles_common';
import { ImageViewer } from './components/image-viewer';
import { Button } from './components/button';

const myImage = require('./assets/images/background-image.png');

export default function App() {
    return (
        <View style={styles.container}>
            <ImageViewer imageSource={myImage} />
            <Button
                title="Switch Mode"
                onPress={() => {
                    alert('Pressed!');
                }}
            />
            <StatusBar style="auto" />
        </View>
    );
}
