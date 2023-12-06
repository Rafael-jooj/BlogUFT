import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Capa from '../../components/Capa';
import Post from '../../components/Post';
import Footer from '../../components/Footer';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const PostBlog = ()=>{navigation.navigate('BlogPost')};

    useEffect(() => {
        fetch("http://localhost:8000/api/blogs")
            .then(response => response.json())
            .then(data => setBlogs(data))
            .catch(error => {
              console.error("Erro ao buscar blogs:", error);
              console.log(error);
          });
    }, []);

    return (
      <View style={styles.container}>
          <ScrollView>
              {blogs.map((blog, index) => (
                <TouchableOpacity onPress={PostBlog} key={index}>
                  <Post 
                    key={index}      
                  />
                </TouchableOpacity>
              ))}
              <Footer style={{marginTop: 20}}/>
          </ScrollView>
      </View>
  );
}

export default Home;

const styles = StyleSheet.create({
    container:{
      backgroundColor: '#F2F2F2'
    }
});
