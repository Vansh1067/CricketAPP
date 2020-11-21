import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';


import  LanguageScreen from  '../screens/language'
import  AuthScreen from  '../screens/auth'

const Stack =createStackNavigator()


export const LoginNavigation=()=>{
    return <Stack.Navigator initialRouteName="language"  screenOptions={{
        headerShown: false
        }} >
<Stack.Screen name="language" component={LanguageScreen}></Stack.Screen>
<Stack.Screen name="auth" component={AuthScreen}></Stack.Screen>

</Stack.Navigator>
}