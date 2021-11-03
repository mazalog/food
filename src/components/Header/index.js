import React, { useState } from "react";
import styles from "./header.module.scss";
import menu from "../../assets/images/menu.svg";
import close from "../../assets/images/close.svg";
import ContentCart from "../ContentCart";
import ListCategories from "../ListCategories";
import { useLocation } from "wouter";
import ArrowLefIcon from "../Icons/ArrowLeft";

export default function Header({ displayCart, setDisplayCart, noLogo }) {

  const [display, setDisplay] = useState({})

  const [, navigate] = useLocation()

  return (
    <header className={styles.containerHeader}>


      <div
        className={styles.navButton}
        onClick={() => setDisplay({ transform: "translate3d(0vw, 0, 0)" })}
      >
        <img src={menu} className={styles.menu} alt="menu" />
      </div>

      <div className={styles.navMd}>
        {
          !noLogo && <div
            className={styles.navButtonRight}
            onClick={() => navigate('/')}
          >
            <img src="https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/image-logo.png?alt=media&token=a10f3107-8b6f-40f6-aa7c-c4213608cf44" className={styles.menu} alt="cart" />
          </div>
        }
        {
          noLogo && <div
            className={styles.navButtonRight}
            onClick={() => window.history.back()}
            style={{ border: '1px solid  #7d5399', borderRadius: '15px', padding: '6px' }}
          >
            <ArrowLefIcon />
          </div>
        }

        <div className={styles.container} style={display}>
          <div className={styles.containerImg} onClick={() => navigate('/')}>
            <img src="https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/image-logo.png?alt=media&token=a10f3107-8b6f-40f6-aa7c-c4213608cf44" className={styles.logo} alt="logo" />
          </div>
          <div className={styles.headerItems}>
            <ListCategories setDisplay={setDisplay} />
          </div>
          <div
            className={styles.closeButton}
            onClick={() => setDisplay({ transform: "translate3d(-100vw, 0, 0)" })}
          >
            <img src={close} className={styles.close} alt="close" />
          </div>
        </div>
      </div>

      <div className={styles.containerCart} style={displayCart}>
        <div >
          <img src="https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/image-logo.png?alt=media&token=a10f3107-8b6f-40f6-aa7c-c4213608cf44" className={styles.logo} alt="logo" />
        </div>
        <div className={styles.headerItems}>
          <ContentCart />
        </div>
        <div
          className={styles.closeButton}
          onClick={() => setDisplayCart({ transform: "translate3d(0,120vh, 0)" })}
        >
          <img src={close} className={styles.close} alt="close" />
        </div>
      </div>

    </header >
  );
}
