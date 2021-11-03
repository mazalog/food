import React from "react";
import styles from "./articles.module.scss";

export default function Articles({ reverse, children }) {

  return (
    <div
      className={styles.container}
      style={{ direction: reverse ? "rtl" : "" }}
    >
      {
        children.map((item) =>
          <div
            // style={{
            //   position: `${item.props.position !== 1 || item.props.position !== 2 ? 'relative' : 'relative'}`,
            //   top: `${item.props.position !== 1 && item.props.position !== 2 ? '-150px' : '-150px'}`
            // }}
            className={` ${item.props.position % 2 !== 0 ? styles.par : styles.noPar} `}
          >{item}</div>
        )
      }
    </div>
  );
}
