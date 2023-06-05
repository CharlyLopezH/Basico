import { useState } from "react";

export const useSumar=(valor)=> {
console.log('En la función externa...');
const [count, setCount] = useState(valor);
const incrementar = () => {
    setCount(count + 1);
  };
  return [count, incrementar];
}
