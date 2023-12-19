import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";

function PeopleCard() {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.fetchPeople();

    // The dependency array is left empty to ensure this effect runs only once on mount
  }, [actions]);

  return (
    <div>
      {store.people.map((person, index) => (
        <div key={index} className="card">
          <h3>{person.name}</h3>
          <p>Height: {person.height}</p>
          <p>Mass: {person.mass}</p>
          <p>Hair Color: {person.hair_color}</p>
          <p>Skin Color: {person.skin_color}</p>
          <p>Eye Color: {person.eye_color}</p>
          <Link to={`/people/${person.id}`}>Learn More</Link>
        </div>
      ))}
    </div>
  );
}

export default PeopleCard;
