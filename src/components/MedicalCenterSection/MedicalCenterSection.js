import styles from "./MedicalCenterSection.module.css";

import { useEffect } from "react";

import { useInView } from "react-intersection-observer";
import Carousel from "@/components/Carousel/Carousel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

import photo1 from "@/img/medical-center/1.jpeg";
import photo2 from "@/img/medical-center/2.jpeg";
import photo3 from "@/img/medical-center/3.jpeg";

const MedicalCenterSection = ({
  setActiveSection,
  sectionName,
  fullpageApi,
}) => {
  // setActiveSection: Function. Is called when the component is in view to update the activeSection state
  // sectionName: String. The name of the section
  // fullpageApi: Object. The prop given by the ReactFullpageWrapper

  const fileArray = [
    { photo: photo1, caption: "crédit photo : Ouest France" },
    { photo: photo2, caption: "crédit photo : Ouest France" },
    { photo: photo3, caption: "crédit photo : Ouest France" },
  ];

  // The inView hook has a inView key which is a boolean that changes value from false to true when the ref appears on the user's screen
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    // Everytime the component is inView, the activeSection is updated
    if (inView && fullpageApi.getActiveSection().anchor === sectionName) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection]);

  return (
    <div className={`container ${styles.medicalCenterSection}`} ref={ref}>
      <h2>La Maison m&eacute;dicale du Kerlic</h2>
      <div>
        <Carousel fileArray={fileArray} />
        <div className={styles.infos}>
          <div>
            <h3>3 structures en un m&ecirc;me espace</h3>
            <p>
              La Maison m&eacute;dicale du Kerlic se trouve au c&oelig;ur du
              P&ocirc;le de sant&eacute; du Kerlic. Ce p&ocirc;le comprend
              &eacute;galement une clinique mutualiste et un centre d'imagerie
              m&eacute;dicale.
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
            <h3>
              9&nbsp;chemin de&nbsp;Penhoat
              <br />
              29000&nbsp;Quimper
            </h3>

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