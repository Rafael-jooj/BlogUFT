import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function BlogPost(){
    const [blogPost, setBlogPost] = useState(null);
    const { id } = useParams();
  
    useEffect(() => {
      fetch("/data/dados_blog.json")
        .then(response => response.json())
        .then(data => {
          const post = data.blogs.find(blog => blog.id === id);
          setBlogPost(post);
        })
        .catch(error => console.error("Erro ao carregar os dados:", error));
    }, [id]);
  
    if (!blogPost) {
      return <div className="min-h-screen">Carregando...</div>;
    }

    return(
        <div className="min-h-screen px-[20%]">
            <div className="flex flex-col gap-4">
                <div>
                    <p id="categoria" className="bg-blue-700 w-28 py-1 flex justify-center rounded-lg text-sm text-white font-semibold">Tecnologia</p>
                </div>
                <div>
                    <p id="titulo" className="text-2xl font-semibold">{blogPost.titulo}</p>
                </div>
                <div className="flex flex-row gap-5">
                    <div>
                        <p id="autor" className="text-sm font-semibold text-gray-500">{blogPost.autor}</p>
                    </div>
                    <div>
                        <p id="data" className="text-sm font-semibold text-gray-500">{blogPost.data}</p>
                    </div>
                </div>
                <div className="w-full h-96 rounded-lg overflow-hidden relative cursor-pointer">
                    <div className="absolute inset-0 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(/img/capas/${blogPost.id}.jpg)` }}></div>
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