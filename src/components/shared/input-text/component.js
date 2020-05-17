import React, { useState } from "react";
import "./input-text.css";

const InputText = ({
    value = "",
    id = "",
    text = "",
    placeholder = "",
    onChange = () => { },
    onBlurCallback = () => { },
    validator = () => { },
    errorMessage = "",
    inputRef,
    onFocusCallback = () => { },
    maxLength = 30,
    onKeyPress = () => { },
    type = "text"
    // validationError = false
}) => {
    const [isTouched, setIsTouched] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState(errorMessage);

    const onChangeHandler = (e) => {
        const inputValue = e.target.value;
        if (validator(inputValue)) {
            setHasError(false);
            setError("");
        } else {
            setHasError(true);
            setError(errorMessage);
        }
        onChange(e);
    };

    const onFocus = () => {
        setIsTouched(true);
        onFocusCallback();
    };

    const onBlur = (e) => {
        onBlurCallback(e.target.value);
    };

    return (
        <div>
            <input
                ref={inputRef}
                id={id}
                placeholder={placeholder}
                type={type}
                className="form-control"
                value={value}
                maxLength={maxLength}
                onChange={onChangeHandler}
                onFocus={(e) => onFocus(e)}
                onBlur={(e) => onBlur(e)}
                autoComplete="off"
                onKeyPress={(e) => onKeyPress(e)}
            />
            <label>{text}</label>
        </div>
    );
};

export default InputText;