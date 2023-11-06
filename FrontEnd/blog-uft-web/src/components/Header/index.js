export default function Header(){
    return(
        <header className="w-full h-16">
        <ul className="flex flex-row justify-between items-center h-full px-[20%]">
            <div className="text-lg">
                <p>Blog<span className="font-semibold">UFT</span></p>
            </div>
            <div className="flex flex-row gap-10">
                <a href="/"><li>HOME</li></a>
                <a href="/"><li>BLOGS</li></a>
                <a href="/"><li>CONTATO</li></a>
            </div>
            <div>
                <input type="text" placeholder="Pesquisar" className="rounded-md px-2 bg-gray-300"/>
            </div>
        </ul>
      </header>
    )
}