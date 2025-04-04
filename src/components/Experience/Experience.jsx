import React from "react";
import {
   CarIcon,
   CarIcon2,
   CarIcon3,
   CarIcon4,
   GreenCheckmarkIcon,
} from "../../assets/images/Icons";
import CarExpImg from "../../assets/images/carExp.jpg";
import CarExpImg2 from "../../assets/images/service-2.jpg";
import CarExpImg3 from "../../assets/images/service-3.jpg";
import CarExpImg4 from "../../assets/images/service-4.jpg";

import RightArrow from "../../assets/images/right-arrow.png";
import { useState } from "react";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import { Card, Card2, Card3, Card4 } from "../Card/Card";

export const Experience = () => {
   const [active, setActive] = useState(false);
   const [activeTab, setActiveTab] = useState("card1");

   return (
      <div
         id="service"
         className="flex flex-col lg:flex-row items-start justify-between gap-[24px] lg:w-[1250px] px-[25px] m-auto mb-[96px]"
      >
         <ul className="flex flex-col gap-[24px] w-full lg:w-[407px]">
            <li
               onClick={() => setActiveTab("card1")}
               className={`flex items-center gap-[16px] bg-[#F2F2F2] text-[#0B2154] p-[20px] lg:w-[407px] lg:h-[80px] cursor-pointer ${
                  activeTab === "card1"
                     ? "bg-red-600 text-white"
                     : "bg-[#F2F2F2]"
               } `}
            >
               <CarIcon activeTab={activeTab} />
               <h3 className="lg:text-[24px] text-[20px] font-bold">
                  Диагностика
               </h3>
            </li>
            <li
               onClick={() => setActiveTab("card2")}
               className={`flex items-center gap-[16px] bg-[#F2F2F2] text-[#0B2154] p-[20px] lg:w-[407px] lg:h-[80px] cursor-pointer ${
                  activeTab === "card2"
                     ? "bg-red-600 text-white"
                     : "bg-[#F2F2F2]"
               } `}
            >
               <CarIcon2 activeTab={activeTab} setActiveTab={setActiveTab} />
               <h3 className="lg:text-[24px] text-[20px] font-bold leading-6">
                  Обслуживание <br /> Двигателя
               </h3>
            </li>
            <li onClick={() => setActiveTab("card3")}
               className={`flex items-center gap-[16px] bg-[#F2F2F2] text-[#0B2154] p-[20px] lg:w-[407px] lg:h-[80px] cursor-pointer ${
                  activeTab === "card3"
                     ? "bg-red-600 text-white"
                     : "bg-[#F2F2F2]"
               } `}>
               <CarIcon3 activeTab={activeTab} />
               <h3 className="lg:text-[24px] text-[20px] font-bold leading-6">
                  Замена <br /> Шин
               </h3>
            </li>
            <li onClick={() => setActiveTab("card4")}
               className={`flex items-center gap-[16px] bg-[#F2F2F2] text-[#0B2154] p-[20px] lg:w-[407px] lg:h-[80px] cursor-pointer ${
                  activeTab === "card4"
                     ? "bg-red-600 text-white"
                     : "bg-[#F2F2F2]"
               } `}>
               <CarIcon4 activeTab={activeTab} />
               <h3 className="lg:text-[24px] text-[20px] font-bold leading-6">
                  Замена <br /> Масла
               </h3>
            </li>
         </ul>
        
         <div>
            {activeTab === "card1" ? <Card img={CarExpImg} /> : ""}
            {activeTab === "card2" ? <Card2 img={CarExpImg2} /> : ""}
            {activeTab === "card3" ? <Card3 img={CarExpImg3} /> : ""}
            {activeTab === "card4" ? <Card4 img={CarExpImg4} /> : ""}
         </div>

      </div>
   );
};
