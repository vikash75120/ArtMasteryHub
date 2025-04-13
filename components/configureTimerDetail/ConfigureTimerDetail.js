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

  return (
    <div className={styles.timerConfigContainer}>
      <h1 style={{textAlign:"center"}}>Settings</h1>
      <Row
        gutter={16}
        className={styles.timerconfigCardContainer}
      >
        <Col span={8}>
          <ConfigureCard settings={appModuleSettings} />
        </Col>
        <Col span={8}>
          <ConfigureCard settings={libraryModuleSettings} />
        </Col>
        <Col span={8}>
          <ConfigureCard settings={timerModuleSettings} />
        </Col>
      </Row>
      <Row style={{justifyContent:"center"}}>
        <Button onClick={handleClick}>click me</Button>
      </Row>
    </div>
  );
};

export default ConfigureTimerDetail;
