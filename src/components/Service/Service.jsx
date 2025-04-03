import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../../assets/styles/main.css";
import {
   ServiceIcon1,
   ServiceIcon2,
   ServiceIcon3,
   ServiceIcon4,
   ServiceIcon5,
   ServiceIcon6,
   ServiceIcon7,
   ServiceIcon8,
   ServiceIcon9,
   ServiceIcon10,
   ServiceIcon11,
   ServiceIcon12,
   ServiceIcon13,
   ServiceIcon14,
   ServiceIcon15,
   ServiceIcon16,
} from "../../assets/images/Icons";

// Variants for animation
const TitleVariant = {
   hidden: {
      y: "100px",
      opacity: 0
   },
   visible: {
      y: 0,
      opacity: 1,
      transition: {
         duration: 1,
         type: "tween"
      }
   }
};

const TitleVariant2 = {
   hidden: {
      y: "100px",
      opacity: 0
   },
   visible: {
      y: 0,
      opacity: 1,
      transition: {
         delay: 0.3,
         duration: 1,
         type: "tween"
      }
   }
};

export const Service = () => {
   const { ref: factRef, inView: factInView } = useInView({
      triggerOnce: true,
      threshold: 0.2, // Trigger when 50% of the section is visible
   });

   // Render motion elements with intersection observer
   const ServiceItem = ({ icon: Icon, text, delay }) => {
      const { ref, inView } = useInView({
         triggerOnce: true,
         threshold: 0.5,
      });

      return (
         <motion.li
            ref={ref}
            variants={TitleVariant2}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex items-center gap-4 w-[390px] h-[133px] bg-[#F2F2F2] py-[48px] pl-[24px] pr-[193px] service-item"
         >
            <Icon />
            <p>{text}</p>
         </motion.li>
      );
   };

   return (
      <div ref={factRef} className="mt-[50px] px-[25px]">
         <motion.p
            variants={TitleVariant}
            initial="hidden"
            animate={factInView ? "visible" : "hidden"}
            className="text-red-600 text-center font-bold"
         >
            НАШИ УСЛУГИ
         </motion.p>
         <motion.h2
            variants={TitleVariant}
            initial="hidden"
            animate={factInView ? "visible" : "hidden"}
            className="text-[28px] lg:text-[40px] text-[#0B2154] mt-2 text-center font-bold"
         >
            Ознакомьтесь С Нашими <br /> Услугами
         </motion.h2>
         <ul className="flex flex-wrap justify-center items-start mt-[48px] gap-[24px] services-list">
            <ServiceItem icon={ServiceIcon1} text="Авто-Электрик" delay={0.5} />
            <ServiceItem icon={ServiceIcon2} text="Авто-Электрик" delay={0.6} />
            <ServiceItem icon={ServiceIcon3} text="Авто-Электрик" delay={0.7} />
            <ServiceItem icon={ServiceIcon4} text="Авто-Электрик" delay={0.8} />
            <ServiceItem icon={ServiceIcon5} text="Авто-Электрик" delay={0.9} />
            <ServiceItem icon={ServiceIcon6} text="Авто-Электрик" delay={1.0} />
            <ServiceItem icon={ServiceIcon7} text="Авто-Электрик" delay={1.1} />
            <ServiceItem icon={ServiceIcon8} text="Авто-Электрик" delay={1.2} />
            <ServiceItem icon={ServiceIcon9} text="Авто-Электрик" delay={1.3} />
            <ServiceItem icon={ServiceIcon10} text="Авто-Электрик" delay={1.4} />
            <ServiceItem icon={ServiceIcon11} text="Авто-Электрик" delay={1.5} />
            <ServiceItem icon={ServiceIcon12} text="Авто-Электрик" delay={1.6} />
            <ServiceItem icon={ServiceIcon13} text="Авто-Электрик" delay={1.7} />
            <ServiceItem icon={ServiceIcon14} text="Авто-Электрик" delay={1.8} />
            <ServiceItem icon={ServiceIcon15} text="Авто-Электрик" delay={1.9} />
            <ServiceItem icon={ServiceIcon16} text="Авто-Электрик" delay={2.0} />
         </ul>
      </div>
   );
};
