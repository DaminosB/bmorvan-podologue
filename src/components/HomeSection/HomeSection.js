import styles from "./HomeSection.module.css";

import {
  faSquarePhone,
  faCalendarPlus,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = ({ fullpageApi, data }) => {
  // fullpageApi: Object. The prop given by the ReactFullpageWrapper

  const { name, titleText, phoneNumber, clinicName, address } = data;

  const phoneNumberToDisplay = phoneNumber
    .split("")
    .map((char, i) => (i % 2 === 0 && i !== 0 ? " " + char : char))
    .join("");

  return (
    <div className={`container ${styles.homeSection}`}>
      <div className={styles.titleDiv}>
        <h1>{name}</h1>
        <h3>{titleText}</h3>
        <p>
          Passionn&eacute; des sports d&apos;ultra-endurance ainsi que des
          activit&eacute;s outdoor (trailrunning, randonn&eacute;e, cyclisme sur
          route, vtt, wakeboard, wing foil, ski…), cette pratique m&apos;a
          amen&eacute; &agrave; effectuer des formations
          sp&eacute;cialis&eacute;es pour adapter le m&eacute;tier de podologue
          aux exigences et sp&eacute;cificit&eacute;s de la pratique sportive de
          tous niveaux.
        </p>
        <p>
          Par ailleurs, adh&eacute;rent de l&apos;association Podoxyg&egrave;ne,
          je travaille r&eacute;guli&egrave;rement pour des trails nationaux ou
          internationaux (&eacute;quipes m&eacute;dicales UTMB, HMDS,
          TREK&apos;In&apos;Gazelles…).
        </p>
        <p>
          Je serai ravi de pouvoir vous soigner (soins de p&eacute;dicurie,
          bilan podologique) mais aussi de vous apporter mon expertise dans le
          cadre de la pratique de vos activit&eacute;s physiques et sportives.
          Je peux &eacute;galement adapter votre mat&eacute;riel sportif en
          fonction de vos sp&eacute;cificit&eacute;s physiques (bikefiting,
          bootfiting).
        </p>
      </div>
      <div className={styles.optionsDiv}>
        <div>
          <FontAwesomeIcon icon={faSquarePhone} />
          <span>
            <a href={`tel:${phoneNumber}`}>{phoneNumberToDisplay}</a>
          </span>
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
