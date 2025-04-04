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

function App() {

   const { isFormActive } = useContext(FormContext);

   if (isFormActive === true) {
      document.body.style.overflow = "hidden";
   } else {
      document.body.style.overflow = "auto";
   }

   return (
      <>
         <Header />
         <About />
         <Service />
         <AvtoService />
         <Fact />
         <Experience />
         <Location />
         <Footer />
      </>
   );
}

export default App;
