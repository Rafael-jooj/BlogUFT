import { useEffect, useState } from "react";
import Capa from "../../components/Capa";
import Posts from "../../components/Posts";
import { fetchBlogs, fetchCategories } from "../../api/api";

export default function Home(){

    const [blogs, setBlogs] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        Promise.all([fetchBlogs(), fetchCategories()])
            .then(([blogsResponse, categoriesResponse]) => {
                const reversedBlogs = [...blogsResponse.data].reverse();
                setBlogs(reversedBlogs);
                setCategories(categoriesResponse.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar blogs ou categorias:", error);
            });
    }, []);
    


    return(
        <div className="min-h-screen px-[20%] my-10">
            <div className="flex flex-col gap-5">
                <div>
                    <Capa/>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    {blogs.slice(0, 6).map((blog) => {
                        const categoria = categories.find(cat => cat.id === blog.categoria);
                        return (
                            <Posts
                                key={blog.id}
                                id={blog.id}
                                capa={blog.capa}
                                titulo={blog.titulo}
                                autor={blog.autor}
                                data={blog.data_alteracao}
                                conteudo={blog.texto}
                                categoria={categoria ? categoria.nome : 'Sem Categoria'}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    )
}