import { useNavigate } from "react-router-dom"

function DogCards({ data }) {
    const navigate = useNavigate()

    function singleDog() {
        navigate('/dogpage', {state: data});
    }

  return (
    <article onClick={singleDog} className="cardContainer">
      <img className="cardContainer__img" src={data.img} alt="Dog Image" />
      <section className="cardContainer__info">
        <h3>{data.name}</h3>
        <h3>{data.age}yr</h3>
      </section>
      <section className="cardContainer__second-info">
        <p className="cardContainer__breed">{data.breed}</p>
        <p className="cardContainer__owner">
          Owner: {data.owner.name} {data.owner.lastName}
        </p>
      </section>
    </article>
  );
}

export default DogCards;
