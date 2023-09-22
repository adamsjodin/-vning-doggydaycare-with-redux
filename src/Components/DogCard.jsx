
import { useLocation } from "react-router-dom"

function DogCard() {

const location = useLocation()

const showDog = location.state; 


    return ( 
      <article className="cardContainer">
      <img className="cardContainer__img" src={showDog.img} alt="Dog Image" />
      <section className="cardContainer__info">
        <h3>{showDog.name}</h3>
        <h3>{showDog.age}yr</h3>
      </section>
      <section className="cardContainer__second-info">
        <p className="cardContainer__breed">{showDog.breed}</p>
        <p className="cardContainer__owner">
          Owner: {showDog.owner.name} {showDog.owner.lastName}
        </p>
      </section>
      </article>
     );
}

export default DogCard;