import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './pages/Home';
import Play from './pages/Play';
import HowToPlay from './pages/HowToPlay'

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Play" component={Play} />
                <AppStack.Screen name="HowToPlay" component={HowToPlay} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

