import { useState } from "react";
import { useNavigate } from "react-router";
import { login } from "../../api/api";
import { setToken } from "../../api/tokenManager";

export default function Login(){
    const navigate = useNavigate();
    const [username, namechange] = useState("");
    const [password, passwordchange] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    function goToRegister(){
        navigate(`/Register`);
    }
    
    const handlesubmit = (e) => {
        e.preventDefault();
        let regobj = { username, password };
    
        login(regobj)
            .then((res) => {
                console.log('logado');
                setToken(res.data.token);
                localStorage.setItem("usuario_nome", username);
                navigate("/");
            })
            .catch((err) => {
                console.log('erro', err.message);
                setErrorMessage(err.message);
            });
    };

    return(
        <div className="flex items-center justify-center h-screen bg-blue-600">
            <div className="p-10 bg-white rounded-lg shadow-lg w-[500px] max-w-md">
                <div className="flex flex-col gap-4 items-center">
                    <img src="img/logoUFT.png" width={100} alt="logo"/>
                    <h2 className="text-2xl font-bold mb-2 text-gray-800 text-center">BlogUFT</h2>
                </div>
                <form className="space-y-4" onSubmit={handlesubmit}>
                    {errorMessage && (
                        <div className="text-red-500">{errorMessage}</div>
                    )}
                    <div>
                        <label className="block mb-1 font-bold text-gray-500" htmlFor="username">Usuário</label>
                        <input value={username} onChange={e=>namechange(e.target.value)} type="text" id="username" className="w-full border-2 border-gray-200 p-3 rounded-lg outline-none focus:border-blue-500" placeholder="Digite seu nome de usuário" />
                    </div>
                    <div>
                        <label className="block mb-1 font-bold text-gray-500" htmlFor="password">Senha</label>
                        <input value={password} onChange={e=>passwordchange(e.target.value)} type="password" id="password" className="w-full border-2 border-gray-200 p-3 rounded-lg outline-none focus:border-blue-500" placeholder="Digite sua senha"/>
                    </div>
                    <button className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Entrar</button>
                    <div className="flex justify-center">
                        <button onClick={goToRegister} className="underline cursor-pointer text-sky-700">Criar Conta</button>
                    </div>
                </form>
            </div>
        </div>
    )
}