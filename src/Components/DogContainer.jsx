import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import DogsCards from "./DogsCards";

function DogContainer() {
  const [dogs, setDogs] = useState();
  const [dogsFromStore, setDogsFromStore] = useState();

  const state = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    setDogs(state.dogs);
    setDogsFromStore(state.dogs);
  }, [state]);

  function handleSearch(input) {
    console.log(input);
    if (input.trim() === "") {
      setDogsFromStore(dogs);
    } else {
      let dogCopy = [...dogs];
      const searchResult = dogCopy.filter((dog) =>
        dog.name.toLowerCase().includes(input.toLowerCase())
      );
      setDogsFromStore(searchResult);
    }
  }

  return (
    <>
      <h2>OUR DOGS</h2>
      <form className="dog-search">
        <label htmlFor="search">SEARCH DOGS</label>
        <input
          type="text"
          name="search"
          id="search"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </form>
      <article className="dog-wrapper">
        {
          dogsFromStore &&
          dogsFromStore.map((data, i) => <DogsCards data={data} key={i} />)
          }
      </article>
    </>
  );
}

export default DogContainer;
