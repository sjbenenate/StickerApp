import { Pressable, Text, StyleSheet, View } from 'react-native';
import { styles } from '../styles_common';

export const Button = ({ title, onPress }) => {
    const pressHandler = (event) => {
        if (onPress) {
            onPress(event);
        } else {
            console.warn('no method specified for button onPress');
        }
    };

    return (
        <View style={btnStyles.container}>
            <Pressable style={btnStyles.button} onPress={pressHandler}>
                <Text style={btnStyles.text}>{title}</Text>
            </Pressable>
        </View>
    );
};

const btnStyles = StyleSheet.create({
    container: {
        height: 68,
        width: 320,
    },
    button: {
        backgroundColor: '#04fgf',
        height: '100%',
        width: '100%',
        borderRadius: 10,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: { color: '#fff', fontSize: 16 },
});

StyleSheet.compose();
