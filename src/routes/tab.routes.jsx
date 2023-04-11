import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const {Screen, Navigator}= createBottomTabNavigator();

import { MaterialIcons } from "@expo/vector-icons";
import Home from "../pages/home/Home";
import Chat from '../pages/chat/Chat'
import Notify from "../pages/notify/Notify";

export function TabRoutes(){
    return (
      <Navigator
        screenOptions={{
          tabBarActiveTintColor: "#2E498E",
          tabBarInactiveTintColor: "gray",
          headerStyle: {
            backgroundColor: "white",
          },
          headerShown: false,
          
        }}
      >
        <Screen
          name="Home"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={color} />
            ),
          }}
          component={Home}
        ></Screen>
        <Screen
          name="Chat"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="chat" color={color} />
            ),
          }}
          component={Chat}
        ></Screen>
        <Screen
          name="Notify"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="notifications" color={color} />
            ),
          }}
          component={Notify}
        ></Screen>
      </Navigator>
    );
}