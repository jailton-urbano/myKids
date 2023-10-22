import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
    shadow: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.23,
        shadowRadius: 12.81,
        elevation: 16
    },
    shadowLight: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 4
    }, shadowDark: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 13,
        },
        shadowOpacity: 0.54,
        shadowRadius: 14.86,
        elevation: 18
    }
})