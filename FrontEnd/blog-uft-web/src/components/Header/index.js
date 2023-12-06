export default function Header(){
    
    return(
        <header className="w-full h-16 border-b">
        <ul className="flex flex-row justify-between items-center h-full px-[20%]">
            <div className="text-lg">
                <p>Blog<span className="font-semibold">UFT</span></p>
            </div>
            <div className="flex flex-row gap-10 text-lg">
                <a href="/"><li>Home</li></a>
                <a href="/BlogList"><li>Blogs</li></a>
                <a href="/CreateBlog"><li>Criar Blog</li></a>
                <a href="/MeusBlogs"><li>Meus Blogs</li></a>
            </div>
            <div>
                <p className="text-gray-700 font-semibold">Olá Rafael</p>
            </div>
        </ul>
      </header>
    )
}