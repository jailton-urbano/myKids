import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { LoginLayout } from '../../components/Layouts/LoginLayout';
import { BluredTextInput } from '../../components/Elements/BluredTextInput';
import { LargeButton } from '../../components/Elements/index';
import { PATTERNS, ERROR_MESSAGES } from '../../enums/index';
import { useAppDispatch } from '../../components/Hooks/useReduxHooks';

export function LoginScreen({ navigation, ...props }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    // const dispatch = useAppDispatch();

    useEffect(() => {
        errors && setErrors(null);
    }, [email, password])

    async function onPressButton() {
        if (PATTERNS.EMAIL.test(email)) {
            setIsLoading(true);
            setErrors(null)
            await onLogin();
        } else {
            setErrors({ email: ERROR_MESSAGES.EMAIL_NO_VALID })
        }
    }

    async function onLogin() {
    }

    function forgotPassword() {
        navigation.navigate('LOGIN_EMAIL');
    }

    return (
        <>
            <LoginLayout>
                <View style={styles.form}>
                    <>
                        <BluredTextInput
                            id='email'
                            errors={errors}
                            placeholder='Adresse Mail'
                            value={email}
                            onChange={(text) => setEmail(text)}>
                        </BluredTextInput>

                        <BluredTextInput
                            id='password'
                            errors={errors}
                            placeholder='Mot de passe'
                            isSecure={true}
                            value={password}
                            onChange={(text) => setPassword(text)}
                        >
                        </BluredTextInput>

                        <Pressable onPress={() => forgotPassword()} style={styles.forgotBtn}
                        >
                            <Text style={styles.forgotPswrd}>Mot de passe oublie ?</Text>
                        </Pressable>
                    </>

                    <LargeButton
                        onClick={() => onPressButton()}
                        isLoading={isLoading}
                        text={'Log in'}
                    >
                    </LargeButton>
                </View>
            </LoginLayout>
        </>
    );
}


const styles = StyleSheet.create({
    form: {
        display: "flex",
    },
    forgotBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    forgotPswrd: {
        fontSize: 10,
        lineHeight: 15,
        color: "#fff"
    },
})

