import React, { useCallback, useState } from "react";
import { Incrementar } from "./Incrementar";

export const CallbackComponent = () => {
  const [counter, setCounter] = useState(0);

  const incrementarPadre=useCallback((val)=>{
    setCounter(contador=>contador+val)
  },[])
  return (
    <>
    <h2>Contador:{counter}</h2>
      <Incrementar incrementar={incrementarPadre}/>
    </>
  );
};
