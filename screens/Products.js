import {View, Text, StyleSheet} from 'react-native'
import Button from '../components/ui/Button.js'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'

const Products = () => {
    const [nameUser, setNameUser] = useState()

    const getAS = async (data) => {
        return await AsyncStorage.getItem(data)
    }

    useEffect( async () => {
        const nome = await getAS('nome')
        setNameUser(nome)
    }, [])
 
    const saveAS =  async (data, value) => {
        await AsyncStorage.setItem(data, value)
        console.log(data, value)
    }

  return (
    <View style={styles.container}>
      <Text>Exemplo AsyncStorage</Text>
      <Text>Nome Salvo: {nameUser}</Text>
        <Button title="Cadastrar Nome User" 
        onPress={() => saveAS('nome', 'manu')}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Products
