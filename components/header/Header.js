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
import { Button, Drawer, Dropdown } from "antd";
import useIsMobile from "@/customHooks/useIsMobile";

const Header = () => {
  const isNavSidebar = useIsMobile(832);
  const [openSidebar, setOpenSidebar] = useState(false);

  const showDrawer = () => {
    setOpenSidebar(true);
  };

  const onClose = () => {
    setOpenSidebar(false);
  };

  const SidebarHeader = () => (
    <div className={styles.sidebarHeader}>
      <span>Menu</span>
      <CloseOutlined onClick={onClose} />
    </div>
  );

  const SidebarContent = () => (
    <div className={styles.navSidebar}>
      {headerNavigation.map((item) => {
        return (
          <div key={item.id} className={styles.navItem}>
            {item?.subNavigation && item?.subNavigation?.length > 0 ? (
              <>
                <Link href="" className={styles.itemTitle}>
                  {item.title}
                </Link>
                <div className={styles.subNav}>
                  {item?.subNavigation?.map((subItem) => (
                    <Link href={subItem.link}>{subItem.display}</Link>
                  ))}
                </div>
              </>
            ) : (
              <>
                {item?.tags?.includes("button") ? (
                  <Button className={styles["navSecondaryBtn"]}>
                    {item.title}
                  </Button>
                ) : (
                  <Link href={item.link} className={styles.navLink}>
                    {item.title}
                  </Link>
                )}
              </>
            )}
          </div>
        );
      })}
    </div>
  );

  const SidebarFooter = () => (
    <div className={styles.sidebarFooter}>
      <div>
        <Link href="/login" className={styles.navLink}>
          Log in
        </Link>
        <span>or</span>
        <Link href="/" className={styles.navLink}>
          sign up
        </Link>
      </div>
      <SearchOutlined />
    </div>
  );

  return (
    <div className={styles.navbarContainer}>
      {isNavSidebar && (
        <>
          <div className={styles.navHamIconContainer} onClick={showDrawer}>
            <MenuOutlined />
          </div>
          <Drawer
            title={<SidebarHeader />}
            onClose={onClose}
            open={openSidebar}
            placement="left"
            closeIcon={false}
            footer={<SidebarFooter />}
            width="325px"
          >
            <SidebarContent />
          </Drawer>
        </>
      )}
      <Link href="/">
        <img src="./assets/logo.png" alt="brand-logo" />
      </Link>
      {!isNavSidebar && (
        <div className={styles.navListContainer}>
          {headerNavigation.map((item) => {
            const items = item?.subNavigation?.map((subItem) => ({
              key: subItem.id,
              label: <Link href={subItem.link}>{subItem.display}</Link>,
            }));
            return (
              <div key={item.id} className={styles.navItem}>
                {item?.subNavigation && item?.subNavigation?.length > 0 ? (
                  <Dropdown menu={{ items }} placement="bottom" arrow>
                    <Link href="" className={styles.navLink}>
                      {item.title}
                    </Link>
                  </Dropdown>
                ) : (
                  <>
                    {item?.tags?.includes("button") ? (
                      <Button className={styles["navSecondaryBtn"]}>
                        {item.title}
                      </Button>
                    ) : (
                      <Link href={item.link} className={styles.navLink}>
                        {item.title}
                      </Link>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      )}
      <div className={styles.navRightContainer}>
        <SearchOutlined />

        {!isNavSidebar && (
          <>
            <Link href="/login" className={styles.navLink}>
              Log in
            </Link>
            <Button className={styles["navSecondaryBtn"]}>Sign up</Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
