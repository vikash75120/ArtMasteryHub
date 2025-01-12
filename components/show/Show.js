"use client";
import React, { useEffect, useRef, useState } from "react";
import "./show.scss";
import PanZoom from "react-easy-panzoom";
import { useRouter } from "next/navigation";
import { deviantartApi, unsplashApi } from "../api";
import useCustomTimer from "../../customHooks/useCustomTimer";
import {
  LeftCircleOutlined,
  PauseCircleOutlined,
  PlayCircleOutlined,
  RightCircleOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
  RedoOutlined
} from "@ant-design/icons";

const Show = () => {
  const panZoomRef = useRef(null);
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [unsplashImages, setUnsplashImages] = useState([]);
  const { timeLeft, isRunning, startTimer, pauseTimer, resumeTimer, resetTimer } = useCustomTimer();
  const [imagesList, setImagesList] = useState([
    "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    "https://images.unsplash.com/photo-1587586062323-836089e60d52?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sb3Vyc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
    "https://castfromclay.co.uk/wp-content/uploads/image-asset-1-1024x683.jpeg",
    "https://www.godaddy.com/resources/wp-content/uploads/social-media-images-woman-taking-photo.jpg?size=768x0",
    "https://i0.wp.com/picjumbo.com/wp-content/uploads/breathtaking-bali-nature-free-photo.jpg?w=600&quality=80",
    "https://i0.wp.com/picjumbo.com/wp-content/uploads/gorgeous-sunset-over-the-sea-free-image.jpeg?h=800&quality=80",
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await unsplashApi();
    };
    fetchData();

    const deviantFetch = async() =>{
      const data = await deviantartApi();
      setUnsplashImages(data.results);
    }
    deviantFetch();
  }, []);

  useEffect(() => {
    if (!isRunning) {
      startTimer();
    }
  }, [timeLeft]);

  const getImageToDisplay = (displayType) => {
    if (displayType === "next") {
      setCurrentIndex((prev) => prev + 1)
    } else if (displayType === "prev") {
      setCurrentIndex((prev) => prev - 1)
    }
    resetTimer();
  }
  
  const handleImageOnLoad = () =>{
    panZoomRef.current.autoCenter();
  }

  useEffect(() => {
    if (timeLeft === "00:00:00") {
      setCurrentIndex((prev) => prev + 1)
    }
  }, [timeLeft])

  const handleZoomMethod = (zoomType) => {
    if (panZoomRef.current) {
      switch (zoomType) {
        case "zoomIn":
          panZoomRef.current.zoomIn();
          break;
        case "zoomOut":
          panZoomRef.current.zoomOut();
          break;
        case "reset":
          panZoomRef.current.reset();
          panZoomRef.current.autoCenter();
          break;
        default:
          console.warn("Unknown zoom type:", zoomType);
      }
    }
  };


  return (
    <div id="quick_draw">
      <section className="full-screen-section fullscreen overflow-hidden quickdrav-full-section">
        <div className="full-top-timer full-top-timer-block full-top-position-top">
          <span
            id="timer"
            className="quickdraw-timer"
            style={{ display: "block" }}
          >
            {timeLeft}
          </span>
          <img
            src="https://springfieldeducation.org/wp-content/uploads/2018/09/wallpaper-wiki-plain-blue-background-wallpaper-hd-pic-wpe006182.jpg"
            alt="Quickdraw"
            style={{
              height: "100%",
              width: "60%",
              margin: "0 20% 0 20%",
              borderRadius: "0 0 10px 10px",
            }}
          />
        </div>
        <PanZoom
          ref={panZoomRef}
          autoCenter
          zoomSpeed={0.5}
          autoCenterZoomLevel={1}
          minZoom={0.5}
          maxZoom={3}
          onStateChange={() => {
          }}
          style={{
            minWidth: "100%",
            maxHeight: "calc(-59px + 100vh)",
            height: "calc(-59px + 100vh)",
            display: "flex",
          }}
        >
          <img
            src={
              unsplashImages.length === 0 ? imagesList[currentIndex % 6 > 0 ? currentIndex % 6 : -(currentIndex % 6)] : unsplashImages[
                currentIndex % 24 > 0 ? currentIndex % 24 : -(currentIndex % 24)
              ]?.preview?.src
              //urls?.full
            }
            onLoad={handleImageOnLoad}
            alt="current image"
            style={{ width: "100%", height: "100%" }}
          />
        </PanZoom>
        <div className="full-bottom">
          <div className="bottom-slider-arrows-item d-flex align-items-center play-pause-icon-container">
            <LeftCircleOutlined onClick={()=>getImageToDisplay("prev")} style={{ fontSize: "40px" }} />
            <div className="play-pause-icon">
              {isRunning ? <div onClick={pauseTimer}><PauseCircleOutlined style={{ fontSize: "40px" }} /></div> :
                <div onClick={resumeTimer} ><PlayCircleOutlined style={{ fontSize: "40px" }} /></div>}
            </div>
            <RightCircleOutlined onClick={()=>getImageToDisplay("next")} style={{ fontSize: "40px" }} />
          </div>
          <div className="scale-icon-block">
            <span
              className="scale-icon-plus"
              data-tooltip="Zoom in"
              onClick={() => handleZoomMethod("zoomIn")}
            >
              <ZoomInOutlined style={{ fontSize: "25px" }} />
            </span>
            <div className="scale-default-zoom d-flex flex-column align-items-center">
              <span>SCALE</span>
              <span
                className="motion-icon"
                data-tooltip="Reset zoom"
                data-flow="up"
                onClick={() => handleZoomMethod("reset")}
              >
                <RedoOutlined style={{ fontSize: "15px" }} />
              </span>
            </div>
            <span
              className="scale-icon-minus"
              data-tooltip="Zoom out"
              onClick={() => handleZoomMethod("zoomOut")}
            >
              <ZoomOutOutlined style={{ fontSize: "25px" }} />
            </span>
          </div>
          <div className="exit-full-screen-icon-block">
            <picture onClick={() => router.push("/")}>
              <img
                srcSet="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png"
                alt="EXIT FULL SCREEN"
              />
            </picture>
            <span>EXIT FULL SCREEN</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Show;