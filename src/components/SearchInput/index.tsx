import React, { InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import cl from './SearchInput.module.css';

interface ISearchInputProps extends InputHTMLAttributes<HTMLInputElement> {

}

const SearchInput = (props: ISearchInputProps): JSX.Element => {
    return (
        <div className={classNames(cl.input, props.className)}>
            <input type='text' {...props} />
        </div>
    );
}

export default SearchInput;
