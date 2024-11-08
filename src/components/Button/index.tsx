import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

import cl from './Button.module.css';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button = (props: IButtonProps): JSX.Element => {
    return (
        <button className={classNames(cl.button, props.className)} onClick={props.onClick}>{props.children}</button>
    );
}

export default Button;
