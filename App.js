import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView } from 'react-native';
import { styles, toggleColorMode } from './styles_common';
import { ImageViewer } from './components/image-viewer';
import { Button } from './components/button';

const myImage = require('./assets/images/background-image.png');

export default function App() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <ImageViewer imageSource={myImage} />
                <View style={styles.footer}>
                    <Button title="Choose a photo" />
                    <Button title="Use this photo" theme="secondary" />
                </View>

                <StatusBar style="auto" />
            </View>
        </ScrollView>
    );
}
