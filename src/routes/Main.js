import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Main.module.css";
import Cafe from "../components/Cafe";

function Main() {
  window.onbeforeunload = function() {
    window.scrollTo(0, 0);
  };

  const [cafes, setCafes] = useState([]);
  const getCafes = async () => {
    //const json = await (await fetch("http://13.125.29.181:8001/cafes")).json();
    const json = await (await fetch("/cafes")).json();
    //console.log(json.cafe_list);
    setCafes(json.cafe_list);
  };

  useEffect(() => {
    getCafes();
  }, []);

  return (
    { onbeforeprint },
    (
      <div>
        <div className={styles.container}>
          {cafes.map((cafe) => (
            <Cafe
              key={cafe.id}
              id={cafe.id}
              name={cafe.name}
              description={cafe.description}
              background={cafe.background}
            />
          ))}
        </div>
      </div>
    )
  );
}
export default Main;
