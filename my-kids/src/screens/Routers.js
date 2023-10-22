import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';

import { LoginRouter } from '../routers/Login/router';

export default function Routers({ isLogged }) {
    const Stack = createNativeStackNavigator();

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name="LOGIN_ROUTER" component={LoginRouter} />
                    {/* {!isLogged ?
                        () : (
                            <>
                                <Stack.Screen name="MainRouter" component={MainRouter} />
                                <Stack.Screen name="SettingRouter" component={SettingRouter} />
                            </>
                        )} */}
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
