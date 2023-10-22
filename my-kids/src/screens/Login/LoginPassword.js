import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LoginLayout } from '../../components/Layouts/LoginLayout';
import { BluredTextInput } from '../../components/Elements/BluredTextInput';
import { LargeButton } from '../../components/Elements/index';

export function LoginPassword({ navigation }) {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        errors !== null ? setErrors(null) : '';
    }, [newPassword, confirmPassword]);


    async function onPressButton() {
        setIsLoading(true);
        setErrors(null)
        // await onConfirmePassword()

    }

    useEffect(() => {
        let timer1 = setTimeout(() => navigation.goBack(null), 60 * 1000);
        return () => {
            clearTimeout(timer1);
        };
    }, []);


    // async function onConfirmePassword() {
    //    
    // }

    return (
        <>
            <LoginLayout>
                <View style={styles.form}>
                    <Text style={styles.labelPage}>{'Enter your New Password'}</Text>
                    <>
                        <BluredTextInput
                            id='newPassword'
                            errors={errors}
                            placeholder='New Password'
                            secureTextEntry={true}
                            onChange={(text) => setNewPassword(text)}
                        >

                        </BluredTextInput>
                        <BluredTextInput
                            id='newPassword'
                            errors={errors}
                            placeholder='Confirm Password'
                            secureTextEntry={true}
                            onChangeText={(text) => setConfirmPassword(text)}>

                        </BluredTextInput>

                    </>

                    <LargeButton
                        onClick={() => onPressButton()}
                        isLoading={isLoading}
                        text={"Confirm Password"}
                        style={{ "marginTop": 20 }}
                    >
                    </LargeButton>
                </View>
            </LoginLayout >
        </>
    )
}

const styles = StyleSheet.create({
    form: {
        display: "flex",
    },
    labelPage: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 21,
        color: '#fff',
        marginBottom: 20,
    },
})

