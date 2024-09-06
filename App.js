import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Telas/Home'; 
import Cadastro from './Telas/Cadastro'; 
import CadastroPlaneta from './Telas/CadastroPlaneta'; 
import Listar from './Telas/Listar'; 


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="CadastroPlaneta" component={CadastroPlaneta} />
        <Stack.Screen name="Listar" component={Listar} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
