import { LoginScreen } from "../../screens/Login/Login";
import { LoginEmail } from "../../screens/Login/LoginEmail";
import { LoginPassword } from "../../screens/Login/LoginPassword";
import { LoginToken } from "../../screens/Login/LoginToken";

export const LOGIN_STACKS = [{
    name: 'LOGIN',
    component: LoginScreen
},
{
    name: 'LOGIN_EMAIL',
    component: LoginEmail
},
{
    name: 'LOGIN_TOKEN',
    component: LoginToken
},
{
    name: 'LOGIN_PASSWORD',
    component: LoginPassword

}]

export const ROUTE_NAME = 'LOGIN';