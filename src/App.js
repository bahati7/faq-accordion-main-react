import React from "react";
import Accordian from "./components/Accordian";
import logo from "./assets/images/background-pattern-desktop.svg";


function App() {
  return (
    <>
      <div className="bg-cover bg-center"
          style={{
            height:'300px',
            backgroundImage: `url(${logo})`
              
          }}
      ></div>
       <div className="flex flex-col items-center h-screen w-screen mt-[-250px]">
            
          <Accordian/>
      </div>
    </>
     
  
  );
}

export default App;
