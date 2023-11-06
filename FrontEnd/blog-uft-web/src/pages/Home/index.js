import Capa from "../../components/Capa";
import Posts from "../../components/Posts";

export default function Home(){

    return(
        <div className="min-h-screen px-[20%] my-10">
            <div className="flex flex-col gap-5">
                <div>
                    <Capa/>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <Posts/>
                    <Posts/>
                    <Posts/>
                    <Posts/>
                    <Posts/>
                    <Posts/>
                </div>
            </div>
            {/* <button onClick={goToBlogList}>Blogs</button> */}
        </div>
    )
}