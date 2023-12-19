import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import PeopleCard from "../component/PeopleCard.js";

export const Home = () => (
  <>
    <PeopleCard />
  </>
);
