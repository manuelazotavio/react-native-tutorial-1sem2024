import {
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  Text,
  Button,
  Platform
} from "react-native";
import { useEffect, useState } from "react";
import H1 from "./ui/H1";
import CardUser from "./CardUser";
import { useNavigation } from "@react-navigation/native";
import { Header } from "./Header";



const Body = () => {
  //o parametro do useState é o seu valor inicial, ou seja, o valor de users no começo é vazio. o resultado do useState é um array com 2 posicoes, o valor 1 é a variavel, e o valor 2 é uma funcao q altera o valor do users. (setState, setUsers)

  const [users, setUsers] = useState([]);

  console.log('Plataforma atual:', Platform.OS)

  const getUsers = async () => {
    try {
      const result = await fetch(
        "https://backend-api-express-1sem2024-jf2z.onrender.com/user"
      );
      const data = await result.json();
      console.log(data.success);
      setUsers(data.users);
    } catch (error) {
      console.log(error.message);
    }
  };



  useEffect(() => {
    getUsers();
  }, []);

  const navigation = useNavigation()
  return (
    <View style={{flex: 1}}>
      <View style={styles.add}>
        <H1 style={styles.usuariosH1}>Usuários</H1>
        <View>
          <Button style={styles.buttonAdd} title="Adicionar" color={'#000'} onPress={() => navigation.navigate('Cadastrar', {users, setUsers})} />
        </View>
      </View>
     
      
     
      <View style={styles.listUser}>
        {users.length ? (
          <FlatList
            style={styles.flatList}
            data={users}
            renderItem={({ item }) => <CardUser user={item} />}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={Header}
            contentContainerStyle={styles.flatList}
          />
        ) : (
          <Text>Carregando...</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 3,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  usuariosH1: {
    paddingLeft: 20,
    color: "#FFF",
  },
  listUser: {
    width: "100%",
    alignItems: 'center',
    display: 'flex',
    marginBottom: 20,
    maxHeight: Platform.OS === 'web' ? '90vh' : null

  },
  add:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 30,
    paddingTop: 20,
    alignItems: 'center'
  },
  flatList:{
    alignSelf: 'center'

  }
});

export default Body;
