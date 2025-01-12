"use client";

import React, { useState } from "react";
import styles from "./footer.module.scss";
import Link from "next/link";
import { footerNavigation } from "./footer.helper";
import useIsMobile from "@/customHooks/useIsMobile";
import SvgWrapper from "../svgWrapper/SvgWrapper";

const Footer = () => {
  const isMobile = useIsMobile(481);
  const [visibleIndex, setVisibleIndex] = useState(null);

  const handleToggle = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <div className={styles.footerContainer}>
      <div className={styles.topFooter}>
        {footerNavigation
          .filter((item) => item.tag.includes("footerLink"))
          .map((item, index) => (
            <div key={item.id} className={styles.footerLink}>
              <h3 onClick={() => isMobile && handleToggle(index)}>
                {item.title} {isMobile && "+"}{" "}
              </h3>
              {!isMobile ||
              visibleIndex === index ||
              item.tag.includes("social") ? (
                <ul>
                  {item.links.map((link) => (
                    <li key={link.id}>
                      {item.tag.includes("social") ? (
                        <Link href={link.link}>{link.title}</Link>
                      ) : (
                        <Link href={link.link}>{link.title}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
      </div>
      <div className={styles.bottomFooter}></div>
    </div>
  );
};

export default Footer;
