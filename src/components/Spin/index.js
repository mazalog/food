import React, { useState } from "react";
import styles from "./style.module.scss";
import Button from "./spin_button";
import { useStore } from "../../hooks/store.hook";
import PhotoShown from "./photo_show";
import Modal from '../Modal'


export default function Spin({ spinImage, meals, categoriePage, home, noSpin, nameCate }) {
  const index = useStore((state) => state.index)

  const [modal, setModal] = useState(false)

  const openModal = (d) => {
    setModal(d)
  }

  const closeModal = () => {
    setModal(false)
  }

  // const [imageIsLoading, setImageisLoading] = useState(true)

  return (
    <>
      <div
        className={styles.container}
        style={{
          backgroundColor: meals[((index % meals.length) + meals.length) % meals.length].backgroundColor,
        }}
      >
        {!noSpin && <div className={styles.titleCategorie}>
          <h4>{nameCate}</h4>
        </div>}

        <div style={{ display: 'none' }}>
          <img className={styles.logoinSpin} src="https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/image-logo.png?alt=media&token=a10f3107-8b6f-40f6-aa7c-c4213608cf44" alt="Logotipo CaracasBurger" />
        </div>
        {
          home ? <></> :
            <>
              {
                spinImage ? <img
                  src={spinImage}
                  className={styles.spinImage}
                  alt=""
                  // onLoad={() => setImageisLoading(false)}
                  loading="lazy"
                  style={{ transform: `rotate(${index * 36}deg)` }}
                /> : <></>
              }
            </>

        }

      </div>

      <PhotoShown meals={meals} categoriePage={categoriePage} openModal={openModal} />
      {
        !noSpin && <Button />
      }

      <div>
        {modal ? <Modal onClose={closeModal}>
          <img alt={modal.name} src={modal.image} width="100%" />
        </Modal> : <></>}
      </div>
    </>
  );
}
