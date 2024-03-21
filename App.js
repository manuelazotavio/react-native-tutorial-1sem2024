
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ListUserScreen from "./screens/ListUserScreen";
import Cadastrar from "./screens/Cadastrar";
import Editar from "./screens/Editar";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Usuários" component={ListUserScreen} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} />
        <Stack.Screen name="Editar" component={Editar} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}