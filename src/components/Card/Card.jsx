import React from "react";
import {
    CarIcon,
    CarIcon2,
    CarIcon3,
    CarIcon4,
    GreenCheckmarkIcon,
 } from "../../assets/images/Icons";
import RightArrow from "../../assets/images/right-arrow.png";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";


export const Card = ({ img }) => {

   const { setIsFormActive } = useContext(FormContext);

   return (
      <div className="flex flex-col md:flex-row gap-[30px]">
         <img
            className="lg:w-[408px] h-[350px] w-full"
            src={img}
            alt="car img"
         />
         <div className="lg:w-[432px] ">
            <h2 className="text-[#0B2154] lg:text-[28px] text-[23px] font-bold leading-8">
               15 Лет Опытa в Автосервисе
            </h2>
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
            <div
               onClick={() => setIsFormActive(true)}
               className="inline-flex items-center gap-4 cursor-pointer hover:bg-red-500 transition-all bg-red-600 py-[10px] px-[38px] lg:py-[20px] lg:px-[48px] mt-[25px]"
            >
               <a className="text-white " href="#service">
                  Позвонить
               </a>
               <img src={RightArrow} alt="" />
            </div>
         </div>
      </div>
   );
};

export const Card2 = ({ img }) => {

   const { setIsFormActive } = useContext(FormContext);

    return (
       <div className="flex flex-col md:flex-row gap-[30px]">
          <img
             className="lg:w-[408px] h-[350px] w-full"
             src={img}
             alt="car img"
          />
          <div className="lg:w-[432px] ">
             <h2 className="text-[#0B2154] lg:text-[28px] text-[23px] font-bold leading-8">
                15 Лет Опытa в Автосервисе
             </h2>
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
             <div
                onClick={() => setIsFormActive(true)}
                className="inline-flex items-center gap-4 cursor-pointer hover:bg-red-500 transition-all bg-red-600 py-[10px] px-[38px] lg:py-[20px] lg:px-[48px] mt-[25px]"
             >
                <a className="text-white " href="#service">
                   Позвонить
                </a>
                <img src={RightArrow} alt="" />
             </div>
          </div>
       </div>
    );
 };

 export const Card3 = ({ img }) => {

   const { setIsFormActive } = useContext(FormContext);

    return (
       <div className="flex flex-col md:flex-row gap-[30px]">
          <img
             className="lg:w-[408px] h-[350px] w-full"
             src={img}
             alt="car img"
          />
          <div className="lg:w-[432px] ">
             <h2 className="text-[#0B2154] lg:text-[28px] text-[23px] font-bold leading-8">
                15 Лет Опытa в Автосервисе
             </h2>
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
             <div
                onClick={() => setIsFormActive(true)}
                className="inline-flex items-center gap-4 cursor-pointer hover:bg-red-500 transition-all bg-red-600 py-[10px] px-[38px] lg:py-[20px] lg:px-[48px] mt-[25px]"
             >
                <a className="text-white " href="#service">
                   Позвонить
                </a>
                <img src={RightArrow} alt="" />
             </div>
          </div>
       </div>
    );
 };

 export const Card4 = ({ img }) => {

   const { setIsFormActive } = useContext(FormContext);

    return (
       <div className="flex flex-col md:flex-row gap-[30px]">
          <img
             className="lg:w-[408px] h-[350px] w-full"
             src={img}
             alt="car img"
          />
          <div className="lg:w-[432px] ">
             <h2 className="text-[#0B2154] lg:text-[28px] text-[23px] font-bold leading-8">
                15 Лет Опытa в Автосервисе
             </h2>
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
             <div
                onClick={() => setIsFormActive(true)}
                className="inline-flex items-center gap-4 cursor-pointer hover:bg-red-500 transition-all bg-red-600 py-[10px] px-[38px] lg:py-[20px] lg:px-[48px] mt-[25px]"
             >
                <a className="text-white " href="#service">
                   Позвонить
                </a>
                <img src={RightArrow} alt="" />
             </div>
          </div>
       </div>
    );
 };
