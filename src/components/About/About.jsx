import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

import RightArrow from "../../assets/images/right-arrow.png";
import MersImg from "../../assets/images/mers-img.png";
import BgImg1 from "../../assets/images/bg-img.png";
import BgImg2 from "../../assets/images/malibu.jpg";
import BgImg3 from "../../assets/images/lacetti.png";
import PradoImg from "../../assets/images/carousel-2.png";
import { Form } from "../Form/Form";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";

export const About = () => {
   const [animationKey, setAnimationKey] = useState(0);

   const TitleVariant = {
      hidden: { y: "-80px", opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { duration: 1, type: "tween" } },
   };

   const ButtonVariant = {
      hidden: { y: "-50px", opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { duration: 1, type: "tween" } },
   };

   const ImgVariant = {
      hidden: {
         width: "450px",
         height: "250px",
      },
      visible: {
         width: "500px",
         height: "368px",
         transition: {
            duration: 1,
            type: "tween",
         },
      },
   };

   const { setIsFormActive } = useContext(FormContext);

   return (
      <div className="relative lg:h-screen" id="home">
         <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            navigation={true}
            onSlideChange={() => setAnimationKey((prev) => prev + 1)} // Ensures animations reset every slide change
            className="relative h-[500px] lg:h-screen"
         >
            <SwiperSlide>
               <div
                  className="relative h-[500px] lg:h-screen lg:pb-[100px] bg-cover bg-center flex flex-col justify-center"
                  style={{ backgroundImage: `url(${BgImg1})` }}
               >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#111111] to-[rgba(0,0,0,0.7)] opacity-90"></div>
                  <div className="relative flex justify-center lg:justify-between items-center lg:pt-[150px] lg:px-[160px]">
                     <div className="flex flex-col justify-center items-center lg:items-start w-[250px] lg:w-full">
                        <p className="text-white text-center lg:text-left">
                           // Ремонт автомобилей //
                        </p>
                        <motion.h1
                           key={`title-${animationKey}`}
                           variants={TitleVariant}
                           initial="hidden"
                           animate="visible"
                           className="sm:text-[64px] text-[30px] font-bold text-white text-center lg:text-left"
                        >
                           Ремонт автомобиля в рассрочку
                        </motion.h1>
                        <motion.div
                           onClick={() => setIsFormActive(true)}
                           key={`button-${animationKey}`}
                           variants={ButtonVariant}
                           initial="hidden"
                           animate="visible"
                           className="inline-flex items-center gap-4 bg-red-600 py-[10px] px-[28px] mt-4"
                        >
                           <a className="text-white" href="#">
                              {" "}
                              Узнать больше{" "}
                           </a>
                           <img src={RightArrow} alt="" />
                        </motion.div>
                     </div>
                     <motion.img
                        key={`img-${animationKey}`}
                        variants={ImgVariant}
                        initial="hidden"
                        animate="visible"
                        className="hidden lg:block"
                        src={MersImg}
                        alt="Mers Image"
                     />
                  </div>
               </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
               <div
                  className="relative h-[500px] lg:h-screen lg:pb-[100px] bg-cover bg-center flex flex-col justify-center"
                  style={{ backgroundImage: `url(${BgImg2})` }}
               >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#111111] to-[rgba(0,0,0,0.7)] opacity-90"></div>
                  <div className="relative flex justify-center items-center lg:pt-[150px] lg:px-[160px]">
                     <div className="flex flex-col justify-center items-center lg:items-start w-[250px] lg:w-full">
                        <p className="text-white text-center lg:text-left">
                           // Ремонт автомобилей //
                        </p>
                        <motion.h1
                           key={`title-${animationKey}`}
                           variants={TitleVariant}
                           initial="hidden"
                           animate="visible"
                           className="sm:text-[64px] text-[30px] font-bold text-white text-center lg:text-left"
                        >
                           Помощь на дороге
                        </motion.h1>
                        <motion.div
                           onClick={() => setIsFormActive(true)}
                           key={`button-${animationKey}`}
                           variants={ButtonVariant}
                           initial="hidden"
                           animate="visible"
                           className="inline-flex items-center gap-4 bg-red-600 py-[10px] px-[28px] mt-4"
                        >
                           <a className="text-white" href="#">
                              {" "}
                              Узнать больше{" "}
                           </a>
                           <img src={RightArrow} alt="" />
                        </motion.div>
                     </div>
                     <motion.img
                        key={`img-${animationKey}`}
                        variants={ImgVariant}
                        initial="hidden"
                        animate="visible"
                        className="hidden lg:block"
                        src={PradoImg}
                        alt="Mers Image"
                     />
                  </div>
               </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
               <div
                  className="relative h-[500px] lg:h-screen lg:pb-[100px] bg-cover bg-center flex flex-col justify-center"
                  style={{ backgroundImage: `url(${BgImg3})` }}
               >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#111111] to-[rgba(0,0,0,0.7)] opacity-90"></div>
                  <div className="relative flex justify-center items-center lg:pt-[150px] lg:px-[160px]">
                     <div className="flex flex-col justify-center items-center lg:items-start w-[250px] lg:w-full">
                        <p className="text-white text-center lg:text-left">
                           // Ремонт автомобилей //
                        </p>
                        <motion.h1
                           key={`title-${animationKey}`}
                           variants={TitleVariant}
                           initial="hidden"
                           animate="visible"
                           className="sm:text-[64px] text-[30px] font-bold text-white text-center lg:text-left"
                        >
                           Автозапчасти лучшего качества
                        </motion.h1>
                        <motion.div
                           onClick={() => setIsFormActive(true)}
                           key={`button-${animationKey}`}
                           variants={ButtonVariant}
                           initial="hidden"
                           animate="visible"
                           className="inline-flex items-center gap-4 bg-red-600 py-[10px] px-[28px] mt-4"
                        >
                           <a className="text-white" href="#">
                              {" "}
                              Узнать больше{" "}
                           </a>
                           <img src={RightArrow} alt="" />
                        </motion.div>
                     </div>
                     <motion.img
                        key={`img-${animationKey}`}
                        variants={ImgVariant}
                        initial="hidden"
                        animate="visible"
                        className="hidden lg:block"
                        src={PradoImg}
                        alt="Mers Image"
                     />
                  </div>
               </div>
            </SwiperSlide>
         </Swiper>
      </div>
   );
};
