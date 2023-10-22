import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { setDataForgetPassword, } from '../../store1/actions/User';
import { LoginLayout } from '../../components/Layouts/LoginLayout';
import { BluredTextInput, LargeButton } from '../../components/Elements/index';
import { ERROR_MESSAGES, PATTERNS } from '../../enums/index';

export function LoginToken({ navigation, ...props }) {
    const [code, setCode] = useState('');
    const [errors, setErrors] = useState(null);
    const [canResend, setCanResend] = useState(false);
    const [isResendClicked, setIsResendClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();


    useEffect(() => {
        errors !== null ? setErrors(null) : '';
    }, [code]);

    useEffect(() => {
        let timer1 = setTimeout(() => setCanResend(true), 60 * 100);
        return () => {
            clearTimeout(timer1);
        };
    }, []);

    async function onConfirmeEmail() { }

    async function onPressButton() {
        if (PATTERNS.TOKEN.test(code) && code.length === 4) {
            dispatch(setDataForgetPassword({ token: code }))
            navigation.navigate('LOGIN_PASSWORD');
        } else {
            setErrors({ code: ERROR_MESSAGES.TOKEN_NO_VALID })
        }
    }



    return (
        <>
            <LoginLayout>

                <View style={styles.form}>
                    <Text style={styles.labelPage}>{'we’ve sent you a code in your Email'}</Text>
                    <>
                        <BluredTextInput
                            id='code'
                            errors={errors}
                            placeholder='Code'
                            value={code}
                            onChange={(text) => setCode(text)}
                            keyboardType='numeric'
                            maxLength={6}
                        >

                        </BluredTextInput>

                        {canResend ? (
                            <Pressable onPress={() => onConfirmeEmail()}>
                                <Text style={styles.send}>{`Resend `}</Text>
                            </Pressable>
                        ) : (
                            <Text style={styles.resend}>{`Processing...`}</Text>
                        )}

                    </>

                    <LargeButton
                        onClick={() => onPressButton()}
                        isLoading={isLoading}
                        text={'Submit'}
                        style={{ "marginTop": 20 }}>

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
    labelPage: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 21,
        color: '#fff',
        marginBottom: 20,
    },
    resend: {
        textAlign: 'center',
        color: '#FFF',
        marginVertical: 13,
    },
    send: {
        color: '#ED8347',
        fontWeight: '700',
        fontSize: 10,
        lineHeight: 15,
        textAlign: 'center',
        marginVertical: 13
    }
})

