import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LOGIN_STACKS, ROUTE_NAME } from './routes';

export function LoginRouter({ }) {
    const Stack = createNativeStackNavigator();

    const loginScreens = LOGIN_STACKS.map((stack) => (
        <Stack.Screen key={stack.name} name={stack.name} component={stack.component} />
    ));

    return (
        <>
            <Stack.Navigator initialRouteName={ROUTE_NAME} screenOptions={{
                headerShown: false
            }}>
                {loginScreens}
            </Stack.Navigator>
        </>

    );
}