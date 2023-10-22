import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Routers from '../Routers'
import { Loader } from '../../components/Elements/Loader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppSelector } from '../../components/Hooks/useReduxHooks';

export function Handler({ }) {
    const [isLoading, setIsLoading] = useState(true);
    const token = useAppSelector((state) => state.user.token);
    const isDark = useAppSelector((state) => state.theme.isDark);

    useEffect(() => {
        let timer = setTimeout(() => setIsLoading(false), 1.5 * 1000);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <>
            {isLoading ? <Loader isDark={isDark} /> :
                <SafeAreaView style={styles.container}>
                    <Routers isLogged={token !== null} />
                </SafeAreaView>
            }
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        overflow: 'hidden',
        flex: 1
    },
})