import { Pressable, Text, StyleSheet, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export const Button = ({ title, onPress, theme = 'primary' }) => {
    const pressHandler = (event) => {
        if (onPress) {
            onPress(event);
        } else {
            console.warn('no method specified for button onPress');
        }
    };

    const isPrimary = (value) => {
        if (theme === 'primary') {
            return value;
        }
        return null;
    };

    return (
        <View style={[btnStyles.container, isPrimary(btnStyles.containerPrimary)]}>
            <Pressable style={[btnStyles.button, isPrimary(btnStyles.buttonPrimary)]} onPress={pressHandler}>
                {isPrimary(<FontAwesome name="picture-o" size={18} color="#25292e" style={btnStyles.icon} />)}
                <Text style={[btnStyles.text, isPrimary(btnStyles.textPrimary)]}>{title}</Text>
            </Pressable>
        </View>
    );
};

const primaryColor = '#ffa';

const btnStyles = StyleSheet.create({
    container: {
        marginVertical: 10,
        height: 68,
        width: 320,
    },
    containerPrimary: {
        borderWidth: 4,
        borderColor: primaryColor,
        borderRadius: 18,
        borderStyle: 'solid',
        marginVertical: 40,
    },
    button: {
        backgroundColor: '#04fgf',
        height: '100%',
        width: '100%',
        borderRadius: 10,
        //backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        color: '#fff',
    },
    buttonPrimary: {
        backgroundColor: '#666',
    },
    text: { color: 'inherit', fontSize: 16 },
    textPrimary: { color: primaryColor },
    icon: {
        paddingRight: 8,
        color: primaryColor,
    },
});

StyleSheet.compose();
