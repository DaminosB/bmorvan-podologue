import styles from "./MedicalCenterSection.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

import photo1 from "@/img/medical-center/1.jpeg";
import photo2 from "@/img/medical-center/2.jpg";
import photo3 from "@/img/medical-center/3.jpg";

import Carousel from "@/components/Carousel/Carousel";

const MedicalCenterSection = ({ fullpageApi, data }) => {
  // fullpageApi: Object. The prop given by the ReactFullpageWrapper

  const { clinicName, address } = data;

  const fileArray = [
    {
      photo: photo1,
      caption: "crédit photo : Ouest France",
      alt: "Photo de la Maison Médical du Kerlic, crédit Ouest France",
    },
    {
      photo: photo2,
      alt: "Photo des équipements du cabinet, avec un fauteuil de consultation et un tapis",
    },
    {
      photo: photo3,
      alt: "Photo du bureau dans le cabinet et du fauteuil de consultation",
    },
  ];

  return (
    <div className={`container ${styles.medicalCenterSection}`}>
      <h2>{clinicName}</h2>
      <div>
        <Carousel fileArray={fileArray} />
        <div className={styles.infos}>
          <div>
            <h3>3 structures en un m&ecirc;me espace</h3>
            <p>
              La Maison m&eacute;dicale du Kerlic se trouve au c&oelig;ur du
              P&ocirc;le de sant&eacute; du Kerlic. Ce p&ocirc;le comprend
              &eacute;galement une clinique mutualiste et un centre
              d&apos;imagerie m&eacute;dicale.
            </p>
          </div>
          <div>
            <h3>
              15 sp&eacute;cialit&eacute;s m&eacute;dicales et
              param&eacute;dicales
            </h3>
            <ul>
              <li>Podologie</li>
              <li>Anesth&eacute;sie</li>
              <li>Orthop&eacute;die - Traumatologie</li>
              <li>Ophtalmologie</li>
              <li>Gyn&eacute;cologie &amp; mamaire</li>
              <li>Dentaire &amp; implantologie</li>
              <li>Thoracique &amp; vasculaire</li>
              <li>Rachis, neurochirurgie</li>
              <li>Visc&eacute;ral &amp; digestif</li>
              <li>Urologie</li>
              <li>Gastroent&eacute;rologie</li>
              <li>O.R.L.</li>
              <li>Kin&eacute;sith&eacute;rapie</li>
              <li>Ost&eacute;opathie</li>
              <li>Hypnoth&eacute;rapie</li>
            </ul>
          </div>
          <div>
            <h3>{address}</h3>

            <button onClick={() => fullpageApi.moveTo("appointment")}>
              <FontAwesomeIcon icon={faMapLocationDot} />
              Voir sur la carte
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalCenterSection;
