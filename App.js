import Reac, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from 'react-native';


function App(){
  const [name,setName] = useState('Bragadeesh');
  const [greeting,setGreeting] = useState('Hello');
  const [screen,setScreen] = useState('home');


  const Home = () => (
    <View style={styles.container}>
        <Text style={styles.title}>This is Home Screen</Text>
        <Button title="Go to Profile" onPress={() => setScreen('profile')}/>
      </View>
  )

  const Profile = () => (
     <View style={styles.container}>
        <Text style={styles.title}>Welcome to {name}'s Profile</Text>
        <Button title="Back to home" onPress={() => setScreen('home')}/>
      </View>
  );
      return screen === 'home' ? <Home/> : <Profile/>
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