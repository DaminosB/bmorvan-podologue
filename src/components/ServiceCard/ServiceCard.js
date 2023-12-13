import styles from "./ServiceCard.module.css";

import Image from "next/image";

// This component will display the client's services through a .map function called from the parent

const ServiceCard = ({ service }) => {
  // service: Object. The arg given from a .map function
  return (
    <div className={styles.serviceCard}>
      <div className={styles.imgBorder}>
        <Image src={service.img} width={125} height={125} alt="blabla" />
      </div>
      <h2>{service.name}</h2>
      {service.price && (
        <span className="greenTxt strong">{service.price} €</span>
      )}
      <p>{service.description}</p>
      {service.other}
    </div>
  );
};

export default ServiceCard;
