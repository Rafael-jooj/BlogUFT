

export default function Capa(){
    return(
        <div className="w-full h-72 rounded-lg overflow-hidden relative cursor-pointer">
            <div className="absolute inset-0 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(img/capa.jpg)` }}></div>
            <div className="inline-flex flex-col justify-end h-full gap-5 p-5 relative z-10">
                <p id="titulo" className="text-xl font-semibold text-white w-full">Bem vindo ao BlogUFT</p>
                <p id="titulo" className="text-xl font-semibold text-white w-full">Aqui você encontrará blogs academicos dos mais variados temas!</p>
            </div>
        </div>
    )
}