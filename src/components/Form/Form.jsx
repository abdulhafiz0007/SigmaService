import axios from "axios";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";

export const Form = ({ setShouldShowToast }) => {

   const { isFormActive, setIsFormActive } = useContext(FormContext);

   const sendMessage = (evt) => {
      evt.preventDefault();
      const token = "7254513625:AAEhMcoF_YjIrcdmoWYfA1MCPwE3SMUd89M";
      const chat_id = 6552496082;
      const url = `https://api.telegram.org/bot${token}/sendMessage`;
      const name = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;
      const messageContent = `Ism: ${name} \nTelfon raqam: ${phone}`;
      axios({
         url: url,
         method: "POST",
         data: {
            chat_id: chat_id,
            text: messageContent,
         },
      })
         .then((res) => {
            if(res.status === 200) {
               setIsFormActive(false)
               setShouldShowToast(true);
            }
         })
         .catch((err) => toast.error("Message Failed"));
      };

   return (
      isFormActive && (
         <div
            onClick={() => setIsFormActive(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center"
         >
            <motion.form
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.3 }}
               onSubmit={sendMessage}
               onClick={(evt) => evt.stopPropagation()}
               className="myForm fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  z-50 lg:w-[400px] w-[300px] flex flex-col p-[24px] border-2 border-slate-600 rounded-lg bg-white"
            >
               <label htmlFor="">Name</label>
               <input
                  className="border-2 border-slate-500 rounded p-2 mb-4"
                  id="name"
                  type="text"
                  placeholder="Name"
               />
               <label htmlFor="">Phone</label>
               <input
                  className="border-2 border-slate-500 rounded p-2"
                  id="phone"
                  type="number"
                  placeholder="Phone Number"
               />
               <button
                  className="text-white bg-red-600 px-[20px] py-[10px] mt-9"
                  type="submit"
               >
                  Send
               </button>
            </motion.form>
         </div>
      )
   );
};
