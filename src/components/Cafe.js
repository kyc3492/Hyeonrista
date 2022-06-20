import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styles from "./Cafe.module.css";

function Cafe({ id, name, description, background }) {
  return (
    <div
      className={`${styles.contents} ${styles.cafe}`}
      data-aos="fade-up"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={styles.cover}></div>
      <div className={styles.cafe_title}>{name}</div>
      <div className={styles.cafe_detail}>{description}</div>
      <Link to={`/cafe/${id}`} className={styles.GoToDetail}>
        메뉴보기
      </Link>
    </div>
  );
}

export default Cafe;
