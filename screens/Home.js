import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  return (
     <View style={styles.container}>
      <Text style={styles.title}>This is Home Screen</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile', { user: 'Bragadeesh' })}/>
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
    fontSize: 24, 
    marginBottom: 20 
},
});
