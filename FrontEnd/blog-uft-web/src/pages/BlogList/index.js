import { useEffect, useState } from "react";
import Posts from "../../components/Posts";
import { fetchBlogs, fetchCategories } from "../../api/api";

export default function BlogList(){
    
    const [blogs, setBlogs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        Promise.all([fetchBlogs(), fetchCategories()])
            .then(([blogsResponse, categoriesResponse]) => {
                setBlogs(blogsResponse.data);
                setCategories(categoriesResponse.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar blogs ou categorias:", error);
            });
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredBlogs = blogs.filter(blog => {
        return blog.titulo.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return(
        <div className="min-h-screen px-[20%] my-10">
            <div className="flex flex-col gap-5">
                <div className="w-full flex flex-row gap-5">
                    <input 
                        type="text" 
                        placeholder="Pesquisar" 
                        className="rounded-md p-2 bg-gray-100 border w-full"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {filteredBlogs.map((blog) => {
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