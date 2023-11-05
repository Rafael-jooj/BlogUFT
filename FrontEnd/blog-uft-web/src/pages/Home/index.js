import { useNavigate } from "react-router-dom"

export default function Home(){
    const navigate = useNavigate();

    function goToBlogList(){
        navigate('/BlogList');
    }

    return(
        <div>
            <p>Home page</p>
            <button onClick={goToBlogList}>Blogs</button>
        </div>
    )
}