import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput, Button, StyleSheet } from 'react-native';

const BlogPost = () => {
    const [commentContent, setCommentContent] = useState('');
    // Substitua os valores fictícios pelos valores reais conforme necessário
    const blogPost = {
        titulo: "Título do Blog",
        capa: "url_da_imagem",
        texto: "Conteúdo do Blog",
        data_alteracao: "Data de Alteração",
    };
    const selectedCategory = { nome: "Categoria" };
    const autor = "Nome do Autor";
    const comments = [
        { nome: "Comentário 1", texto: "Texto do comentário 1" },
        { nome: "Comentário 2", texto: "Texto do comentário 2" },
        // ... outros comentários
    ];

    const handleSubmit = () => {
        // Lógica de envio do comentário
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{blogPost.titulo}</Text>
            <Text style={styles.category}>{selectedCategory.nome}</Text>
            <Text style={styles.author}>Por: {autor}</Text>
            <Text>{blogPost.data_alteracao}</Text>
            <Image
                style={styles.image}
                source={{ uri: blogPost.capa }}
            />
            <Text style={styles.content}>{blogPost.texto}</Text>

            <Text style={styles.commentsTitle}>Comentários:</Text>
            {comments.map((comment, index) => (
                <View key={index} style={styles.comment}>
                    <Text style={styles.commentAuthor}>{comment.nome}</Text>
                    <Text>{comment.texto}</Text>
                </View>
            ))}

            <TextInput
                style={styles.input}
                placeholder="Comentar..."
                value={commentContent}
                onChangeText={setCommentContent}
            />
            <Button title="Enviar" onPress={handleSubmit} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    category: {
        fontSize: 18,
        backgroundColor: 'blue',
        width: 140,
        paddingVertical: 4,
        textAlign: 'center',
        borderRadius: 4,
        color: 'white',
        fontWeight: 'bold',
    },
    author: {
        fontSize: 16,
        marginBottom: 5,
    },
    image: {
        width: '100%',
        height: 240,
        borderRadius: 10,
        marginBottom: 10,
    },
    content: {
        fontSize: 16,
        marginBottom: 10,
    },
    commentsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
    },
    comment: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#f2f2f2',
        borderRadius: 5,
    },
    commentAuthor: {
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
});

export default BlogPost;
