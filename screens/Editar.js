import { useRoute } from "@react-navigation/native"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { View, StyleSheet, Button, ScrollView, TextInput } from "react-native"

const Editar = () => {

  const {user} = useRoute().params
  const [txtName, setTxtName] = useState(user.name)
  const [txtEmail, setTxtEmail] = useState(user.email)
  const [txtAvatar, setTxtAvatar] = useState(user.avatar)

  const navigation = useNavigation()


  const editUser = async () =>{
    try{
      const result = await fetch('https://backend-api-express-1sem2024-jf2z.onrender.com/user' + user.id, {
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({name: txtName, email: txtEmail, avatar: txtAvatar})
      })
      const data = await result.json()
      console.log(data)
      if(data?.success){
         navigation.goBack()
      } else {
        alert(data.error)
      }
      
    } catch (error){
      console.log('Error editUser ' + error.message)
      alert(error.message)
    }
  } 

  const removeUser = async () =>{
    try{
      const result = await fetch('https://backend-api-express-1sem2024-jf2z.onrender.com/user' + user.id, {
        method: "DELETE",
        headers:{
          "Content-Type": "application/json"
        }
      })
      const data = await result.json()
      console.log(data)
      if(data?.success){
         navigation.goBack()
      } else {
        alert(data.error)
      }
      
    } catch (error){
      console.log('Error removeUser ' + error.message)
      alert(error.message)
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
       
          <Button style={styles.botao} title="Editar Usuário" onPress={editUser} />

          <Button  title="Excluir Usuário" onPress={removeUser} />
       
        
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

export default Editar
