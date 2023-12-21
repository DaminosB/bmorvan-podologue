import styles from "./HomeSection.module.css";

import {
  faSquarePhone,
  faCalendarPlus,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = ({ fullpageApi }) => {
  // fullpageApi: Object. The prop given by the ReactFullpageWrapper

  const moveToSection = (sectionName) => {
    fullpageApi.moveTo(sectionName);
  };

  return (
    <div className={`container ${styles.homeSection}`}>
      <div className={styles.titleDiv}>
        <h1>
          Benjamin Morvan P&eacute;dicure-podologue
          dipl&ocirc;m&eacute;&nbsp;d&apos;&Eacute;tat &agrave; Quimper
        </h1>
        <p>
          Ma passion pour les sports outdoors m’a amen&eacute; &agrave;
          effectuer diverses formations dans l’objectif d’accroitre mes
          connaissances et comp&eacute;tences en lien avec la prise en soin des
          pratiquants.
        </p>
        <p>
          L’ensemble de ces formations m’ont &eacute;galement permis de
          d&eacute;velopper un int&eacute;rêt important pour l’analyse et la
          compr&eacute;hension du mouvement humain. Pratiquant des sports
          d’ultra-endurance ainsi que des activit&eacute;s outdoor tel que le
          trailrunning, le cyclisme sur route, le vtt, le ski en hiver … Je
          serais ravi de pouvoir &eacute;changer avec vous sur votre pratique et
          vos usages. Ces pratiques sportives m’amènent &eacute;galement
          &agrave; travailler r&eacute;gulièrement au sein d’&eacute;quipes
          m&eacute;dicales sur des trails nationaux ou internationaux (UTMB,
          HMDS, TREK’In’Gazelles…)
        </p>
      </div>
      <div className={styles.optionsDiv}>
        <div>
          <FontAwesomeIcon icon={faSquarePhone} />
          <span>02.57.23.06.34</span>
        </div>
        <button
          className={styles.blueBtn}
          onClick={() => moveToSection("appointment")}
        >
          <FontAwesomeIcon icon={faCalendarPlus} />
          Prendre rendez-&#xFEFF;vous
        </button>
        <div>
          <FontAwesomeIcon icon={faLocationDot} />
          <span>
            Maison&nbsp;m&eacute;dicale de&nbsp;Kerlic
            9&nbsp;chemin&nbsp;de&nbsp;Penhoat 29000&nbsp;Quimper
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
