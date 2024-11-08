import React, { InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import cl from './Input.module.css';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {

}

const Input = (props: IInputProps): JSX.Element => {
    return (
        <div className={classNames(cl.input, props.className)}>
            <input type='text' {...props} />
        </div>
    );
}

export default Input;
