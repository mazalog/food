import React from "react";
import styles from "./style.module.scss";

import { useStore } from "../../hooks/store.hook";


export default function PhotoShown({ categoriePage, meals, openModal }) {

  const index = useStore((state) => state.index);
  return (
    <>
      {meals.map((item, i) => {
        return (
          <>
            <img
              key={i}
              src={categoriePage ? `.${item.url}` : item.url}
              className={`${styles.photoShown} ${((index % meals.length) + meals.length) % meals.length === i && styles.startAnimation
                }`}
              alt="spin"
              loading="lazy"
              style={{ opacity: ((index % meals.length) + meals.length) % meals.length === i ? 1 : 0 }}
            // onClick={() => openModal({ alt: '', image: categoriePage ? `.${item.url}` : item.url })}
            />
          </>
        );
      })}
    </>
  );
}
