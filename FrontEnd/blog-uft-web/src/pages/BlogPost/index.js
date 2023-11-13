export default function BlogPost(){
    return(
        <div className="min-h-screen px-[20%]">
            <div className="flex flex-col gap-4">
                <div>
                    <p id="categoria" className="bg-blue-700 w-28 py-1 flex justify-center rounded-lg text-sm text-white font-semibold">Tecnologia</p>
                </div>
                <div>
                    <p id="titulo" className="text-2xl font-semibold">The Impact of Technology on the Workplace: How Technology is Changing</p>
                </div>
                <div className="flex flex-row gap-5">
                    <div>
                        <p id="data" className="text-sm font-semibold text-gray-500">Rracey Wilson</p>
                    </div>
                    <div>
                        <p id="data" className="text-sm font-semibold text-gray-500">05 de novembro de 2023</p>
                    </div>
                </div>
                <div className="w-full h-96 rounded-lg overflow-hidden relative cursor-pointer">
                    <div className="absolute inset-0 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(img/capa.jpg)` }}></div>
                </div>

                <div id="conteudo" className="flex flex-col gap-5 mb-5">
                    <p>
                    Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels. One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.
                    </p>
                    <p>
                    Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels. One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.
                    </p>
                    <p>
                    Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels. One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.
                    </p>
                </div>
            </div>
        </div>
    )
}