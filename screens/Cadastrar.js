import { useNavigation, useRoute } from "@react-navigation/native"
import { View, Text, StyleSheet, Button, TextInput, ScrollView } from "react-native"
import { useState } from "react"

const Cadastrar = () => {
  const [txtName, setTxtName] = useState('')
  const [txtEmail, setTxtEmail] = useState('')
  const [txtAvatar, setTxtAvatar] = useState('')

  const navigation = useNavigation()

  const {users, setUsers} = useRoute().params

  const postUser = async () =>{
    try{
      const result = await fetch('https://backend-api-express-1sem2024-rbd1.onrender.com/user', {
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({name: txtName, email: txtEmail, avatar: txtAvatar})
      })
      const data = await result.json()
      console.log(data)
      setUsers([data.user, ...users])
      console.log(users)
      navigation.goBack()
    } catch (error){
      console.log('Error postUser ' + error.message)
    }
  } 

  return (

    <ScrollView>
      <View style={styles.form}>
        
        <TextInput
          style={styles.input}
          onChangeText={setTxtName}
          value={txtName}
          placeholder="Digite seu nome"
        />
        <TextInput
          style={styles.input}
          onChangeText={setTxtEmail}
          value={txtEmail}
          placeholder="Digite seu E-mail"
        />
        <TextInput
          style={styles.input}
          onChangeText={setTxtAvatar}
          value={txtAvatar}
          placeholder="Digite seu Avatar"
        />
       
          <Button style={styles.botao} title="Cadastrar Usuário" onPress={postUser} />
       
        
      </View>
       
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
      display: 'flex',
      padding: 40
    },
    input: {
      height: 40,
      width: 300,
      backgroundColor: '#FFF',
      marginBottom: 18,
      borderWidth: 1,
      padding: 10,
    },
   

})

export default Cadastrar
