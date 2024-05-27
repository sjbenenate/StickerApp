import { StatusBar } from 'expo-status-bar';
import { View, ScrollView } from 'react-native';
import { styles } from './styles_common';
import { ImageViewer } from './components/image-viewer';
import { Button } from './components/button';
import * as ImagePicker from 'expo-image-picker';

const myImage = require('./assets/images/background-image.png');

export default function App() {
    const pickImageAsync = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (result.canceled) {
            alert('Image not selected');
            return;
        } else {
            console.log(result);
            console.log(result.assets);
        }
    };
    return (
        <ScrollView>
            <View style={styles.container}>
                <ImageViewer imageSource={myImage} />
                <View style={styles.footer}>
                    <Button title="Choose a photo" onPress={pickImageAsync} />
                    <Button title="Use this photo" theme="secondary" />
                </View>

                <StatusBar style="auto" />
            </View>
        </ScrollView>
    );
}
