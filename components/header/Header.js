"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  SearchOutlined,
  UserOutlined,
  CloseOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import styles from "./header.module.scss";
import { headerNavigation } from "./header.helper";
import { Button, Dropdown } from "antd";
import useIsMobile from "@/customHooks/useIsMobile";

const Header = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const isNavSidebar = useIsMobile(832);

  const handleSearchClick = () => {
    setSearchVisible(!searchVisible);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <div className={styles.navbarContainer}>
      {isNavSidebar && (
        <div className={styles.navHamIconContainer}>
          <MenuOutlined />
        </div>
      )}
      <Link href="/">
        <img src="./assets/logo.png" alt="brand-logo" />
      </Link>
      {!isNavSidebar && <div className={styles.navListContainer}>
        {headerNavigation.map((item) => {
          const items = item?.subNavigation?.map((subItem) => ({
            key: subItem.id,
            label: <Link href={subItem.link}>{subItem.display}</Link>,
          }));
          return (
            <div key={item.id} className={styles.navItem}>
              {item?.subNavigation && item?.subNavigation?.length > 0 ? (
                <Dropdown menu={{ items }} placement="bottom" arrow>
                  <Link href="" className={styles.navLink}>{item.title}</Link>
                </Dropdown>
              ) : (
                <>
                  {item?.tags?.includes("button") ? (
                    <Button className={styles['navSecondaryBtn']}>{item.title}</Button>
                  ) : (
                    <Link href={item.link} className={styles.navLink}>{item.title}</Link>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>}
      <div className={styles.navRightContainer}>
        <Link href="/" className={styles.navLink}>Log in</Link>
        <Button className={styles['navSecondaryBtn']}>Sign up</Button>
      </div>
    </div>
  );
};

export default Header;
