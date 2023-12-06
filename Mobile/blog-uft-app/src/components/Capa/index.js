import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';

const Capa = () => {
  return(
    <SafeAreaView style={styles.container}>
        <View style={styles.capa}>
            <ImageBackground source={require('../../img/capa.jpg')} style={styles.imagemDeFundo}>
                <Text style={styles.titulo}>Bem vindo ao BlogUFT!</Text>
            </ImageBackground>
        </View>
    </SafeAreaView>
  )
}

export default Capa;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#c9c9c9',
        height: 150,
        margin: 20,
        borderRadius: 10,
        overflow: 'hidden'
    },
    capa:{
        height: '100%',
    },
    imagemDeFundo: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: 'flex-end',
        gap: 10,
        padding: 10
    },
    categoria:{
        backgroundColor: '#1E90FF',
        color: 'white',
        padding: 4,
        borderRadius: 5,
        fontWeight: '600',
        width: 'auto'
    },
    titulo:{
        color: 'white',
        fontSize: 16,
        fontWeight: '600'
    },
    data:{
        color: 'white'
    }
})