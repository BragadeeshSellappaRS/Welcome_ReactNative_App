import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen({ route }) {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to {user}'s Profile</Text>
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
    fontSize: 24 
},
});
