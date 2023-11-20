export default function Footer(){
    return(
        <footer className="w-full h-32 flex flex-row justify-between items-center bg-gray-100 border-t px-[20%]">
            <div>
                <p>© Blog<span className="font-semibold">UFT</span></p>
                <p>All Rights Reserved.</p>
            </div>
            <div>
                <ul className="flex flex-row gap-5">
                    <a href="/"><li>Termos de Uso</li></a>
                    <a href="/"><li>Política de Privacidade</li></a>
                    <a href="/"><li>Política de Cookies</li></a>
                </ul>
            </div>
        </footer>
    )
}