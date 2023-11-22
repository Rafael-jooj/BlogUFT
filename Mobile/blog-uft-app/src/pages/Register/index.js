import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';

export default function Register({navigation}){
    const Login = ()=>{navigation.navigate('Login')};

    return(
        <View style={styles.container}>
        <View style={styles.campos}>
            <Image source={require('../../img/logo.png')} style={styles.logo}/>
            <Text style={styles.title}>BlogUFT</Text>
            <TextInput style={styles.campo} placeholder="Nome"/>
            <TextInput style={styles.campo} placeholder="Email"/>
            <TextInput style={styles.campo} placeholder="Senha" secureTextEntry={true}/>
            <TextInput style={styles.campo} placeholder="Confirmar Senha" secureTextEntry={true}/>
            <TouchableOpacity style={styles.entrar}>
                <Text style={{color: '#fff'}}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.new}>
            <Text>Já possui uma conta?</Text>
            <TouchableOpacity onPress={Login}>
                <Text style={styles.textButton}>Entrar</Text>
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