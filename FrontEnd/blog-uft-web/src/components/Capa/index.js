

export default function Capa(){
    return(
        <div className="w-full h-72 rounded-lg overflow-hidden relative cursor-pointer">
            <div className="absolute inset-0 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(img/capa.jpg)` }}></div>
            <div className="inline-flex flex-col justify-end h-full gap-5 p-5 relative z-10">
                <p id="categoria" className="w-28 py-1 bg-blue-500 text-white flex justify-center rounded-lg font-semibold">Tecnologia</p>
                <p id="titulo" className="text-xl font-semibold text-white w-3/4">The Impact of Technology on the Workplace: How Technology is Changing</p>
                <p id="data" className="text-white">05 de novembro de 2023</p>
            </div>
        </div>
    )
}