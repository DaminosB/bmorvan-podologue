import styles from "./HomeSection.module.css";

import {
  faSquarePhone,
  faCalendarPlus,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = ({ fullpageApi, data }) => {
  // fullpageApi: Object. The prop given by the ReactFullpageWrapper

  const {
    name,
    titleText,
    presentationText,
    phoneNumber,
    clinicName,
    address,
  } = data;

  return (
    <div className={`container ${styles.homeSection}`}>
      <div className={styles.titleDiv}>
        <h1>{name}</h1>
        <h3>{titleText}</h3>
        <p>{presentationText}</p>
      </div>
      <div className={styles.optionsDiv}>
        <div>
          <FontAwesomeIcon icon={faSquarePhone} />
          <span>{phoneNumber}</span>
        </div>
        <button
          className={styles.blueBtn}
          onClick={() => fullpageApi.moveTo("appointment")}
        >
          <FontAwesomeIcon icon={faCalendarPlus} />
          Prendre rendez-&#xFEFF;vous
        </button>
        <div>
          <FontAwesomeIcon icon={faLocationDot} />
          <span>
            {clinicName}
            <br />
            {address}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
