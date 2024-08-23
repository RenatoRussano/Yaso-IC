import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen'; 
import MedicamentosScreen from './screens/MedicamentosScreen'; 
import ConsultasScreen from './screens/ConsultasScreen'; 
import ExamesScreen from './screens/ExamesScreen'; 
import VacinasScreen from './screens/VacinasScreen'; 
import AdicionarMedicamentoScreen from './screens/AdicionarMedicamentoScreen';
import AdicionarAlergiaScreen from './screens/AdicionarAlergiaScreen'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Medicamentos" component={MedicamentosScreen} />
        <Stack.Screen name="AdicionarMedicamento" component={AdicionarMedicamentoScreen} />
        <Stack.Screen name="AdicionarAlergia" component={AdicionarAlergiaScreen} />
        <Stack.Screen name="Consultas" component={ConsultasScreen} />
        <Stack.Screen name="Exames" component={ExamesScreen} />
        <Stack.Screen name="Vacinas" component={VacinasScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
