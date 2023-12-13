import styles from "./ServiceCard.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Image from "next/image";

const ServiceCard = ({ service }) => {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.imgBorder}>
        <Image src={service.img} width={125} height={125} alt="blabla" />
      </div>
      <h2>{service.name}</h2>
      {service.price}
      <p>{service.description}</p>
      {service.other}
    </div>
  );
};

export default ServiceCard;
