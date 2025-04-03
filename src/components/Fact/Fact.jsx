import React, { useEffect, useState } from "react";
import FactBgImg from "../../assets/images/fact-bg.jpg";
import {
   CheckmarkIcon,
   CheckmarkIcon2,
   CheckmarkIcon3,
   CheckmarkIcon4,
} from "../../assets/images/Icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Fact = () => {

   const AnimatedNumber = ({ targetNumber, duration }) => {
      const [count, setCount] = useState(0);

      useEffect(() => {
         const interval = setInterval(() => {
            setCount((prev) => {
               if (prev < targetNumber) {
                  return prev + Math.ceil(targetNumber / (duration * 60));
               } else {
                  clearInterval(interval);
                  return targetNumber;
               }
            });
         }, 1000 / 60);

         return () => clearInterval(interval);
      }, [targetNumber, duration]);

      return <span>{count}</span>;
   };

   const { ref: factRef, inView: factInView } = useInView({
      triggerOnce: true, // Trigger only once
      threshold: 0.5, // Trigger when 50% of the section is visible
   });

   return (
      <div
         ref={factRef}
         className="relative lg:h-[215px] my-[96px] flex items-center justify-center bg-cover bg-center"
         style={{
            backgroundImage: `url(${FactBgImg})`,
         }}
      >
         <div className="absolute inset-0 bg-gradient-to-r from-[#111111] to-[rgba(0,0,0,0.7)] opacity-90"></div>
         <ul className="relative flex flex-col lg:flex-row gap-[40px] py-[50px] items-center justify-center">
            <li className="w-[300px] flex flex-col items-center justify-center">
               <CheckmarkIcon />
               <motion.div className="font-bold text-white text-[32px] mt-[6px]">
                  {factInView && (
                     <AnimatedNumber targetNumber={15} duration={2} />
                  )}
               </motion.div>
               <p className="text-white">Лет опыта</p>
            </li>
            <li className="w-[300px] flex flex-col items-center justify-center">
               <CheckmarkIcon2 />
               <motion.div className="font-bold text-white text-[32px] mt-[6px]">
                  {factInView && (
                     <AnimatedNumber targetNumber={20} duration={2} />
                  )}
               </motion.div>
               <p className="text-white">Экспертных техников</p>
            </li>
            <li className="w-[300px] flex flex-col items-center justify-center">
               <CheckmarkIcon3 />
               <motion.div className="font-bold text-white text-[32px] mt-[6px]">
                  {factInView && (
                     <AnimatedNumber targetNumber={1000} duration={2} />
                  )}
               </motion.div>
               <p className="text-white">Довольных клиентов</p>
            </li>
            <li className="w-[300px] flex flex-col items-center justify-center">
               <CheckmarkIcon4 />

               <motion.div className="font-bold text-white text-[32px] mt-[6px]">
                  {factInView && (
                     <AnimatedNumber targetNumber={500} duration={2} />
                  )}
               </motion.div>
               <p className="text-white">Выполненных проектов</p>
            </li>
         </ul>
      </div>
   );
};
