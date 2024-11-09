import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

import cl from './Button.module.css';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    ghost?: boolean;
}

const Button = (props: IButtonProps): JSX.Element => {
    return (
        <button {...props} className={classNames(cl.button, props.className, props.ghost && cl.ghost)} onClick={props.onClick}>{props.children}</button>
    );
}

export default Button;
