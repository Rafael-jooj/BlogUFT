import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchBlogPost, fetchCategories, fetchComments, fetchAuthor } from "../../api/api";
import Comentario from "../../components/Comentario";

export default function BlogPost() {
    const [blogPost, setBlogPost] = useState(null);
    const [categories, setCategories] = useState([]);
    const [autor, setAutor] = useState("");
    const { id } = useParams();
    const [commentContent, setCommentContent] = useState("");
    const [comments, setComments] = useState([]);

    const fetchAndSetComments = () => {
      fetchComments(id)
          .then(response => {
              setComments(response.data);
          })
          .catch(error => {
              console.error('Error fetching comments:', error);
          });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const token = localStorage.getItem("token");
  
      if (!token) {
          console.error("Usuário não autenticado");
          return;
      }
  
      const commentData = { texto: commentContent };
  
      fetch(`http://127.0.0.1:8000/api/add_comment/${id}/`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${token}`
          },
          body: JSON.stringify(commentData)
      }).then(data => {
          fetchAndSetComments();
          setCommentContent("");
      })
      .catch(error => {
          console.error("Erro ao enviar comentário:", error);
      });
    };

    useEffect(() => {
        const token = localStorage.getItem("token");

        Promise.all([
            fetchBlogPost(id, token),
            fetchCategories(token),
            fetchAuthor(3)
        ])
        .then(([blogPostResponse, categoriesResponse, authorResponse]) => {
            setBlogPost(blogPostResponse.data);
            setCategories(categoriesResponse.data);
            setAutor(authorResponse.data.username);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
        fetchAndSetComments();
    }, [id]);

    if (!blogPost || categories.length === 0) {
        return <div className="min-h-screen">Carregando...</div>;
    }

    const selectedCategory = categories.find(category => category.id === blogPost.categoria);
  
    return(
        <div className="min-h-screen px-[20%] mt-10">
            <div className="flex flex-col gap-4">
                <div>
                    <p id="titulo" className="text-3xl font-semibold" >{blogPost.titulo}</p>
                </div>

                <div>
                    <p id="categoria" className="bg-blue-700 w-28 py-1 flex justify-center rounded-lg text-sm text-white font-semibold">{selectedCategory.nome}</p>
                </div>
                <div className="flex flex-row gap-5">
                    <div>
                        <p id="autor" className="">Por: <span className="font-semibold">{autor}</span></p>
                    </div>
                    <div>
                        <p id="autor" className="">{blogPost.data_alteracao}</p>
                    </div>
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

                <div id="conteudo" className="flex flex-col gap-5 my-10 border-t">
                    <p>comentários:</p>
                    <div>
                        {comments.map((comment, index) => (
                            <div key={index} className="comment">
                                <Comentario nome={comment.nome} comentario={comment.texto}/>
                            </div>
                        ))}
                    </div>
                    <form onSubmit={handleSubmit}>
                        <textarea
                            className="border p-2 w-full"
                            placeholder="comentar..."
                            value={commentContent}
                            onChange={(e) => setCommentContent(e.target.value)}
                        />
                        <div className="self-center">
                            <button className="bg-sky-200 px-4 py-2 rounded-lg" type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}