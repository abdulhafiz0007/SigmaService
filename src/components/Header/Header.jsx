import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/Link.png";
import RightArrow from "../../assets/images/right-arrow.png";
import MenuImg from "../../assets/images/menu-img.png";
import { motion } from "framer-motion";

export const Header = () => {
   const [isFixed, setIsFixed] = useState(false);
   const [active, setActive] = useState(false);
   const [activeLink, setActiveLink] = useState("#home"); // Track the active link

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 200) {
            setIsFixed(true);
         } else {
            setIsFixed(false);
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

   // Update the active link state when a nav item is clicked
   const handleNavClick = (linkId) => {
      setActiveLink(linkId); // Set the clicked link as active
   };

   return (
      <motion.header
         variants={HeaderVariant}
         initial="initial"
         animate={isFixed ? "visible" : "initial"}
         className={` bg-white transition-all duration-500 ease-in-out transform ${
            isFixed
               ? "fixed top-0 left-0 right-0 shadow-lg z-50 translate-y-0 opacity-100"
               : "relative opacity-100 translate-y-0"
         }`}
      >
         <div className="flex items-center justify-between border-b-[1px] border-slate-300">
            <a href="index.html" className="site-header__logo">
               <img src={Logo} alt="" />
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
                              activeLink === "#home" ? "text-[#D81324]" : "text-[#111111]"
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
                              activeLink === "#about" ? "text-[#D81324]" : "text-[#111111]"
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
                              activeLink === "#service" ? "text-[#D81324]" : "text-[#111111]"
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
                              activeLink === "#contact" ? "text-[#D81324]" : "text-[#111111]"
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
               <div className="lg:flex items-center gap-4 w-[279px] bg-red-600 py-[28px] px-[50px] hidden lg:block">
                  <a className="text-white" href="">
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
         <nav className={`${active ? "block pl-[60px] py-3" : "hidden"}`}>
            <ul className="flex flex-col items-start gap-4">
               <li
                  onClick={() => handleNavClick("#home")}
                  className="navbar__item"
               >
                  <a
                     href="#home"
                     className={`navbar__item-link font-medium ${
                        activeLink === "#home" ? "text-[#D81324]" : "text-[#111111]"
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
                        activeLink === "#about" ? "text-[#D81324]" : "text-[#111111]"
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
                        activeLink === "#service" ? "text-[#D81324]" : "text-[#111111]"
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
                        activeLink === "#contact" ? "text-[#D81324]" : "text-[#111111]"
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
      </motion.header>
   );
};
