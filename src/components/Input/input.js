import React from 'react';
import countries from "countries-list";

import './input.css';

const input = (props) => {
    let inputElement = null;
    let count = [];
    if (props.elementType === "select") {
        Object.keys(countries.countries).map(code => {
            return count.push(countries.countries[code].name);
        });
        count.sort();
    }


    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={`InputElement
                ${(props.invalid && props.shouldValidate && props.touched) ?
                        "Invalid" : ""}`}
                {...props.elementConfig}
                placeholder=" "
                value={props.value}
                onChange={props.changed} autoComplete="on" />;
            break;
        case ('textarea'):
            inputElement = <textarea
                className="Input"
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ('select'):
            inputElement = (
                <select
                    className="country"
                    value={props.value}
                    onChange={props.changed}>
                    {count.map(cod =>
                        <option key={cod} value={cod}>
                            {cod}
                        </option>
                    )

                    }
                </select>
            );

            break;
        default:
            inputElement = <input
                className="Input"
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div className={`field ${props.column}`}>
            <label className="Label">{props.label}</label>
            {inputElement}
            <span className="floating-label">{props.placeholder}</span>
            <span className="error">{props.errormsg}</span>
        </div>
    );

};

export default input;