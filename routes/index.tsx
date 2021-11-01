import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "./screens/home/SignupScreen";
import Login from './screens/home/LoginScreen';
import Home from './screens/app/HomeScreen';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="signup" component={Signup} options={{headerShown: false}} />
            <Stack.Screen name="login" component={Login} options={{headerShown: false}} />
            <Stack.Screen name="home" component={Home} options={{headerShown: false}} />
        </Stack.Navigator>
    );
}

export default Routes;