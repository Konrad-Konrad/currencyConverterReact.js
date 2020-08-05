import React from "react"
import "./style.css"

const Form = ({ selectDescription, inputDescription, buttonDescription, outcomeDescription }) => (
    <form className="form">
        <p className="form__paragraph">
        <p>
      <label> {selectDescription}<select name="Waluta" class="js-currency form__select">
          <option value="USD">Dolar</option>
          <option value="EUR">Euro</option>
        </select></label></p>
        <label>
            {inputDescription}
            <input
                className="js-amount form__select"
                value="500"
                type="number"
                step="0.01"
                min="f0.01"
                max="1000000"
                placeholder="500"
                required
            />
        </label>
    </p>

        <button className="form__button">
            {buttonDescription}
        </button>

        <p>{outcomeDescription}
            <strong className="js-outcome">N/D</strong></p>
            </form>
        
        
);

export default Form;
