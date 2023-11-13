import {useNavigate} from "react-router-dom"

export default function Posts(){
    const navigate = useNavigate();

    function goToBlogPost(){
        navigate('/BlogPost');
    }

    return(
        <div className="relative group" onClick={goToBlogPost}>
            <div className="border rounded-lg p-3 h-96 transition-transform transform group-hover:-translate-y-2 cursor-pointer shadow">
                <div className="w-full h-48 relative rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(img/subcapa.jpg)` }}></div>
                </div>
                <div className="inline-flex flex-col gap-4 mt-5">
                    <p id="categoria" className="bg-sky-100 w-28 py-1 flex justify-center rounded-lg text-sm text-blue-700">Tecnologia</p>
                    <p id="titulo" className="text-md font-semibold">The Impact of Technology on the Workplace: How Technology is Changing</p>
                    <p id="data" className="text-sm">05 de novembro de 2023</p>
                </div>
            </div>
        </div>
    )
}