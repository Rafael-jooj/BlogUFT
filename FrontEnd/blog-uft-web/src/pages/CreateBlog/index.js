import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export default function CreateBlog(){
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [categories, setCategories] = useState([]);
    const [categoria, setSelectedCategory] = useState("");
    const [titulo, setTitle] = useState("");
    const [texto, setContent] = useState("");
    console.log(token)
    useEffect(() => {
        // Fetch categories from the API
        fetch("http://127.0.0.1:8000/api/categories", {
            method : 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`,

            },
        })
            .then((response) => response.json())
            .then((data) => {
                setCategories(data);
                logCategories(data);
            })
            .catch((error) => console.error("Error fetching categories:", error));
    }, []);

    const handlesubmit = (e) =>{
        e.preventDefault();
        let regobj={titulo,texto,categoria};
        console.log(regobj);
        fetch("http://127.0.0.1:8000/api/add_blog/", {
                method: "POST",
                headers: { 
                    'content-type': 'application/json' ,
                    'Authorization': `Token ${token}`,
                },
                body: JSON.stringify(regobj)
            }).then((res) => {
                console.log('blog criado')
                navigate("/");
            }).catch((err) => {
                console.log('erro', err.message)
            });
    }

    const logCategories = (categories) => {
        console.log("Categories:", categories);
    };
    return(
        <div className="min-h-screen px-[20%] py-4">
            <div className="bg-white rounded-lg mt-5 mb-10 p-5 shadow-md border">
                <div className="flex justify-center py-2 text-lg font-semibold">
                    <h2>Criar Novo Blog</h2>
                </div>

                <form action="#" className="flex flex-col gap-4" onSubmit={handlesubmit}>
                    <div className="flex flex-col">
                        <label>Título:</label>
                        <input id="title" type="text" className="border rounded-lg p-2" value={titulo}  onChange={(e) => setTitle(e.target.value)}/>
                    </div>

                    <div className="flex flex-col">
                        <label>Conteúdo:</label>
                        <textarea className="border rounded-lg p-2 h-48" value={texto} onChange={(e) => setContent(e.target.value)}/>
                    </div>

                    <div className="flex flex-col">
                        <label>Categoria:</label>
                        <select
                            value={categoria}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="border rounded-lg p-2"
                        >
                            <option value="">Selecione a Categoria</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.nome}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label>Imagem:</label>
                        <div class="flex items-center justify-center w-full">
                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                    </svg>
                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, ou JPG</p>
                                </div>
                                <input id="dropzone-file" type="file" class="hidden" />
                            </label>
                        </div> 
                    </div>

                    <div className="flex justify-center">
                        <button className="bg-blue-500 p-2 rounded-lg text-white font-semibold hover:bg-blue-700">
                            Criar Blog
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}