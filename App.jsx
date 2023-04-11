import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Chat from './src/pages/chat/Chat';
import Conversa from './src/pages/conversa/Conversa';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';
export default function App() {
  return (
      <NavigationContainer >
        <Routes/>
      </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
