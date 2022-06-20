import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  window.onbeforeunload = function() {
    window.scrollTo(0, 0);
  };

  return (
    { onbeforeprint },
    (
      <div>
        <div className={styles.container}>
          <div className={styles.title_wrapper}>
            <div className={styles.title1} data-aos="fade-up">
              현리의
            </div>
            <div className={styles.title2} data-aos="fade-up">
              카페를
            </div>
            <div className={styles.title3} data-aos="fade-up">
              모으다
            </div>
          </div>
          <div className={styles.body_wrapper} data-aos="fade-up">
            <div className={styles.body_contents} data-aos="fade-up">
              <div>세상에 하나뿐인</div>
              <div>우리 동네 카페</div>
              <div>리뷰 플랫폼</div>
            </div>
            <div className={styles.body_detail} data-aos="fade-up">
              <div>이제 주변 카페의 다양한 음료를</div>
              <div>비교하고 평가할 수 있습니다.</div>
            </div>
            <Link to={"/Main"} className={styles.GoToMain} data-aos="fade-up">
              지금 둘러보기
            </Link>
            <div className={styles.body_cover}></div>
          </div>
          <div className={styles.about_wrapper} data-aos="fade-up">
            <div className={styles.about_cover}></div>
            <div className={styles.about_contents}>
              <div>현재 개발 중인 페이지입니다</div>
              <div>피드백은 카톡주세용</div>
            </div>
            <div className={styles.copyright}>
              Copyright 2022. YeonCheol all rights reserved.
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Home;
