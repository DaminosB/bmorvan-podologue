import styles from "./AppointmentSection.module.css";

import {
  faSquarePhone,
  faArrowUpRightFromSquare,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AppointmentSection = ({ data }) => {
  const { name, phoneNumber, clinicName, address } = data;

  return (
    <div className={`container ${styles.appointmentSection}`}>
      <div>
        <a
          href="https://www.doctolib.fr/pedicure-podologue/landivisiau/benjamin-morvan"
          target="_blank"
        >
          Si la page ne s&apos;affiche pas correctement, cliquez ici&nbsp;
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
        <iframe
          title="Réservation Doctolib"
          loading="lazy"
          // src="https://partners.doctolib.fr/pedicure-podologue/landivisiau/benjamin-morvan"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.contactDetails}>
        <div>
          <h3>{name}</h3>
          <span>Podologie - pédicurie</span>
          <span>DU Podologie, Biom&eacute;canique et Sport</span>
        </div>
        <div>
          <div>
            <FontAwesomeIcon icon={faSquarePhone} />
            <span>{phoneNumber}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>
              {clinicName}
              <br />
              {address}
            </span>
          </div>
        </div>
        <iframe
          title="Plan Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2668.801543385479!2d-4.074876500000001!3d48.0175439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x481129c2749fffef%3A0xf781e96d5a43e61b!2s9%20Chem.%20de%20Penhoat%2C%2029000%20Quimper!5e0!3m2!1sfr!2sfr!4v1702638375701!5m2!1sfr!2sfr"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default AppointmentSection;
