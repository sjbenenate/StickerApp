import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import { styles, toggleColorMode } from './styles_common';
import { ImageViewer } from './components/image-viewer';

const myImage = require('./assets/images/background-image.png');

export const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Open up App.js to start working on your app!</Text>
            <Text style={styles.text}>This is the new Sticker Application!</Text>
            <ImageViewer imageSource={myImage} />
            <Button
                title="Switch Mode"
                color="#841584"
                accessibilityLabel="Switch Color Mode"
                onPress={toggleColorMode()}
            />
            <StatusBar style="auto" />
        </View>
    );
};
