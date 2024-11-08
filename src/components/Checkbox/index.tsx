import React, { InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import cl from './Checkbox.module.css';

interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {

}

const Checkbox = (props: ICheckboxProps): JSX.Element => {
    return (
        <input className={classNames(cl.checkbox, props.className)} type="checkbox" {...props} />
    );
}

export default Checkbox;
