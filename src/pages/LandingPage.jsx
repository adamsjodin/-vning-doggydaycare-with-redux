import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { showDogs } from "../actions/dogActions"

function LandingPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()


    function handleClick() {
        navigate('/ourdogs');
        dispatch(showDogs(data))
    }

    return ( 
        <header>
            <h1>WELCOME TO DOGGY DAYCARE</h1>
            <button onClick={handleClick} className="landing-page__button">OUR DOGS</button>
            <img src="./src/assets/landingPageImage.png" alt="Image of a dog" />
        </header>
     );
}

export default LandingPage;