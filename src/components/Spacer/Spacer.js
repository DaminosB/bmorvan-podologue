import styles from "./Spacer.module.css";

import { useRef, useEffect } from "react";

// This component takes the height of the header so it doesn't overlap with the page's content

const Spacer = ({ height }) => {
  // height: Number. Pretty self explanatory

  const spacerRef = useRef(null);

  // The height of the component is defined in the useEffect
  useEffect(() => {
    spacerRef.current.style.height = `${height}px`;
  }, [height]);

  return <div className={styles.spacer} ref={spacerRef}></div>;
};

export default Spacer;
