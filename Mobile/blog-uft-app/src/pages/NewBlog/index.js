import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Footer from '../../components/Footer';
import * as ImagePicker from 'expo-image-picker';
import { ImageBackground } from 'react-native';

const Novo = () => {
    const [titulo, setTitulo] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

    const pickImage = async () => {
        // Solicita a permissão para acessar a galeria
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Você recusou o acesso à galeria!");
            return;
        }

        const pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true) {
            return;
        }

        setSelectedImage({ localUri: pickerResult.uri });
    };

    return(
        <View style={{justifyContent: 'space-between', height: '100%'}}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.titulo}>Novo Blog</Text>
                </View>
                <View style={styles.campos}>
                    <View>
                        <Text>Titulo:</Text>
                        <TextInput style={styles.campo}/>
                    </View>
                    <View>
                        <Text>Autor:</Text>
                        <TextInput style={styles.campo}/>
                    </View>
                    <View>
                        <Text>Conteúdo:</Text>
                        <TextInput style={styles.campo} multiline={true} height={100}/>
                    </View>
                    <View style={styles.imagem}>
                        <Button title="Selecionar Imagem" />
                        {selectedImage !== null && (
                            <ImageBackground
                                source={{ uri: selectedImage.localUri }}
                                style={styles.thumbnail}
                            >
                            </ImageBackground>
                        )}
                    </View>

                    <View>
                        <Button title="Criar Blog" />
                    </View>

                </View>
            </View>
            <View>
                <Footer/>
            </View>
        </View>
    )
}

export default Novo;

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        backgroundColor: 'white',
        margin: 20,
        borderRadius: 10,
        paddingVertical: 30,
        paddingHorizontal: 20,
        marginTop: 50
    },
    titulo:{
        alignSelf: 'center',
        fontSize: 20,
        marginBottom: 20
    },
    campos:{
        gap: 20
    },
    campo:{
        borderWidth: 1,
        borderColor: '#c9c9c9',
        padding: 4,
        borderRadius: 5
    },
    thumbnail: {
        width: 200,
        height: 200,
        resizeMode: "contain"
    },
    imagem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
})