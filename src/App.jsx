import { useContext } from "react";
import { useState } from "react";
import { About } from "./components/About/About";
import { AvtoService } from "./components/AvtoService/AvtoService";
import { Experience } from "./components/Experience/Experience";
import { Fact } from "./components/Fact/Fact";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Location } from "./components/Location/Location";
import { Service } from "./components/Service/Service";
import { FormContext } from "./context/FormContext";
import { useEffect } from "react";
import { Form } from "./components/Form/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {

   const { isFormActive } = useContext(FormContext);
   const [shouldShowToast, setShouldShowToast] = useState(false);

   useEffect(() => {
      if (!isFormActive && shouldShowToast) {
        toast.success("Message sent!");
        setShouldShowToast(false);
      }
    }, [isFormActive, shouldShowToast]);

   if (isFormActive === true) {
      document.body.style.overflow = "hidden";
   } else {
      document.body.style.overflow = "auto";
   }

   return (
      <>
         <Header />
         <Form setShouldShowToast={setShouldShowToast} />
         <About />
         <Service />
         <AvtoService />
         <Fact />
         <Experience />
         <Location />
         <Footer />
         <ToastContainer
               position="top-right"
               autoClose={5000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick={false}
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
               theme="light"
               toastClassName="!w-[80%] sm:!w-[400px] !mx-auto mt-5"
               bodyClassName="text-sm"
            />
      </>
   );
}

export default App;
