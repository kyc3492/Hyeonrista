import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styles from "./Cafe.module.css";

function Menu({ id, name, description, background }) {
  return (
    <div className={`${styles.contents} ${styles.cafe}`} data-aos="fade-up">
      리디아스 커피
    </div>
  );
}

export default Menu;
