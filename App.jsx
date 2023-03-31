import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Chat from './src/pages/chat/Chat';
import Conversa from './src/pages/conversa/Conversa';
export default function App() {
  return (
    <View style={styles.container}>
      <Conversa></Conversa>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
