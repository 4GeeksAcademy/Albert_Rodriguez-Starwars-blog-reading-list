import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

function PlanetDetail() {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    actions.fetchPlanetDetail(id);
  }, [id]);

  if (!store.currentPlanet) {
    return <div>Loading...</div>;
  }

  const { name } = store.currentPlanet;

  return (
    <div className="card mt-5" style={{ width: "30rem", margin: "auto" }}>
      <img
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        className="card-img-top"
        alt={name}
        style={{ height: "30rem" }}
      />
      <div className="card-body">
        <h1 className="card-title">{name}</h1>
      </div>
    </div>
  );
}

export default PlanetDetail;
