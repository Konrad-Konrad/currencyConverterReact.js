import React from 'react'
import './style.css'
import { currencies } from "../currencies";
import { Result } from "../Result";

export const Form =
    ({ result, calculateResult, selectDescription, inputDescription, buttonDescription, outcomeDescription }) => {

        const [currency, setCurrency] = useState(currencies[0].short);
        const [amount, setAmount] = useState("");

        const onSubmit = (event) => {
            event.preventDefault();
            calculateResult(currency, amount);
        }
        return (
            <form className="form" onSubmit={onSubmit}>
                <p className="form__paragraph">
                    <p>
                        <label> {selectDescription}
                            <select
                                name="Waluta"
                                class="form__select"
                                onChange={({ target }) => setCurrency(target.value)}
                            >
                                {currencies.map((currency => (
                                    <option
                                        key={currency.short}
                                        value={currency.short}
                                    >
                                        {currency.name}
                                    </option>
                                )))}
                            </select></label></p>
                    <label>
                        {inputDescription}
                        <input
                            className="form__select"
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            type="number"
                            step="0.01"
                            min="f0.01"
                            max="1000000"
                            placeholder="Podaj kwotę w złotych"
                            required
                        />
                    </label>
                </p>

                <button className="form__button">
                    {buttonDescription}
                </button>

                <p>{outcomeDescription}
                    <strong>
                        <Result result={result}/>
                        </strong></p>
            </form>


        );
    }