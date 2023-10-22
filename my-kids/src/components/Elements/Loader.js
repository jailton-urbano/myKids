import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoaderIcon from '../../assets/images/LoaderIcon';
import { PacmanIndicator } from 'react-native-indicators';
export function Loader({ }) {
    return (
        <View style={styles.container}>
            <View style={styles.loader}>
                <LoaderIcon />
            </View>
            <PacmanIndicator count={3} size={40} color='#C96529' />
        </View>)
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    loader: {
        display: 'flex',
        position: 'absolute',
        flexDirection: 'column',
        paddingBottom: 120
    }
})