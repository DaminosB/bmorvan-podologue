import styles from "./ServicesAndRates.module.css";

import { useEffect, useRef } from "react";

import { useInView } from "react-intersection-observer";

import orthopedics from "@/img/orthopedics.png";
import insoles from "@/img/insoles.png";
import footBandage from "@/img/foot-bandage.png";
import scissors from "@/img/scissors.png";
import nail from "@/img/nail.png";
import plantarWart from "@/img/plantar-wart.png";
import plasteredFoot from "@/img/plastered-foot.png";
import bicycleRider from "@/img/bicycle-rider.png";
import skiBoot from "@/img/ski-boot.png";

import pushRefInSectionsRefArray from "@/utils/pushRefInSectionsRefArray";
import ServiceCard from "../ServiceCard/ServiceCard";
import scrollMovement from "@/app/animations/scrollMovement";

const ServicesAndRates = ({ sectionsRefArray, id, setActiveSection }) => {
  const sectionName = `services ${id}`;
  const sectionRef = useRef(null);

  const servicesArray = [
    {
      name: "Bilan Podologique",
      description:
        "Une analyse biomécanique de votre appareil locomoteur et de votre posture.",
      img: orthopedics,
      price: <span className="greenTxt strong">50 €</span>,
    },
    {
      name: "Orthèses plantaires",
      description:
        "Vos semelles orthopédiques sur mesure en fonction du bilan initial.",
      img: insoles,
      other: (
        <>
          <span className="small">
            Pointures à partir du 38&nbsp;:&nbsp;
            <span className="greenTxt strong">100&nbsp;€</span>
          </span>
          <span className="small">
            Pointures du 28 au 37&nbsp;:&nbsp;
            <span className="greenTxt strong">80&nbsp;€</span>
          </span>
          <span className="small">
            Pointures jusqu'au 27&nbsp;:&nbsp;
            <span className="greenTxt strong">70&nbsp;€</span>
          </span>
        </>
      ),
    },
    {
      name: "Bilan et Pose de K-taping",
      description: "Un bilan et une pose de K-taping.",
      img: footBandage,
      price: <span className="greenTxt strong">50 €</span>,
    },
    {
      name: "Soin de pédicurie",
      description:
        "Un soin de pédicurie (coupe d’ongle, exérèse de l’hyperkératose et des cors…).",
      img: scissors,
      price: <span className="greenTxt strong">50 €</span>,
    },
    {
      name: "Ongle incarné",
      description: "Le traitement de vos ongles incarnés.",
      img: nail,
      price: <span className="greenTxt strong">50 €</span>,
    },
    {
      name: "Verrues plantaires",
      description: "Le traitement des verrues plantaires (forfait).",
      img: plantarWart,
      price: <span className="greenTxt strong">50 €</span>,
    },
    {
      name: "Orthoplasties & orthonyxie",
      description: "Orthoplastie et prothèse / ongle thérapeutique.",
      img: plasteredFoot,
      price: <span className="greenTxt strong">50 €</span>,
    },
    {
      name: "Bikefitting",
      description:
        "Une analyse posturale avec votre vélo en fonction de vos préférences naturelles/motrices.",
      img: bicycleRider,
      price: <span className="greenTxt strong">50 €</span>,
    },
    {
      name: "Bootfitting",
      description: "Le moulage et l’adaptation de vos chaussons de ski.",
      img: skiBoot,
      price: <span className="greenTxt strong">50 €</span>,
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  //   useEffect(
  //     () => {
  //       pushRefInSectionsRefArray(sectionsRefArray, sectionName, sectionRef);

  //       // setTimeout(() => {
  //       //   if (inView) {
  //       //     // setActiveSection(sectionName);
  //       //     scrollMovement(sectionRef.current);
  //       //   }
  //       // }, 500);
  //       // console.log(sectionName, sectionRef.current.offsetTop);
  //     },
  //     [
  //       // inView
  //     ]
  //   );

  return (
    // <section className={styles.servicesAndRatesSection} ref={sectionRef}>
    <div className="container" ref={ref}>
      <div className={styles.servicesContainer}>
        {servicesArray.map((service) => {
          return <ServiceCard key={service.name} service={service} />;
        })}
      </div>
    </div>
    // </section>
  );
};

export default ServicesAndRates;
