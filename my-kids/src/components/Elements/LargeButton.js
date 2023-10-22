import { Pressable, StyleSheet, Text } from "react-native";
import { DotIndicator } from "react-native-indicators";

export const LargeButton = ({ text, disabled, onClick, isLoading, style = {} }) => {

    function handlePress() {
        if (disabled) return;
        onClick();
    }
    return (
        <Pressable
            onPress={handlePress}
            style={[styles.loginBtn, style]}
        >
            {isLoading ?
                <DotIndicator count={3} size={10} color='#C96529' /> :
                <Text style={styles.loginText}>{text}</Text>
            }
        </Pressable>
    );
}

const styles = StyleSheet.create({
    loginBtn: {
        backgroundColor: "#3B7C88",
        fontSize: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderRadius: 10,
    },
    loginText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#ED8347',
        fontWeight: "700",
    },
})