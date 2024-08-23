import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';  
import Footer from '../components/Footer';  

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <Text style={styles.text}>on going</Text>
      </View>

      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6E52B5', 
  },
});
