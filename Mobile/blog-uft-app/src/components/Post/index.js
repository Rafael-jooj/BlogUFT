import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';

const Post = () => {
  return(
    <SafeAreaView style={styles.container}>
        <View style={styles.capa}>
            <ImageBackground source={require('../../img/1.jpg')} style={styles.imagemDeFundo}>
            </ImageBackground>
        </View>
        <View style={styles.conteudo}>
            <View style={{ alignItems: 'flex-start' }}>
                <Text style={styles.categoria}>Tecnologia</Text>
            </View>
            <Text style={styles.titulo}>The impact of tecnolog</Text>
            <Text style={styles.data}>05 de novembro 2023</Text>
        </View>
    </SafeAreaView>
  )
}

export default Post;

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#c9c9c9',
        height: 250,
        marginHorizontal: 20,
        marginVertical: 5,
        borderRadius: 10,
        overflow: 'hidden',
    },
    capa:{
        height: '60%',
        padding: 10,
    },
    imagemDeFundo: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: 'flex-end',
        gap: 10,
        padding: 10,
        borderRadius: 10,
        overflow: 'hidden'
    },
    conteudo:{
        padding: 10,
        justifyContent: 'flex-end',
        gap: 2
    },
    categoria:{
        backgroundColor: '#87CEFA',
        color: 'black',
        padding: 4,
        borderRadius: 5,
        fontWeight: '600',
        width: 'auto'
    },
    titulo:{
        fontSize: 16,
        fontWeight: '600'
    },
})