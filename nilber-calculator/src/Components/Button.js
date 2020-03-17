import React from 'react';
import classNames from 'classnames'
import '../CSS/Button.css'

const Button = ({key, name, value, onButtonClick}) => {

    let buttonClass = classNames(name, "button")

    return (
        <button className={buttonClass} key={key} name={name} value={value} onClick={onButtonClick}>{value}</button>
    )
}

export default Button