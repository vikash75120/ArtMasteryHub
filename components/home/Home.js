"use client";

import { Button } from "antd";
import { useRouter } from "next/navigation";
import styles from "./home.module.scss";

//art-mastery-hub

const Home = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/quick-draw");
  };

  const handleContactusClick = () => {
    router.push("/contactUs");
  };

  const handleAboutusClick = () => {
    router.push("./aboutus");
  };
  const handleLoginClick = () => {
    router.push("./login");
  };
  const handleResetClick = () => {
    router.push("./password-reset");
  };
  return (
    <main>
      <div style={{ height: "50vh" }}>
        <h1 className="font-bold text-black">home page</h1>
        <div className="flex flex-col">
          <div className={styles.customButtonContainer}>
            <Button
              type="default"
              onClick={handleClick}
              className={styles.customButton}
            >
              click me
            </Button>
            <Button type="default" onClick={handleLoginClick}>
              Login
            </Button>
            <div className={styles.customButtonContainer2}>
              <Button type="default" onClick={handleContactusClick}>
                ContactUs
              </Button>
              <Button type="default" onClick={handleAboutusClick}>
                About Us
              </Button>
            </div>
            <Button type="default" onClick={handleResetClick}>
              Reset-Password
            </Button>
          </div>
          <br />
        </div>
      </div>
    </main>
  );
};
export default Home;
