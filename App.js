import Reac, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

function App(){
  const [name,setName] = useState('Bragadeesh');
  const [greeting,setGreeting] = useState('Hello');

  return(
    <View style={styles.container}>
      <Text style={styles.title}>{greeting}, {name}</Text>
      <Button title="Change Greeting" onPress={() => setGreeting('Welcome')}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    marginBottom: 2
  }
});

export default App;