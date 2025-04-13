"use client";

import { useRouter } from "next/navigation";
import ConfigureCard from "./configureCard/ConfigureCard";
import { Button, Col, Row } from "antd";
import styles from "./configureTimerDetail.module.scss";
import {
  appModuleSettings,
  libraryModuleSettings,
  timerModuleSettings,
} from "./configureTimerDetail.helper";
import { useState } from "react";

const ConfigureTimerDetail = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/quick-draw/slideshow");
  };

  const [configuration, setConfiguration] = useState({
    appModule: {},
    libraryModule: {},
    timerModule: {},
  });

  console.log("testing configuration", configuration);

  return (
    <div className={styles.timerConfigContainer}>
      <h1 style={{textAlign:"center"}}>Settings</h1>
      <Row
        gutter={16}
        className={styles.timerconfigCardContainer}
      >
        <Col span={8}>
          <ConfigureCard settings={appModuleSettings} setConfiguration={setConfiguration} />
        </Col>
        <Col span={8}>
          <ConfigureCard settings={libraryModuleSettings} setConfiguration={setConfiguration} />
        </Col>
        <Col span={8}>
          <ConfigureCard settings={timerModuleSettings} setConfiguration={setConfiguration} />
        </Col>
      </Row>
      <Row style={{justifyContent:"center"}}>
        <Button onClick={handleClick}>click me</Button>
      </Row>
    </div>
  );
};

export default ConfigureTimerDetail;
