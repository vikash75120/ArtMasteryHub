"use client";

import {Button, Carousel } from "antd";
import { useRouter } from "next/navigation";
import styles from "./home.module.scss";
import LibraryShowcase from "../library-howcase/library-showcase";
import Heatmap from "../heatMap/heatMap";

//art-mastery-hub

const Home = () => {
  const router = useRouter();

  // const handleClick = () => {
  //   router.push("/quick-draw");
  // };

  // const handleContactusClick = () => {
  //   router.push("/contactUs");
  // };

  // const handleAboutusClick = () => {
  //   router.push("./aboutus");
  // };
  // const handleLoginClick = () => {
  //   router.push("./login");
  // };
  // const handleResetClick = () => {
  //   router.push("./password-reset");
  // };


  return (
    <main>
      <div className={styles.homeContainer}>
        <div className={styles.homeBanner}>
          <Carousel arrows infinite={true} autoplay autoplaySpeed={5000}>
            <div>
              <h3
                style={{
                  height: "500px",
                  background: "rgb(193, 217, 211)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                1
              </h3>
            </div>
            <div>
              <h3
                style={{
                  height: "500px",
                  background: "rgb(193, 217, 211)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                2
              </h3>
            </div>
          </Carousel>
        </div>
        <div>
          <LibraryShowcase/>
        </div>
        <Heatmap/>
      </div>
    </main>
  );
};
export default Home;
