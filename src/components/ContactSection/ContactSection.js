import styles from "./ContactSection.module.css";

import { useEffect, useState } from "react";

import Image from "next/image";

import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faLocationDot,
  faSquarePhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";

import profilePicture from "@/img/generals/profile-picture.webp";

const ContactSection = ({ data }) => {
  const { name, titleText, phoneNumber, clinicName, address } = data;

  const [username, setUsername] = useState({
    value: "",
    isValid: true,
  });
  const [email, setEmail] = useState({
    value: "",
    isValid: true,
  });
  const [telephone, setTelephone] = useState({
    value: "",
    isValid: true,
  });
  const [subject, setSubject] = useState({
    value: "",
    isValid: true,
  });
  const [message, setMessage] = useState({
    value: "",
    isValid: true,
  });

  const [formIsDisabled, setFormIsDisabled] = useState(false);

  const [confirmationMessage, setConfirmationMessage] = useState({
    formIsSent: undefined,
    message: "",
  });

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const telephoneRegex = /^\d{10}$/;
  const nonEmptyStringRegex = /\S/;

  const inputChange = (value, func) => {
    func((prev) => {
      const newObj = { ...prev };
      newObj.value = value;
      return newObj;
    });
  };

  const inputVerification = (regex, func, spacesAllowed) => {
    func((prev) => {
      const newObj = { ...prev };
      if (!spacesAllowed) newObj.value = newObj.value.replaceAll(" ", "");
      newObj.isValid = regex.test(newObj.value);
      return newObj;
    });
  };

  const submitMessage = async (e) => {
    e.preventDefault();

    setFormIsDisabled(true);

    inputVerification(nonEmptyStringRegex, setUsername, true);
    inputVerification(emailRegex, setEmail);
    inputVerification(telephoneRegex, setTelephone);
    inputVerification(nonEmptyStringRegex, setSubject, true);
    inputVerification(nonEmptyStringRegex, setMessage, true);

    try {
      if (
        username.isValid ||
        email.isValid ||
        telephone.isValid ||
        message.isValid
      ) {
        const { data } = await axios.post("/api/", {
          name: username.value,
          email: email.value,
          telephone: telephone.value,
          message: message.value,
          subject: subject.value,
        });

        const resetValue = (func) => {
          func((prev) => {
            const newObj = { ...prev };
            newObj.value = "";
            return newObj;
          });
        };

        resetValue(setUsername);
        resetValue(setEmail);
        resetValue(setTelephone);
        resetValue(setSubject);
        resetValue(setMessage);

        setConfirmationMessage((prev) => {
          const newObj = { ...prev };
          newObj.formIsSent = true;
          newObj.message = "Votre message a bien été envoyé.";
          return newObj;
        });
      }
    } catch (error) {
      console.log(error);
      setConfirmationMessage((prev) => {
        const newObj = { ...prev };
        newObj.formIsSent = false;
        newObj.message = "Une erreur s'est produite. Veuillez recommencer";
        newObj.formIsSent;
        return newObj;
      });
    }

    setFormIsDisabled(false);
  };

  useEffect(() => {
    if (
      !username.isValid ||
      !email.isValid ||
      !telephone.isValid ||
      !subject.isValid ||
      !message.isValid
    ) {
      setFormIsDisabled(true);
    } else {
      setFormIsDisabled(false);
    }
  }, [username, email, telephone, subject, message]);

  const RGPDtext =
    "Les données de contact que vous renseignez dans ce formulaire sont utilisées sur la base de votre consentement par votre podologue Benjamin Morvan uniquement pour répondre à votre demande. Elles ne sont pas transmises à des tiers et sont conservées pendant la période de prise de contact ainsi que pendant la durée légale nécessaire. Vous disposez de droits d’accès, de rectification, d’effacement, d’opposition au ou de limitation du traitement de vos données, de retrait de votre consentement. Vous pouvez exercer ces droits auprès de votre podologue (mail ou courrier).";

  return (
    <div className={`container ${styles.contactContainer}`}>
      <h2>Contact</h2>
      <div>
        <form onSubmit={submitMessage} className={styles.contactForm}>
          <label htmlFor="name">
            <span>Nom*</span>
            <input
              className={!username.isValid ? styles.redInput : ""}
              type="text"
              name="nom"
              id="name"
              placeholder="Votre nom"
              value={username.value}
              onChange={(e) => inputChange(e.target.value, setUsername)}
              onBlur={() =>
                inputVerification(nonEmptyStringRegex, setUsername, true)
              }
            />
            <p className={`${styles.formMessage} small redTxt`}>
              {!username.isValid && "Ce champ est obligatoire."}
            </p>
          </label>

          <label htmlFor="email">
            <span>Email*</span>
            <input
              className={!email.isValid ? styles.redInput : ""}
              type="email"
              name="email"
              id="email"
              placeholder="Votre email"
              value={email.value}
              onChange={(e) => inputChange(e.target.value, setEmail)}
              onBlur={() => inputVerification(emailRegex, setEmail)}
            />
            <p className={`${styles.formMessage} small redTxt`}>
              {!email.isValid &&
                "Votre email doit être renseigné sous le format abc@domaine.com."}
            </p>
          </label>

          <label htmlFor="telephone">
            <span>Téléphone*</span>
            <input
              className={!telephone.isValid ? styles.redInput : ""}
              type="tel"
              name="téléphone"
              id="telephone"
              pattern="[0-9]{10}"
              placeholder="Votre numéro de téléphone"
              value={telephone.value}
              onChange={(e) => inputChange(e.target.value, setTelephone)}
              onBlur={() => inputVerification(telephoneRegex, setTelephone)}
            />
            <p className={`${styles.formMessage} small redTxt`}>
              {!telephone.isValid && "Votre numéro doit comporter 10 chiffres."}
            </p>
          </label>

          <label htmlFor="subject">
            <span>Objet*</span>
            <input
              className={!subject.isValid ? styles.redInput : ""}
              type="text"
              name="subject"
              id="subject"
              placeholder="Objet de votre message"
              value={subject.value}
              onChange={(e) => inputChange(e.target.value, setSubject)}
              onBlur={() =>
                inputVerification(nonEmptyStringRegex, setSubject, true)
              }
            />
            <p className={`${styles.formMessage} small redTxt`}>
              {!subject.isValid && "Ce champ est obligatoire."}
            </p>
          </label>

          <label htmlFor="message">
            <span>Message*</span>
            <textarea
              className={!message.isValid ? styles.redInput : ""}
              name="message"
              id="message"
              placeholder="Votre message"
              value={message.value}
              onChange={(e) => inputChange(e.target.value, setMessage)}
              onBlur={() =>
                inputVerification(nonEmptyStringRegex, setMessage, true)
              }
            ></textarea>
            <p className={`${styles.formMessage} small redTxt`}>
              {!message.isValid && "Ce champ est obligatoire."}
            </p>
          </label>

          <div
            className={confirmationMessage.formIsSent ? "greenTxt" : "redTxt"}
          >
            {confirmationMessage.formIsSent !== undefined && (
              <FontAwesomeIcon
                icon={
                  confirmationMessage.formIsSent ? faCircleCheck : faCircleXmark
                }
              />
            )}
            <p>{confirmationMessage.message}</p>
          </div>

          <button
            type="submit"
            disabled={formIsDisabled}
            className={formIsDisabled ? styles.disabled : ""}
          >
            Valider
          </button>
          <p className="small">
            (*) Tous les champs sont obligatoires.
            <br />
            {RGPDtext}
            <br />
            Pour en savoir plus sur la protection de vos donn&eacute;es
            personnelles,{" "}
            <a href="https://www.cnil.fr/fr" target="_blank">
              consultez le site internet de la CNIL.{" "}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </p>
        </form>

        <div className={styles.contactInfos}>
          <Image
            src={profilePicture}
            alt="Photo de Benjamin Morvan issue de sa page Doctolib"
          />
          <div>
            <h3>{name}</h3>
            <p>{titleText}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faLocationDot} />
            <p>
              {clinicName}
              <br />
              {address}
            </p>
          </div>
          <div>
            <FontAwesomeIcon icon={faSquarePhone} />
            <p>{phoneNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
