import styles from "./Footer.module.css";

import { useState, useRef, useEffect } from "react";

import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

import orthopedics from "@/img/services-icons/orthopedics.png";
import insoles from "@/img/services-icons/insoles.png";
import footBandage from "@/img/services-icons/foot-bandage.png";
import scissors from "@/img/services-icons/scissors.png";
import nail from "@/img/services-icons/nail.png";
import plantarWart from "@/img/services-icons/plantar-wart.png";
import plasteredFoot from "@/img/services-icons/plastered-foot.png";
import bicycleRider from "@/img/services-icons/bicycle-rider.png";
import skiBoot from "@/img/services-icons/ski-boot.png";

import homeBanner from "@/img/generals/home-banner.jpeg";
import servicesBanner from "@/img/generals/services-banner.jpg";
import medicalCenterBanner from "@/img/generals/medical-center-banner.jpg";
import appointmentBanner from "@/img/generals/appointment-banner.jpg";
import contactBanner from "@/img/generals/contact-banner.jpg";

const Footer = ({ fullpageApiState }) => {
  const [footerIsShown, setFooterIsShown] = useState(false);

  const footerRef = useRef(null);
  const buttonRef = useRef(null);

  const activeSectionWhenFooterIsShown = useRef(null);

  const showLegalMentions = () => {
    activeSectionWhenFooterIsShown.current =
      fullpageApiState.getActiveSection().anchor;
    setFooterIsShown(true);
    requestAnimationFrame(() => (footerRef.current.style.top = "0px"));
    footerRef.current.style.overflowY = "scroll";

    buttonRef.current.style.top = "0px";
    buttonRef.current.style.bottom = "initial";
    setTimeout(() => (buttonRef.current.style.position = "fixed"), 500);
  };

  const hideLegalMentions = () => {
    console.log(activeSectionWhenFooterIsShown.current);
    fullpageApiState.silentMoveTo(activeSectionWhenFooterIsShown.current);
    setFooterIsShown(false);
    requestAnimationFrame(() => (footerRef.current.style.top = "100%"));
    footerRef.current.style.overflowY = "visible";

    buttonRef.current.style.bottom = "100%";
    buttonRef.current.style.top = "initial";
    buttonRef.current.style.position = "absolute";
  };

  return (
    <footer ref={footerRef} className={styles.footer}>
      <button
        className={footerIsShown ? styles.topBtn : styles.bottomBtn}
        ref={buttonRef}
        onClick={footerIsShown ? hideLegalMentions : showLegalMentions}
      >
        <span>
          {footerIsShown ? "Masquer " : "Afficher "}
          les mentions l&eacute;gales
        </span>
        <FontAwesomeIcon icon={footerIsShown ? faChevronDown : faChevronUp} />
      </button>
      <div className="container">
        <div className={styles.navContainer}>
          <nav>
            <h3>Navigation</h3>
            <ul>
              <li>
                <a href="#id">Identit&eacute;</a>
              </li>
              <li>
                <a href="#authorizations">Autorisations</a>
              </li>
              <li>
                <a href="#host">Hébergeur</a>
              </li>
              <li>
                <a href="#credits">Crédits</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h2>Mentions Légales</h2>
          <div>
            <h3 id="id">Identit&eacute;</h3>
            <table>
              <tbody>
                <tr>
                  <td>Nom du praticien</td>
                  <td>Benjamin Morvan</td>
                </tr>
                <tr>
                  <td>Adresse d&apos;exercice</td>
                  <td>9 chemin de Penhoat 29000 Quimper</td>
                </tr>
                <tr>
                  <td>Inscription au RCS</td>
                  <td>06/09/2021</td>
                </tr>
                <tr>
                  <td>SIRET</td>
                  <td>90114119200020</td>
                </tr>
                <tr>
                  <td>Identifiant TVA</td>
                  <td>FR26901141192</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>morvan.podologue@gmail.com</td>
                </tr>
                <tr>
                  <td>Téléphone</td>
                  <td>02.57.23.06.34</td>
                </tr>
              </tbody>
            </table>
            <h3 id="authorizations">Autorisations</h3>
            <table>
              <tbody>
                <tr>
                  <td>Identifiant RPPS</td>
                  <td>10106041071</td>
                </tr>
              </tbody>
            </table>
            <h3 id="host">Hébergeur</h3>
            <table>
              <tbody>
                <tr>
                  <td>Identité de l&apos;hébergeur</td>
                  <td>Vercel Inc.</td>
                </tr>
                <tr>
                  <td>Adresse de l&apos;hébergeur</td>
                  <td>340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.</td>
                </tr>
              </tbody>
            </table>
            <h3 id="credits">Crédits</h3>
            <p>
              Ce site utilise la librairie{" "}
              <a href="https://alvarotrigo.com/fullPage/">
                fullPage.js par Alvaro Trigo{" "}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </p>
            <h4>Conception, r&eacute;alisation, design</h4>
            <p>Damien Bourcheix</p>
            <h4>Iconographie</h4>
            <table>
              <thead>
                <tr>
                  <td>Icone</td>
                  <td>Cr&eacute;ateur</td>
                  <td>Plateforme</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Image src={orthopedics} />
                  </td>
                  <td>
                    <a
                      target="_blank"
                      href="https://www.flaticon.com/fr/auteurs/bsd"
                    >
                      bsd <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="http://www.flaticon.com/fr">
                      Flaticon{" "}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Image src={insoles} />
                  </td>
                  <td>
                    <a
                      target="_blank"
                      href="https://www.flaticon.com/authors/freepik"
                    >
                      Freepik{" "}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="http://www.flaticon.com/fr">
                      Flaticon{" "}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Image src={footBandage} />
                  </td>
                  <td>
                    <a
                      target="_blank"
                      href="https://www.flaticon.com/authors/freepik"
                    >
                      Freepik{" "}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="http://www.flaticon.com/fr">
                      Flaticon{" "}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Image src={scissors} />
                  </td>
                  <td>
                    <a
                      target="_blank"
                      href="https://www.flaticon.com/authors/those-icons"
                    >
                      Those Icons{" "}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="http://www.flaticon.com/fr">
                      Flaticon{" "}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Image src={nail} />
                  </td>
                  <td>
                    <a
                      target="_blank"
                      href="https://www.flaticon.com/authors/fjstudio"
                    >
                      fjstudio{" "}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="http://www.flaticon.com/fr">
                      Flaticon{" "}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Image src={plantarWart} />
                  </td>
                  <td>
                    <a
                      target="_blank"
                      href="https://www.flaticon.com/authors/freepik"
                    >
                      Freepik{" "}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="http://www.flaticon.com/fr">
                      Flaticon{" "}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Image src={plasteredFoot} />
                  </td>
                  <td>
                    <a
                      target="_blank"
                      href="https://www.flaticon.com/fr/auteurs/bsd"
                    >
                      bsd <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="http://www.flaticon.com/fr">
                      Flaticon{" "}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Image src={bicycleRider} />
                  </td>
                  <td>
                    <a
                      target="_blank"
                      href="https://www.flaticon.com/authors/freepik"
                    >
                      Freepik{" "}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="http://www.flaticon.com/fr">
                      Flaticon{" "}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Image src={skiBoot} />
                  </td>
                  <td>
                    <a
                      target="_blank"
                      href="https://www.flaticon.com/authors/those-icons"
                    >
                      Those Icons{" "}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="http://www.flaticon.com/fr">
                      Flaticon{" "}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <h4>Photos</h4>
            <table>
              <thead>
                <tr>
                  <td>Photo</td>
                  <td>Photographe</td>
                  <td>Plateforme</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Image src={homeBanner} />
                  </td>
                  <td>
                    {" "}
                    <a
                      target="_blank"
                      href="https://www.rawpixel.com/image/5947937/free-public-domain-cc0-photo"
                    >
                      RawPixel{" "}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </td>
                  <td>
                    <a
                      target="_blank"
                      href="https://unsplash.com/fr/photos/personne-portant-des-baskets-bleues-et-blanches-8Tx1FOj8xJc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                    >
                      RawPixel{" "}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Image src={servicesBanner} />
                  </td>
                  <td>
                    {" "}
                    <a
                      target="_blank"
                      href="https://unsplash.com/fr/@dulceylima?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                    >
                      Dulcey Lima{" "}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </td>
                  <td>
                    <a
                      target="_blank"
                      href="https://unsplash.com/fr/photos/personne-portant-des-baskets-bleues-et-blanches-8Tx1FOj8xJc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                    >
                      Freepik{" "}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Image src={medicalCenterBanner} />
                  </td>
                  <td>
                    <a
                      target="_blank"
                      href="https://www.freepik.com/free-photo/nurse-with-patient-osteopathy-session_19957663.htm#query=foot%20care&position=49&from_view=search&track=ais&uuid=dd2b845c-1d2f-4d37-8258-00e2f9932106"
                    >
                      Freepik{" "}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </td>
                  <td>
                    {" "}
                    <a target="_blank" href="https://www.freepik.com/">
                      Freepik{" "}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Image src={appointmentBanner} />
                  </td>
                  <td>
                    <a
                      target="_blank"
                      href="https://fr.freepik.com/photos-gratuite/vue-face-du-therapeute-osteopathe-masculin-controle-orteils-patiente_12346944.htm"
                    >
                      Freepik{" "}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </td>
                  <td>
                    {" "}
                    <a target="_blank" href="https://www.freepik.com/">
                      Freepik{" "}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Image src={contactBanner} />
                  </td>
                  <td>
                    <a
                      target="_blank"
                      href="https://www.freepik.com/free-photo/osteopathist-treating-patient-his-feet_11403561.htm#query=foot%20care&position=38&from_view=search&track=ais&uuid=f1277a93-f378-4916-a8e4-98cadb699dfb#position=38&query=foot%20care"
                    >
                      Freepik{" "}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </td>
                  <td>
                    {" "}
                    <a target="_blank" href="https://www.freepik.com/">
                      Freepik{" "}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
