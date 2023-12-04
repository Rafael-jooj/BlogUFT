import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

const Footer = () => {
    return(
        <View style={styles.container}>
            <Text>Copyright © 2023. All Rights reserved</Text>
            <Text>by BlogUFT</Text>
        </View>
    )
}

export default Footer;

const styles = StyleSheet.create({
    container:{
        padding: 20,
        alignItems: 'center',
        backgroundColor: 'white',
        height: 80
    }
})