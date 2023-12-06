import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Function to make a GET request
const fetchData = async (url, token) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default function BlogPost() {
    const [blogPost, setBlogPost] = useState(null);
    const [categories, setCategories] = useState([]);
    const nome_de_usuario = localStorage.getItem("usuario_nome");
    const { id } = useParams();
  
    useEffect(() => {
      // Fetch the blogPost information
      const blogPostUrl = `http://127.0.0.1:8000/api/get_blog/${id}`;
      const categoriesUrl = `http://127.0.0.1:8000/api/categories`;
      const token = localStorage.getItem("token");
      console.log("nome", nome_de_usuario)
      Promise.all([fetchData(blogPostUrl, token), fetchData(categoriesUrl, token)])
        .then(([blogPostData, categoriesData]) => {
          setBlogPost(blogPostData);
          setCategories(categoriesData);
        })
        .catch((error) => {
          // Handle error
          console.error('Error fetching data:', error);
        });
    }, [id]);
  
    if (!blogPost || categories.length === 0) {
      return <div className="min-h-screen">Carregando...</div>;
    }
  
    // Find the category with the given category_id
    const selectedCategory = categories.find(category => category.id === blogPost.categoria);

    return(
        <div className="min-h-screen px-[20%] mt-10">
            <div className="flex flex-col gap-4">
                <div>
                    <p id="categoria" className="bg-blue-700 w-28 py-1 flex justify-center rounded-lg text-sm text-white font-semibold">{selectedCategory.nome}</p>
                </div>
                
                <div>
                    <p id="titulo" className="text-3xl font-semibold" >{blogPost.titulo}</p>
                </div>
                <div>
                    <p id="autor" className="">{blogPost.data_alteracao}</p>
                </div>
                <div>
                    <p id="autor" className="">Por {nome_de_usuario}</p>
                </div>
                <div className="w-full h-96 rounded-lg overflow-hidden relative cursor-pointer">
                    <div
                        className="absolute inset-0 bg-cover bg-no-repeat bg-center"
                        style={{ backgroundImage: `url(http://localhost:8000/${blogPost.capa})` }}
                    ></div>
                </div>
                <div className="flex flex-row gap-5">
                    <div>
                        <p id="data" className="text-sm font-semibold text-gray-500">{blogPost.texto}</p>
                    </div>
                </div>
                
                

                <div id="conteudo" className="flex flex-col gap-5 mb-10">
                    <p>{blogPost.conteudo}</p>
                    <p>{blogPost.conteudo}</p>
                    <p>{blogPost.conteudo}</p>
                </div>
            </div>
        </div>
    )
}