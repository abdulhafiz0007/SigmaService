import React from "react";
import RightArrow from "../../assets/images/right-arrow.png";
import {
   LocationIcon,
   PhoneIcon,
   TelegramIcon,
   InstagramIcon,
   CopyrightIcon,
   RightArrowIcon,
} from "../../assets/images/Icons";
import FooterImg from "../../assets/images/footer-bg.jpg"

export const Footer = () => {
   return (
      <footer style={{ backgroundImage: `url(${FooterImg})` }} className="relative bg-cover bg-center">
         <div className="absolute inset-0 bg-gradient-to-r from-[#111111] to-[rgba(0,0,0,0.9)] opacity-90"></div>
         <div className="relative lg:w-[1250px] px-[25px] m-auto flex flex-col gap-[50px] lg:flex-row items-start justify-between pt-[96px]">
            <div className="flex flex-col">
               <h2 className="text-white text-[24px] font-bold mb-3">Адрес</h2>
               <div className="flex items-center gap-2">
                  <LocationIcon />
                  <p className="text-white">ул.яккасарайcкая, г.Ташкент,</p>
               </div>
               <p className="text-white">
                  Узбекистан, Ориентир : Напротив <br /> свадебный рестаран
                  Navruz
               </p>
               <div className="flex items-center gap-4 my-2">
                  <PhoneIcon />
                  <a className="text-[#D81324]" href="tel:+99897 717 11 18">
                     +99897 717 11 18
                  </a>
               </div>
               <div className="flex items-center gap-4">
                  <PhoneIcon />
                  <a className="text-[#D81324]" href="tel:+99897 738 72 75">
                     +99897 738 72 75
                  </a>
               </div>
               <div className="flex items-center gap-2 mt-4">
                  <InstagramIcon />
                  <TelegramIcon />
               </div>
            </div>
            <div>
               <h2 className="font-bold text-white text-[24px] mb-3">
                  Часы Работы
               </h2>
               <p className="text-white mb-1">Понедельник - Воскресенье:</p>
               <p className="text-white">24/7</p>
            </div>
            <div>
               <h2 className="text-white font-bold text-[24px] mb-3">Услуги</h2>
               <ul className="flex flex-col gap-2">
                  <li className="flex items-center gap-[10px]">
                     <RightArrowIcon />
                     <p className="text-[15px] text-white text-white">
                        Диагностика
                     </p>
                  </li>
                  <li className="flex items-center gap-[10px]">
                     <RightArrowIcon />
                     <p className="text-[15px] text-white">
                        Обслуживание Двигателя
                     </p>
                  </li>
                  <li className="flex items-center gap-[10px]">
                     <RightArrowIcon />
                     <p className="text-[15px] text-white">Замена Шин</p>
                  </li>
                  <li className="flex items-center gap-[10px]">
                     <RightArrowIcon />
                     <p className="text-[15px] text-white">Замена Масла</p>
                  </li>
                  <li className="flex items-center gap-[10px]">
                     <RightArrowIcon />
                     <p className="text-[15px] text-white">Токарная услуга</p>
                  </li>
                  <li className="flex items-center gap-[10px]">
                     <RightArrowIcon />
                     <p className="text-[15px] text-white">Тонировка</p>
                  </li>
                  <li className="flex items-center gap-[10px]">
                     <RightArrowIcon />
                     <p className="text-[15px] text-white">Моторист</p>
                  </li>
                  <li className="flex items-center gap-[10px]">
                     <RightArrowIcon />
                     <p className="text-[15px] text-white">Кастаправ</p>
                  </li>
                  <li className="flex items-center gap-[10px]">
                     <RightArrowIcon />
                     <p className="text-[15px] text-white">Вакуумная Чистка</p>
                  </li>
                  <li className="flex items-center gap-[10px]">
                     <RightArrowIcon />
                     <p className="text-[15px] text-white">Авто-Электрик</p>
                  </li>
                  <li className="flex items-center gap-[10px]">
                     <RightArrowIcon />
                     <p className="text-[15px] text-white">Авто-Механик</p>
                  </li>
                  <li className="flex items-center gap-[10px]">
                     <RightArrowIcon />
                     <p className="text-[15px] text-white">
                        Выезд Автоэлектрик <br /> Круглосуточный
                     </p>
                  </li>
               </ul>
            </div>
            <div>
               <h2 className="text-white text-[24px] font-bold mb-3">
                  Контакты
               </h2>
               <div className="inline-flex items-center gap-4 bg-red-600 py-[10px] px-[55px]">
                  <a className="text-white" href="">
                     Вызвать мастера
                  </a>
                  <img src={RightArrow} alt="" />
               </div>
            </div>
         </div>
         <span className="block lg:w-[1250px] w-full px-[25px] h-[2px] mt-[30px] m-auto bg-white"></span>
         <p className="relative lg:w-[1250px] px-[25px] m-auto py-[25px] text-white text-center lg:text-left">© sigmaservis.uz. Все права защищены</p>
      </footer>
   );
};
