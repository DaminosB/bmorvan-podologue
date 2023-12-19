import styles from "./ServicesAndRates.module.css";

import orthopedics from "@/img/services-icons/orthopedics.png";
import insoles from "@/img/services-icons/insoles.png";
import footBandage from "@/img/services-icons/foot-bandage.png";
import scissors from "@/img/services-icons/scissors.png";
import nail from "@/img/services-icons/nail.png";
import plantarWart from "@/img/services-icons/plantar-wart.png";
import plasteredFoot from "@/img/services-icons/plastered-foot.png";
import bicycleRider from "@/img/services-icons/bicycle-rider.png";
import skiBoot from "@/img/services-icons/ski-boot.png";

import ServiceCard from "../ServiceCard/ServiceCard";

const ServicesAndRates = () => {
  // This array contains the content of the services provided by the client.
  // It will be displayed through a .map function
  const servicesArray = [
    {
      name: "Bilan Podologique",
      description:
        "Une analyse biomécanique de votre appareil locomoteur et de votre posture.",
      img: orthopedics,
      price: 50,
    },
    {
      name: "Orthèses plantaires",
      description:
        "Vos semelles orthopédiques sur mesure en fonction du bilan initial.",
      img: insoles,
      other: (
        <>
          <span className="small">
            Pointures &agrave; partir du 38&nbsp;:&nbsp;
            <span className="greenTxt strong">100&nbsp;€</span>
          </span>
          <span className="small">
            Pointures du 28 au 37&nbsp;:&nbsp;
            <span className="greenTxt strong">80&nbsp;€</span>
          </span>
          <span className="small">
            Pointures jusqu&apos;au 27&nbsp;:&nbsp;
            <span className="greenTxt strong">70&nbsp;€</span>
          </span>
        </>
      ),
    },
    {
      name: "Bilan et Pose de K-taping",
      description: "Un bilan et une pose de K-taping.",
      img: footBandage,
      price: 45,
    },
    {
      name: "Soin de pédicurie",
      description:
        "Un soin de pédicurie (coupe d’ongle, exérèse de l’hyperkératose et des cors…).",
      img: scissors,
      price: 37,
    },
    {
      name: "Ongle incarné",
      description: "Le traitement de vos ongles incarnés.",
      img: nail,
      price: 20,
    },
    {
      name: "Verrues plantaires",
      description: "Le traitement des verrues plantaires (forfait).",
      img: plantarWart,
      price: 95,
    },
    {
      name: "Orthoplasties & orthonyxie",
      description: "Orthoplastie et prothèse / ongle thérapeutique.",
      img: plasteredFoot,
      price: 30,
    },
    {
      name: "Bikefitting",
      description:
        "Une analyse posturale avec votre vélo en fonction de vos préférences naturelles/motrices.",
      img: bicycleRider,
      price: 200,
    },
    {
      name: "Bootfitting",
      description: "Le moulage et l’adaptation de vos chaussons de ski.",
      img: skiBoot,
      price: 150,
    },
  ];

  return (
    <div className="container">
      <div className={styles.servicesContainer}>
        {servicesArray.map((service) => {
          return <ServiceCard key={service.name} service={service} />;
        })}
      </div>
    </div>
  );
};

export default ServicesAndRates;
