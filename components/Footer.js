import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

export default function Footer({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Medicamentos')}
        >
          <Image source={require('../assets/medicamentos.png')} style={styles.logo} />
          <Text style={styles.label}>medicamentos{'\n'} e alergias</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Consultas')}
        >
          <Image source={require('../assets/consultas.png')} style={styles.logo} />
          <Text style={styles.label}>consultas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Image source={require('../assets/home.png')} style={styles.logo} />
          <Text style={styles.label}>home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Exames')}
        >
          <Image source={require('../assets/exames.png')} style={styles.logo} />
          <Text style={styles.label}>exames</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Vacinas')}
        >
          <Image source={require('../assets/vacinas.png')} style={styles.logo} />
          <Text style={styles.label}>vacinas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexwrap: 'nowrap',
    alignItems: 'stretch',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderTopWidth: 5,
    borderTopColor: '#6030A0',
  },
  button: {
    alignItems: 'center',
    width: 100,
  },
  label: {
    fontSize: 10,
    color: '#A5A5A5',
    marginTop: 5,
    textAlign: 'center',
  },
  logo: {
    width: 31,
    height: 35,
    marginBottom: 5,
  },
});