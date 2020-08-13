import React from 'react';
import Header from "./Header";
import { Form } from "./Form";
import { currencies } from './currencies.js';


function App() {
  return (
    <div className="body">
      <Header
        headerH1="Kalkulator walut"
      />
      <Form
        selectDescription="Wybierz walutę:"
        inputDescription="Wpisz wartość:"
        buttonDescription="Przelicz kurs"
        outcomeDescription="Otrzymasz"
      />


    </div>
  );
};


export default App;
