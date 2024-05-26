import { StyleSheet } from 'react-native';

let darkMode = true;
let count = 0;

const styleFormat = {
    container: {
        flex: 1,
        backgroundColor: darkMode ? '#25292e' : '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: darkMode ? '#eee' : '#000',
    },
    button: {
        color: darkMode ? '#fff' : '#000',
        background: '#00f',
    },
    imageContainer: {
        flex: 1,
        paddingTop: 58,
    },
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
};

export const styles = StyleSheet.create(styleFormat);

export const toggleColorMode = () => {
    darkMode = !darkMode;
    count += 1;
    console.log('toggling color theme: ' + count);
    //styles = StyleSheet.create(styleFormat)
};
