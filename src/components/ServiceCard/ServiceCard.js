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
      <div className={styles.priceAndName}>
        <h2>{service.name}</h2>
        {service.price && (
          <span className="greenTxt strong">{service.price} €</span>
        )}
      </div>
      <p>{service.description}</p>
      <div className={styles.options}>{service.other}</div>
    </div>
  );
};

export default ServiceCard;
