import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LoginLayout } from '../../components/Layouts/index';
import { BluredTextInput, LargeButton } from '../../components/Elements/index';
import { PATTERNS } from '../../enums/regex';
import { ERROR_MESSAGES } from '../../enums/errorsMessage';

export function LoginEmail({ navigation }) {
    const [resetEmail, setResetEmail] = useState('Driver@mail.com');
    const [errors, setErrors] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        errors && setErrors(null);
    }, [resetEmail]);


    async function onPressButton() {
        if (PATTERNS.EMAIL.test(resetEmail)) {
            setIsLoading(true);
            setErrors(null)
            await onConfirmeEmail();
        } else {
            setErrors({ resetMail: ERROR_MESSAGES.EMAIL_NO_VALID })
        }
    }


    async function onConfirmeEmail() {
        navigation.navigate('LOGIN_TOKEN');
    }
    return (
        <>
            <LoginLayout>

                <View style={styles.form}>
                    <>
                        <Text style={styles.labelPage}>{'Enter Your Email'}</Text>
                        <BluredTextInput
                            id='resetMail'
                            errors={errors}
                            placeholder='Adresse Mail'
                            value={resetEmail}
                            onChange={(text) => setResetEmail(text)}
                        >

                        </BluredTextInput>

                    </>

                    <LargeButton
                        onClick={() => onPressButton()}
                        isLoading={isLoading}
                        text={'Submit'}
                        style={{ "marginTop": 20 }}
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
    labelPage: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 21,
        color: '#fff',
        marginBottom: 20,
    },
})

