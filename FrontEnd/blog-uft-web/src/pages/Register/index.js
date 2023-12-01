import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

export default function Register(){

    const [username, namechange] = useState("");
    const [email, emailchange] = useState("");
    const [password, passwordchange] = useState("");
    

    const handlesubmit = (e) =>{
        e.preventDefault();
        let regobj={username,email,password};
        console.log(regobj);
        fetch("http://127.0.0.1:8000/api/register/", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(regobj)
            }).then((res) => {
                toast.success('Registered successfully.')
            }).catch((err) => {
                toast.error('Failed :' + err.message);
            });
    }

    return(
        <div className="flex items-center justify-center h-screen bg-blue-600">
            <div className="p-10 bg-white rounded-lg shadow-lg w-[500px] max-w-md">
                <div className="flex flex-col gap-4 items-center">
                    <img src="img/logoUFT.png" width={100} alt="logo"/>
                    <h2 className="text-2xl font-bold mb-2 text-gray-800 text-center">BlogUFT</h2>
                </div>
                <form className="space-y-4" onSubmit={handlesubmit}>
                    <div>
                        <label className="block mb-1 font-bold text-gray-500" htmlFor="username">Nome de Usuário</label>
                        <input value={username} onChange={e=>namechange(e.target.value)} type="text" id="username" className="w-full border-2 border-gray-200 p-3 rounded-lg outline-none focus:border-blue-500" placeholder="Digite seu nome de usuário" />
                    </div>
                    <div>
                        <label className="block mb-1 font-bold text-gray-500" htmlFor="email">Email</label>
                        <input value={email} onChange={e=>emailchange(e.target.value)} type="email" id="email" className="w-full border-2 border-gray-200 p-3 rounded-lg outline-none focus:border-blue-500" placeholder="Digite seu email"/>
                    </div>
                    <div>
                        <label className="block mb-1 font-bold text-gray-500" htmlFor="password">Senha</label>
                        <input value={password} onChange={e=>passwordchange(e.target.value)} type="password" id="password" className="w-full border-2 border-gray-200 p-3 rounded-lg outline-none focus:border-blue-500" placeholder="Digite sua senha"/>
                    </div>
                    <div>
                        <label className="block mb-1 font-bold text-gray-500" htmlFor="password">Confirmar Senha</label>
                        <input type="password" id="password" className="w-full border-2 border-gray-200 p-3 rounded-lg outline-none focus:border-blue-500" placeholder="Digite sua senha"/>
                    </div>
                    <button type="submit" className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}