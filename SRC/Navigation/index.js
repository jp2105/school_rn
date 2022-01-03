import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import LoginScreen from "../screens/Login";
import ChatScreen from "../screens/Chat";
import LiveClassScreen from "../screens/LiveClass";
import TutorialScreen from "../screens/Tutorial"

const AppNavigation = () => {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();

    const bottomTab = () => {
        return (
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Live" component={LiveClassScreen} />
                <Tab.Screen name="Tutorial" component={TutorialScreen} />
                <Tab.Screen name="Chat" component={ChatScreen} />
            </Tab.Navigator>
        )
    }
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name={"tab"} component={bottomTab} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation