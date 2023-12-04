import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Capa from '../../components/Capa';
import Post from '../../components/Post';
import Footer from '../../components/Footer';


const Home = () => {
  return(
    <View style={styles.container}>
        <ScrollView>
            <Capa/>
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

export default Home;

const styles = StyleSheet.create({
    container:{
      backgroundColor: '#F2F2F2'
    }
})