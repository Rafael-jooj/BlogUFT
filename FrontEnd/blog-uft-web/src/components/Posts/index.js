import {useNavigate} from "react-router-dom"

export default function Posts(props){
    const navigate = useNavigate();

    function goToBlogPost(){
        navigate(`/BlogPost/${props.id}`);
    }

    return(
        <div className="relative group" onClick={goToBlogPost}>
            <div className="border rounded-lg p-3 h-96 transition-transform transform group-hover:-translate-y-2 cursor-pointer shadow">
                <div className="w-full h-48 relative rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(http://localhost:8000/${props.capa})` }}></div>
                </div>
                <div className="inline-flex flex-col gap-4 mt-5">
                    <p id="categoria" className="bg-sky-100 w-28 py-1 flex justify-center rounded-lg text-sm text-blue-700 font-semibold">{props.categoria}</p>
                    <p id="titulo" className="text-md font-semibold">{props.titulo}</p>
                    <p id="data" className="text-sm">{props.data}</p>
                </div>
            </div>
        </div>
    )
}