import { memo } from 'react';
import { ImageBackground, TextInput, StyleSheet, Text } from 'react-native';

const BluredBackground = require('../../assets/images/blurInput.png');

export const BluredTextInput = memo(({ placeholder, id, value, errors, onChange, ...props }) => {
    const handleChange = (text) => {
        onChange(text);
    };


    return (
        <>
            {errors?.[id] && <Text style={styles.error}>{errors[id]}</Text>}
            <ImageBackground source={BluredBackground} style={styles.inputBlur}>
                <TextInput
                    style={errors ? [styles.input, styles.errorInput] : styles.input}
                    placeholderTextColor="#E2E2E2"
                    placeholder={placeholder}
                    value={value}
                    onChangeText={handleChange}
                    {...props}
                >
                </TextInput>
            </ImageBackground>
        </>
    )
})

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 40,
        color: "#fff",
        borderColor: 'rgba(255, 255, 255, 0.3)',
        borderWidth: 1,
        borderStyle: 'solid',
        placeholder: '#fff',
        paddingLeft: 10,
        paddingTop: 0,
        fontSize: 10,
        borderRadius: 10,
    },
    inputBlur: {
        width: '100%',
        height: 40,
        color: "#fff",
        marginBottom: 20,
        borderRadius: 50,
        borderStyle: 'solid',

    },
    errorInput: {
        borderColor: 'red',
        color: 'red',
    },
    error: {
        color: 'red',
        marginTop: -5,
        marginBottom: 5
    },
})