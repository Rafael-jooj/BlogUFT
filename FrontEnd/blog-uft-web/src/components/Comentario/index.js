export default function Comentario(props){
    
    return(
        <div className="w-full bg-gray-100 p-2 rounded-lg mb-2">
            <div className="flex flex-col">
                <p>{props.nome}</p>
                <p className="text-gray-500 p-4">"{props.comentario}"</p>
            </div>
        </div>
    )
}