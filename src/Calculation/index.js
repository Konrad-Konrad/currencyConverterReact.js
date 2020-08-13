import React {useState} from "react";
import "./style.css"
import { Form } from "./Form";
import { currencies } from "../currencies.js"

function Calculate();

const [result, setResult] = useState();

const calculateResult = (currency, amount) => {

  const rate = currencies
    .find(({ short }) => short === currency)
    .rate;

  setResult({
    sourceAmount: +amount,
    targetAmount: amount / rate,
    currency,
  });
};

export { result, calculateResult }
