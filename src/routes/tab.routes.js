import React from 'react';

import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import colors from '../styles/colors';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import fonts from '../styles/fonts';

import DrawerRoutes from './drawer.routes';
import Profile from '../screens/Profile'
import { DrawerActions, useNavigation } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

const AuthRoutes = () => {
    const navigation = useNavigation();

    return (

        <Tab.Navigator
            screenOptions={
                ({ route }) => ({
                    headerShown: false,
                    tabBarShowLabel: false,

                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        size = 20;
                        color = colors.darkBlue;
                        if (route.name === 'Inicio') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Guias') {
                            iconName = focused
                                ? 'people'
                                : 'people-outline';
                        } else if (route.name === 'Maps') {
                            iconName = focused
                                ? 'map'
                                : 'map-outline';
                        } else if (route.name === 'Chat') {
                            iconName = focused
                                ? 'chatbubble'
                                : 'chatbubble-outline';
                        } else if (route.name === 'Profile') {
                            iconName = focused
                                ? 'person'
                                : 'person-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },

                    tabBarStyle: {
                        backgroundColor: '#fff',
                        height: 50,
                        alignItems: 'center',
                        borderRadius: 100,
                        marginBottom: 10,
                        marginHorizontal: 24,
                        paddingHorizontal: 10,
                    },


                })}
        >
            <Tab.Screen name="Inicio" component={DrawerRoutes}></Tab.Screen>
            <Tab.Screen name="Guias" component={Profile}></Tab.Screen>
            <Tab.Screen name="Maps" component={Profile}></Tab.Screen>
            <Tab.Screen name="Chat" component={Profile}></Tab.Screen>
            <Tab.Screen name="Profile" component={Profile}></Tab.Screen>
        </Tab.Navigator>
    )
}

export default AuthRoutes;