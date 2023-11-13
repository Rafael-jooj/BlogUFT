import { useEffect, useState } from "react";
import Capa from "../../components/Capa";
import Posts from "../../components/Posts";

export default function Home(){

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Carregar os dados do JSON
        fetch("/data/dados_blog.json")
            .then(response => response.json())
            .then(data => setBlogs(data.blogs))
            .catch(error => console.error("Erro ao carregar os dados:", error));
    }, []);


    return(
        <div className="min-h-screen px-[20%] my-10">
            <div className="flex flex-col gap-5">
                <div>
                    <Capa/>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    {blogs.map((blog, index)=>(
                        <Posts id={blog.id} titulo={blog.titulo} autor={blog.autor} data={blog.data} conteudo={blog.conteudo} categoria={blog.categoria}/>
                    ))}
                </div>
            </div>
            {/* <button onClick={goToBlogList}>Blogs</button> */}
        </div>
    )
}