import { useEffect, useState } from "react";
import MyPosts from "../../components/MyPosts";
import { fetchMyBlogs, fetchCategories } from "../../api/api";

export default function MeusBlogs(){

    const [blogs, setBlogs] = useState([]);
    const [categories, setCategories] = useState([]);
    const token = localStorage.getItem("token");

    useEffect(() => {
        Promise.all([fetchMyBlogs(token), fetchCategories()])
            .then(([myblogsResponse, categoriesResponse]) => {
                setBlogs(myblogsResponse.data);
                setCategories(categoriesResponse.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar blogs ou categorias:", error);
            });
    }, []);


    return(
        <div className="min-h-screen px-[20%] my-10">
            <div className="flex flex-col gap-5">
                <div className="grid grid-cols-3 gap-4">
                {blogs.map((blog, index) => {
                    const categoria = categories.find(cat => cat.id === blog.categoria);
                    return (
                        <div key={blog.id}>
                            <MyPosts
                                id={blog.id}
                                capa={blog.capa}
                                titulo={blog.titulo}
                                autor={blog.autor}
                                data={blog.data_alteracao}
                                conteudo={blog.texto}
                                categoria={categoria ? categoria.nome : 'Sem Categoria'}
                            />
                            {/* <button onClick={() => handleDelete(blog.id)}>Excluir</button> */}
                        </div>
                    );
                })}
                </div>
            </div>
        </div>
    )
}