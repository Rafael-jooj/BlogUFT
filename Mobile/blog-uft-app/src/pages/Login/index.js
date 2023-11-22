import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';

export default function Login({navigation}){
    const CreateAccount = ()=>{navigation.navigate('Register')};

    return(
        <View style={styles.container}>
            <View style={styles.campos}>
                <Image source={require('../../img/logo.png')} style={styles.logo}/>
                <Text style={styles.title}>BlogUFT</Text>
                <TextInput style={styles.campo} placeholder="Email"/>
                <TextInput style={styles.campo} placeholder="Senha" secureTextEntry={true}/>
                <TouchableOpacity style={styles.entrar}>
                    <Text style={{color: '#fff'}}>Entrar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.new}>
                <Text>Não possui uma conta?</Text>
                <TouchableOpacity onPress={CreateAccount}>
                    <Text style={styles.textButton}>Criar Conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 30
    },
    title:{
        fontSize: 20
    },
    campos:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        gap: 10
    },
    campo:{
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderRadius: 10
    },
    new:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        marginTop: 10
    },
    textButton:{
        color: 'blue'
    },
    entrar:{
        backgroundColor: 'blue',
        width: '100%',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center'
    },
    logo:{
        width: 100,
        height: 100,
        resizeMode: 'contain'
    }
  });
  