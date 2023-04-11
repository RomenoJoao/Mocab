import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Conversa from '../pages/conversa/Conversa'
import Home from "../pages/home/Home";
import Index from "../pages/home/Index";
import Chat from "../pages/chat/Chat";
import Info from "../pages/infoNotify/Info";
const {Screen, Navigator} = createStackNavigator();

export function StackRoutes(){

    return(
        <Navigator>
            <Screen
            name='Home'
            options={{
                animation:'flip',
                headerShown:false,
            }}
            component={Index}>

            </Screen>
            <Screen
            name='Conversa'
            options={{
                animation:'flip',
                headerShown:false,
            }}
            component={Conversa}>

            </Screen>
            <Screen
            name='info'
            options={{
                animation:'flip',
                headerShown:false,
            }}
            component={Info}>

            </Screen>
        </Navigator>
    )
}