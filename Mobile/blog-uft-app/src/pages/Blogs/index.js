import React from 'react';
import { View, ScrollView, StyleSheet, TextInput } from 'react-native';
import Post from '../../components/Post';
import { Ionicons } from '@expo/vector-icons';
import Footer from '../../components/Footer';

// import { Container } from './styles';

const Blogs = () => {
  return(
        <View style={styles.container}>
            <ScrollView>
                {/* <View style={styles.searchCampo}>
                    <View style={styles.searchBar}>
                        <Ionicons name="search" size={20} color="gray" />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Buscar..."
                            // Outras propriedades do TextInput conforme necessário
                        />
                    </View>
                </View> */}
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <View style={{marginTop: 20}}>
                    <Footer/>
                </View>
            </ScrollView>
        </View>
    )
}

export default Blogs;

const styles = StyleSheet.create({
    container:{
        marginTop: 15,
        backgroundColor: '#F2F2F2'
    },
    searchCampo:{
        marginHorizontal: 20,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#c9c9c9',
        padding: 5,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 10,
        height: '100%'
    },
    searchInput: {
        flex: 1,
        paddingHorizontal: 10,
        // Outros estilos para o TextInput
    },
})