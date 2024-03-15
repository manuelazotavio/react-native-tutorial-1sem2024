import {View, StyleSheet, FlatList, Text} from 'react-native'
import { useEffect, useState } from 'react'
import H1 from './ui/H1'
import CardUser from './CardUser'
import CardProduct from './CardProduct'

// const users = [
//   {
//     id: 1,
//     name: "Renan Cavichi",
//     email: "renancavichi@gmail.com",
//     avatar:"https://avatars.githubusercontent.com/u/4259630?v=4"
//   },
//   {
//     id: 2,
//     name: "Maria",
//     email: "maria@gmail.com",
//     avatar:"https://avatars.githubusercontent.com/u/114303361?v=4"
//   },
//   {
//     id: 3,
//     name: "Manuel",
//     email: "manuel@gmail.com",
//     avatar:"https://avatars.githubusercontent.com/u/4061891?v=4"
//   },
//   {
//     id: 4,
//     name: "Camila",
//     email: "camila@gmail.com",
//     avatar:"https://avatars.githubusercontent.com/u/4061891?v=4"
//   },
//   {
//     id: 5,
//     name: "Renan Cavichi",
//     email: "renancavichi@gmail.com",
//     avatar:"https://avatars.githubusercontent.com/u/4259630?v=4"
//   },
//   {
//     id: 6,
//     name: "Maria",
//     email: "maria@gmail.com",
//     avatar:"https://avatars.githubusercontent.com/u/114303361?v=4"
//   },
// ]



const Body = () => {

  //o parametro do useState é o seu valor inicial, ou seja, o valor de users no começo é vazio. o resultado do useState é um array com 2 posicoes, o valor 1 é a variavel, e o valor 2 é uma funcao q altera o valor do users. (setState, setUsers) 

  const [users, setUsers] = useState([])

  const [products, setProducts] = useState([])

  const getUsers = async () =>{
    try{
      const result = await fetch('https://backend-api-express-1sem2024-jf2z.onrender.com/user')
      const data = await result.json()
      console.log(data.success)
      setUsers(data.users)
    } catch (error){
      console.log(error.message)
    }
  }

  const getProducts = async () =>{
    try{
      const result = await fetch('https://backend-api-express-1sem2024-jf2z.onrender.com/product')
      const data = await result.json()
      console.log(data.success)
      setProducts(data.products)
    } catch (error){
      console.log(error.message)
    }
  }

  useEffect(()=>{
    getUsers()
    getProducts()
  },[])

  return (
    <View style={styles.body}>
        <H1 style={styles.usuariosH1}>Usuários</H1>
        <View style={styles.listUser}>
          {users.length ?  <FlatList
              data={users}
              renderItem={({item}) => <CardUser user={item} />}
              keyExtractor={item => item.id}
              horizontal={true}
            /> : <Text>Carregando...</Text>}
           
            
        </View>
        <H1 style={styles.usuariosH1}>Produtos</H1>
        <View style={styles.listProduct}>
          {products.length ?  <FlatList
              data={products}
              renderItem={({item}) => <CardProduct product={item} />}
              keyExtractor={item => item.id}
              horizontal={true}
            /> : <Text>Carregando...</Text>}
         
        </View> 
             
       
    </View>
  )
}

const styles = StyleSheet.create({
    body: {
      flex: 3,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    usuariosH1: {
      marginBottom: 20,
      color: "#FFF"
    },
    listUser:{
      height: 120,
      
    },
    listProduct:{
      height: 120,
     
    }
  }
)

export default Body