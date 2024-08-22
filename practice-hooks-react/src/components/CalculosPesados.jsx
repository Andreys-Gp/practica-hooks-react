import { useMemo, useState } from "react";

export const CalculosPesados = () => {
  const [listaNumeros, setListaNumeros] = useState([
    2, 3, 4, 5, 6, 7, 8, 2, 6, 7, 8,
  ]);
  const [show, setShow] = useState(true);

  /* const getCalculo = (listaNumeros) =>
    useMemo(() => {
      console.log("calculando");
      return listaNumeros.reduce((a, b) => a * b);
    }, [listaNumeros]); */

  //corregida custon hook

  const useCalculo = (listaNumeros) => {
    const resultado = useMemo(() => {
      console.log("calculando");
      return listaNumeros.reduce((a, b) => a * b);
    }, [listaNumeros]);
    return resultado , console.log(resultado)
    ;
  };

  const calculo=useCalculo(listaNumeros)

  const agregarNumero = () => {
    setListaNumeros([...listaNumeros, listaNumeros[listaNumeros.length - 1] + 1]);
    console.log(listaNumeros);
  };

  return (
    <>
      <h2>Calculo:</h2>
      <p>{calculo}</p>
      <button onClick={() => setShow(!show)}>{show ? "Show" : "Hide"}</button>
      <button onClick={() => agregarNumero()}>agregarNumero</button>
    </>
  );
};
