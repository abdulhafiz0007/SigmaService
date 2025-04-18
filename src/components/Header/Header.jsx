import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/Link.png";
import RightArrow from "../../assets/images/right-arrow.png";
import MenuImg from "../../assets/images/menu-img.png";
import { motion } from "framer-motion";
import { Form } from "../Form/Form";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";

export const Header = () => {
   const [isFixed, setIsFixed] = useState(false);
   const [active, setActive] = useState(false);
   const [activeLink, setActiveLink] = useState("#home");
   const { isFormActive, setIsFormActive } = useContext(FormContext);

   useEffect(() => {
      const handleScroll = () => {
         if (window.innerWidth < 1024) {
            setIsFixed(true);
         } else {
            if (window.scrollY > 200) {
               setIsFixed(true);
            } else {
               setIsFixed(false);
            }
         }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const HeaderVariant = {
      initial: {
         y: 0,
      },
      hidden: {
         y: "-100px",
      },
      visible: {
         y: 0,
         transition: {
            duration: 1,
            type: "tween",
         },
      },
   };

   const handleNavClick = (linkId) => {
      setActiveLink(linkId);
   };

   return (
      <motion.header
         variants={HeaderVariant}
         initial="initial"
         animate={isFixed ? "visible" : "initial"}
         className={` bg-white transition-all duration-500 ease-in-out transform ${
            isFixed
               ? "fixed top-0 left-0 right-0 shadow-lg z-40 translate-y-0 opacity-100"
               : "relative opacity-100 translate-y-0"
         }`}
      >
         <div className="flex items-center justify-between border-b-[1px] border-slate-300">
            <a href="#" className="site-header__logo">
               <img src={Logo} alt="header logo" />
            </a>
            <div className="flex items-center gap-4">
               <nav className="site-header__nav navbar hidden lg:block">
                  <ul className="flex items-center gap-4">
                     <li
                        onClick={() => handleNavClick("#home")}
                        className="navbar__item"
                     >
                        <a
                           href="#home"
                           className={`navbar__item-link font-medium ${
                              activeLink === "#home"
                                 ? "text-[#D81324]"
                                 : "text-[#111111]"
                           }`}
                        >
                           Главная
                        </a>
                     </li>
                     <li
                        onClick={() => handleNavClick("#about")}
                        className="navbar__item"
                     >
                        <a
                           href="#about"
                           className={`navbar__item-link font-medium ${
                              activeLink === "#about"
                                 ? "text-[#D81324]"
                                 : "text-[#111111]"
                           }`}
                        >
                           О нас
                        </a>
                     </li>
                     <li
                        onClick={() => handleNavClick("#service")}
                        className="navbar__item"
                     >
                        <a
                           href="#service"
                           className={`navbar__item-link font-medium ${
                              activeLink === "#service"
                                 ? "text-[#D81324]"
                                 : "text-[#111111]"
                           }`}
                        >
                           Услуги
                        </a>
                     </li>
                     <li
                        onClick={() => handleNavClick("#contact")}
                        className="navbar__item"
                     >
                        <a
                           href="#contact"
                           className={`navbar__item-link font-medium ${
                              activeLink === "#contact"
                                 ? "text-[#D81324]"
                                 : "text-[#111111]"
                           }`}
                        >
                           Контакты
                        </a>
                     </li>
                     <li className="navbar__item">
                        <a
                           href="tel:+99897 717 11 18"
                           className="navbar__item-link font-medium text-[#111111]"
                        >
                           +99897 717 11 18
                        </a>
                     </li>
                  </ul>
               </nav>
               <div
                  onClick={() => setIsFormActive(true)}
                  className="lg:flex items-center cursor-pointer hover:bg-red-500 transition-all gap-4 w-[279px] bg-red-600 py-[28px] px-[50px] hidden lg:block"
               >
                  <a className="text-white" href="#">
                     Вызвать мастера
                  </a>
                  <img src={RightArrow} alt="" />
               </div>
               <button
                  onClick={() => setActive(!active)}
                  className="w-[40px] h-[40px] mr-[30px] p-2 border-2 border-slate-400 lg:hidden"
               >
                  <img src={MenuImg} alt="Menu icon" />
               </button>
            </div>
         </div>
         {active && (
            <div
               onClick={() => setActive(false)}
               className="fixed inset-0 z-10 lg:hidden border-t-2"
            >
               <nav
                  onClick={(evt) => evt.stopPropagation()}
                  className="bg-white w-full h-[250px] pl-[30px] mt-[74px] pt-[20px] z-10"
               >
                  <ul className="flex flex-col items-start gap-4">
                     <li
                        onClick={() => {
                           handleNavClick("#home");
                           setActive(!active);
                        }}
                        className="navbar__item"
                     >
                        <a
                           href="#home"
                           className={`navbar__item-link font-medium ${
                              activeLink === "#home"
                                 ? "text-[#D81324]"
                                 : "text-[#111111]"
                           }`}
                        >
                           Главная
                        </a>
                     </li>
                     <li
                        onClick={() => {
                           handleNavClick("#about");
                           setActive(!active);
                        }}
                        className="navbar__item"
                     >
                        <a
                           href="#about"
                           className={`navbar__item-link font-medium ${
                              activeLink === "#about"
                                 ? "text-[#D81324]"
                                 : "text-[#111111]"
                           }`}
                        >
                           О нас
                        </a>
                     </li>
                     <li
                        onClick={() => {
                           handleNavClick("#service");
                           setActive(!active);
                        }}
                        className="navbar__item"
                     >
                        <a
                           href="#service"
                           className={`navbar__item-link font-medium ${
                              activeLink === "#service"
                                 ? "text-[#D81324]"
                                 : "text-[#111111]"
                           }`}
                        >
                           Услуги
                        </a>
                     </li>
                     <li
                        onClick={() => {
                           handleNavClick("#contact");
                           setActive(!active);
                        }}
                        className="navbar__item"
                     >
                        <a
                           href="#contact"
                           className={`navbar__item-link font-medium ${
                              activeLink === "#contact"
                                 ? "text-[#D81324]"
                                 : "text-[#111111]"
                           }`}
                        >
                           Контакты
                        </a>
                     </li>
                     <li className="navbar__item">
                        <a
                           href="tel:+99897 717 11 18"
                           className="navbar__item-link font-medium text-[#111111]"
                        >
                           +99897 717 11 18
                        </a>
                     </li>
                  </ul>
               </nav>
            </div>
         )}
         <Form isFormActive={isFormActive} setIsFormActive={setIsFormActive} />
      </motion.header>
   );
};
