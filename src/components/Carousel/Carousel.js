import Image from "next/image";
import styles from "./Carousel.module.css";

import { useState, useRef } from "react";

const Carousel = ({ fileArray }) => {
  // fileArray: Array of objects. Two keys : caption and image

  // The active index is the the picture we want to display in big
  const [activeIndex, setActiveIndex] = useState(0);

  //   This will be paired with the Image component to animate it's appearance
  const activePhotoRef = useRef(null);

  //   A click on the picture's thumbnail makes it appear in the big box.
  const changeActiveImage = (index) => {
    // index: Number. The index in the .map function that displays the images

    // We first check if the user hasn't clicked on the already active photo
    if (index !== activeIndex) {
      // We make the old image disappear in a fading
      activePhotoRef.current.style.opacity = 0;

      //   We wait for the animation to be over
      setTimeout(() => {
        // Then we change the image
        setActiveIndex(index);

        // And we make the new picture appear in a fading
        requestAnimationFrame(() => (activePhotoRef.current.style.opacity = 1));
      }, 250);
    }
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.activePhoto}>
        <Image
          src={fileArray[activeIndex].photo}
          ref={activePhotoRef}
          alt={"Photo de la Maison Médical du Kerlic, crédit Ouest France"}
        />
        <span className={styles.imageCaption}>
          {fileArray[activeIndex].caption}
        </span>
      </div>
      <div className={styles.photoThumbnails}>
        {fileArray.map((photo, i) => {
          return (
            <Image
              key={i}
              src={photo.photo}
              alt={"Photo de la Maison Médical du Kerlic, crédit Ouest France"}
              className={activeIndex === i ? styles.opaqueImg : ""}
              onClick={() => changeActiveImage(i)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
