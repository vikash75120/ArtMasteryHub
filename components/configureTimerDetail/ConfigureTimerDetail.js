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

const ConfigureTimerDetail = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/quick-draw/show");
  };

  return (
    <div className={styles.timerConfigContainer}>
      <h1 style={{textAlign:"center"}}>Settings</h1>
      <Row
        gutter={16}
        className={styles.timerconfigCardContainer}
        class={styles.timerConfigRow}
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
