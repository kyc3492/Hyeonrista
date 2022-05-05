import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styles from "./Home.module.css";

function Cafe() {
  window.onbeforeunload = function() {
    window.scrollTo(0, 0);
  };
  const { id } = useParams();

  return <h1>{id}</h1>;
}

export default Cafe;
