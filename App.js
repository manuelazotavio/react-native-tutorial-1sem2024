import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListUserScreen from "./screens/ListUserScreen";
import Cadastrar from "./screens/Cadastrar";
import Editar from "./screens/Editar";
import { Text } from "react-native";

// navegacao só por clicks
// const Stack = createNativeStackNavigator();

// const Drawer = createDrawerNavigator()

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()

export default function App() {

  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Usuários" component={ListUserScreen} />
        <Stack.Screen 
        name="Cadastrar"
        component={Cadastrar}
         />
        <Stack.Screen name="Editar" component={Editar} />
      </Stack.Navigator>

      <Tab.Navigator>
        <Tab.Screen name="Usuários" component={ListUserScreen} />
        <Tab.Screen name="Cadastrar" component={Cadastrar} />
      </Tab.Navigator>
      {/* <Drawer.Navigator>
    //     <Drawer.Screen name="Usuários" component={ListUserScreen} />
    //     <Drawer.Screen name="Cadastrar" component={Cadastrar} />
    //   </Drawer.Navigator> */}
    </NavigationContainer>
  );
}
