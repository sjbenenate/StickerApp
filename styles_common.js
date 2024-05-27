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
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
    },
    footer: {
        flex: 1 / 3,
    },
};

export const styles = StyleSheet.create(styleFormat);

export const toggleColorMode = () => {
    darkMode = !darkMode;
    count += 1;
    console.log('toggling color theme: ' + count);
    //styles = StyleSheet.create(styleFormat)
};
