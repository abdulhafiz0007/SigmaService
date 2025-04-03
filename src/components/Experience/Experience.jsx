import React from "react";
import {
   CarIcon,
   CarIcon2,
   CarIcon3,
   CarIcon4,
   GreenCheckmarkIcon,
} from "../../assets/images/Icons";
import CarExpImg from "../../assets/images/carExp.jpg";
import RightArrow from "../../assets/images/right-arrow.png";
import { useState } from "react";

export const Experience = () => {

   const [active, setActive] = useState(false);

   return (
      <div id="service" className="flex flex-col lg:flex-row items-start justify-between gap-[24px] lg:w-[1250px] px-[25px] m-auto mb-[96px]">
         <ul className="flex flex-col gap-[24px] w-full lg:w-[407px]">
            <li className="flex items-center gap-[16px] bg-red-600 p-[20px] lg:w-[407px] lg:h-[80px] cursor-pointer">
               <CarIcon />
               <h3 className="lg:text-[24px] text-[20px] font-bold text-white">Диагностика</h3>
            </li>
            <li className="flex items-center gap-[16px] bg-[#F2F2F2] p-[20px] lg:w-[407px] lg:h-[80px] cursor-pointer">
               <CarIcon2 />
               <h3 className="lg:text-[24px] text-[20px] font-bold leading-6">Обслуживание <br /> Двигателя</h3>
            </li>
            <li className="flex items-center gap-[16px] bg-[#F2F2F2] p-[20px] lg:w-[407px] lg:h-[80px] cursor-pointer">
               <CarIcon3 />
               <h3 className="lg:text-[24px] text-[20px] font-bold leading-6">Замена <br /> Шин</h3>
            </li>
            <li className="flex items-center gap-[16px] bg-[#F2F2F2] p-[20px] lg:w-[407px] lg:h-[80px] cursor-pointer">
               <CarIcon4 />
               <h3 className="lg:text-[24px] text-[20px] font-bold leading-6">Замена <br /> Масла</h3>
            </li>
         </ul>
         <img className="lg:w-[408px] h-[350px] w-full" src={CarExpImg} alt="car img" />
         <div className="lg:w-[432px] ">
            <h2 className="text-[#0B2154] lg:text-[28px] text-[23px] font-bold leading-8">15 Лет Опытa в Автосервисе</h2>
            <p className="text-[#596277]">
               Мы предоставляем высококачественные услуги по диагностике вашего
               автомобиля, используя самые современные технологии и
               оборудование.
            </p>
            <ul className="flex flex-col gap-[16px] mt-[20px]">
               <li className="flex items-center gap-[16px]">
                  <GreenCheckmarkIcon />
                  <p className="text-[#596277]">Качественное Обслуживание</p>
               </li>
               <li className="flex items-center gap-[16px]">
                  <GreenCheckmarkIcon />
                  <p className="text-[#596277]">Качественное Обслуживание</p>
               </li>
               <li className="flex items-center gap-[16px]">
                  <GreenCheckmarkIcon />
                  <p className="text-[#596277]">Качественное Обслуживание</p>
               </li>
            </ul>
            <div className="inline-flex items-center gap-4 bg-red-600 py-[10px] px-[38px] lg:py-[20px] lg:px-[48px] mt-[25px]">
               <a className="text-white " href="">
                  Позвонить
               </a>
               <img src={RightArrow} alt="" />
            </div>
         </div>
      </div>
   );
};
