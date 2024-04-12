import React, { useState } from "react";
import data from "./data";
import MinusIcon from "./MinusIcon";
import PlusIcon from "./PlusIcon";
import Header from "./Header";


const Accordian = () => {
    const [selected, setSelected] =useState(null);

    function handleSelection(getCurrentId){
        setSelected(getCurrentId===selected ? null : getCurrentId)
    }

  return (
    <>
        <div className="my-auto mx-auto max-w-fit rounded bg-white overflow-hidden shadow-lg px-5 py-5">
        <Header/>
      {data && data.length > 0 ? (
        data.map((dataItem) => (
          <div className="item">
            <div
              onClick={() => handleSelection(dataItem.id)}
              className="flex gap-2 font-bold mt-3 cursor-pointer hover:text-violet-600 text-sm"
              
            >
                <h4>{dataItem.question}</h4>
                <span>{selected=== dataItem.id ? <MinusIcon/> : <PlusIcon/>} </span>
            </div>
            {
               selected  === dataItem.id ?   ( <div className="text-xs mt-3 text-gray-500 max-w-prose">{dataItem.answer}</div> ) : null
            }
            <div className="border-b mt-4"></div>
          </div>
        ))
      ) : (
        <div>No data found</div>
      )}
      
    </div>
    <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://github.com/bahati7/">Philemon Bahati</a>.
  </div>
    </>
    
  );
};

export default Accordian;
