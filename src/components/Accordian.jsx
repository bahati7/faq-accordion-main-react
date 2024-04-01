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
    <div className="my-auto mx-auto w-[400px]  rounded overflow-hidden shadow-lg px-5 py-5">
        <Header/>
      {data && data.length > 0 ? (
        data.map((dataItem) => (
          <div className="item">
            <div
              onClick={() => handleSelection(dataItem.id)}
              className="flex gap-2 font-bold mt-3 cursor-pointer hover:text-violet-600 underline text-xs"
              
            >
                <h3  className="">{dataItem.question}</h3>
                <span>{selected? <MinusIcon/> : <PlusIcon/>} </span>
            </div>
            {
               selected  === dataItem.id ?   ( <div className="content">{dataItem.answer}</div> ) : null
            }
          </div>
        ))
      ) : (
        <div>No data found</div>
      )}
    </div>
  );
};

export default Accordian;
