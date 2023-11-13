export default function Register(){
    return(
        <div className="flex items-center justify-center h-screen bg-blue-600">
            <div className="p-10 bg-white rounded-lg shadow-lg w-[500px] max-w-md">
                <div className="flex flex-col gap-4 items-center">
                    <img src="img/logoUFT.png" width={100} alt="logo"/>
                    <h2 className="text-2xl font-bold mb-2 text-gray-800 text-center">BlogUFT</h2>
                </div>
                <form className="space-y-4">
                    <div>
                        <label className="block mb-1 font-bold text-gray-500" htmlFor="email">Email</label>
                        <input type="email" id="email" className="w-full border-2 border-gray-200 p-3 rounded-lg outline-none focus:border-blue-500" placeholder="Digite seu email"/>
                    </div>
                    <div>
                        <label className="block mb-1 font-bold text-gray-500" htmlFor="password">Senha</label>
                        <input type="password" id="password" className="w-full border-2 border-gray-200 p-3 rounded-lg outline-none focus:border-blue-500" placeholder="Digite sua senha"/>
                    </div>
                    <div>
                        <label className="block mb-1 font-bold text-gray-500" htmlFor="password">Confirmar Senha</label>
                        <input type="password" id="password" className="w-full border-2 border-gray-200 p-3 rounded-lg outline-none focus:border-blue-500" placeholder="Digite sua senha"/>
                    </div>
                    <button className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}