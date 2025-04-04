import React from "react";
import RemontImg from "../../assets/images/remont.png";
import BgImg1 from "../../assets/images/Background.png";
import BgImg2 from "../../assets/images/Background2.png";
import BgImg3 from "../../assets/images/Background3.png";
import RightArrow from "../../assets/images/right-arrow.png";
import { motion } from "framer-motion";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";

export const AvtoService = () => {

   const { setIsFormActive } = useContext(FormContext);

   const TitleVariant1 = {
      hidden: {
         opacity: 0,
      },
      visible: {
         y: 0,
         opacity: 1,
         transition: {
            delay: 0.5,
            duration: 2,
            type: "tween",
         },
      },
   };

   const TitleVariant2 = {
      hidden: {
         opacity: 0,
      },
      visible: {
         y: 0,
         opacity: 1,
         transition: {
            delay: 0.7,
            duration: 1,
            type: "tween",
         },
      },
   };

   const TitleVariant3 = {
      hidden: {
         opacity: 0,
      },
      visible: {
         y: 0,
         opacity: 1,
         transition: {
            delay: 0.8,
            duration: 1,
            type: "tween",
         },
      },
   };

   return (
      <div
         id="about"
         className="px-[25px] lg:w-[1250px] m-auto mt-[96px] flex flex-col lg:flex-row items-center  gap-[48px] transition-transform"
      >
         <img src={RemontImg} alt="" />
         <div>
            <p className="text-[#D81324] font-bold leading-3 mb-3">
               // О НAC //
            </p>
            <h2 className="text-[27px] lg:text-[40px] font-bold leading-8">
               <span className="text-[#D81324]">Sigma Avtoservis</span> - Лучшее
               Место Для Ухода За Вашим Авто
            </h2>
            <p className="text-[#596277] leading-6 mt-5">
               Мы предоставляем высококачественные услуги по ремонту автомобилей
               с многолетним опытом и профессионализмом. Наша команда экспертов
               готова помочь вам в любой ситуации.
            </p>
            <ul className="mt-[27px] flex flex-col gap-[27px]">
               <motion.li
                  variants={TitleVariant1}
                  initial="hidden"
                  animate="visible"
                  className="flex items-start lg:items-center gap-[16px]"
               >
                  <img src={BgImg1} alt="" />
                  <div>
                     <h3 className="font-bold text-[#0B2154] leading-5">
                        Профессионалы и <br /> Эксперты
                     </h3>
                     <p className="text-[#596277] leading-5">
                        Наши специалисты обладают высоким уровнем квалификации и
                        профессионализма.
                     </p>
                  </div>
               </motion.li>
               <motion.li
                  variants={TitleVariant2}
                  initial="hidden"
                  animate="visible"
                  className="flex items-start lg:items-center gap-[16px]"
               >
                  <img src={BgImg2} alt="" />
                  <div>
                     <h3 className="font-bold text-[#0B2154] leading-5">
                        Качественный Сервисный <br /> Центр
                     </h3>
                     <p className="text-[#596277]">
                        Мы гарантируем высокое качество обслуживания каждого
                        клиента.
                     </p>
                  </div>
               </motion.li>
               <motion.li
                  variants={TitleVariant3}
                  initial="hidden"
                  animate="visible"
                  className="flex items-start lg:items-center gap-[16px]"
               >
                  <img src={BgImg3} alt="" />
                  <div>
                     <h3 className="font-bold text-[#0B2154] leading-5">
                        Награжденные <br /> Работники
                     </h3>
                     <p className="text-[#596277]">
                        Наши сотрудники удостоены многочисленных наград за свою
                        работу.
                     </p>
                  </div>
               </motion.li>
            </ul>
            <div onClick={() => setIsFormActive(true)} className="inline-flex items-center gap-4 cursor-pointer hover:bg-red-500 transition-all bg-red-600 py-[10px] lg:py-[20px] px-[28px] lg:px-[48px] mt-[25px]">
               <a className="text-white " href="#about">
                  Позвонить
               </a>
               <img src={RightArrow} alt="" />
            </div>
         </div>
      </div>
   );
};
