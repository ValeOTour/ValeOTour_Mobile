import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../screens/Login';
import AuthRoutes from './tab.routes';
import Gastronomic from '../screens/Gastronomic';
import Chat from '../screens/Chat';
import Register from '../screens/Register';


const Stack = createNativeStackNavigator();

function StackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={AuthRoutes} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="Gastronomic" component={Gastronomic} />
            <Stack.Screen name="userRegister" component={Register} />

        </Stack.Navigator>
    )
}

function AppRoutes() {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}
export default AppRoutes;