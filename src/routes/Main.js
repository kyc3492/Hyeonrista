import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Main.module.css";

function Main() {
  window.onbeforeunload = function() {
    window.scrollTo(0, 0);
  };

  return (
    { onbeforeprint },
    (
      <div>
        <div className={styles.container}>
          <div className={`${styles.contents} ${styles.cafe1}`}>
            <div className={styles.cover}></div>
            <div className={styles.cafe_title}>리디아스 커피</div>
            <div className={styles.cafe_detail}>핸드드립으로 취향찾기</div>
            <Link to={`/cafe/${1}`} className={styles.GoToDetail}>
              메뉴보기
            </Link>
          </div>
          <div
            className={`${styles.contents} ${styles.cafe2}`}
            data-aos="fade-up"
          >
            <div className={styles.cover}></div>
            <div className={styles.cafe_title}>커피홀</div>
            <div className={styles.cafe_detail}>빵도 맛있는 카페</div>
            <Link to={`/cafe/${2}`} className={styles.GoToDetail}>
              메뉴보기
            </Link>
          </div>
          <div
            className={`${styles.contents} ${styles.cafe3}`}
            data-aos="fade-up"
          >
            <div className={styles.cover}></div>
            <div className={styles.cafe_title}>카페 We</div>
            <div className={styles.cafe_detail}>
              겨울엔 향긋한 차, 여름엔 시원한 빙수
            </div>
            <Link to={`/cafe/${3}`} className={styles.GoToDetail}>
              메뉴보기
            </Link>
          </div>
          <div
            className={`${styles.contents} ${styles.cafe4}`}
            data-aos="fade-up"
          >
            <div className={styles.cover}></div>
            <div className={styles.cafe_title}>메가커피</div>
            <div className={styles.cafe_detail}>실패없는 선택</div>
            <Link to={`/cafe/${4}`} className={styles.GoToDetail}>
              메뉴보기
            </Link>
          </div>
        </div>
      </div>
    )
  );
}
export default Main;
