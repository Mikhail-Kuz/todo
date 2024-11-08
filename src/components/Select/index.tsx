import React from 'react';
import classNames from 'classnames';

import Button from '../Button';
import { ReactComponent as Down } from '../../assets/icons/down.svg';
import { ReactComponent as Up } from '../../assets/icons/up.svg';

import cl from './Select.module.css';

export type SelectValue = {
    key: string | number;
    value: string | number;
    label: string;
}

interface ISelectProps {
    value: SelectValue;
    options: SelectValue[];
    className?: string | undefined;
    visible?: boolean;
}

const Select = (props: ISelectProps): JSX.Element => {
    const { className, value, options, visible = false } = props;

    const [selectedValue, setSelectedValue] = React.useState(value);
    const [show, setShow] = React.useState(visible);

    const handleChangeVisible = (): void => {
        return setShow(!show);
    };

    const handleChange = (item: SelectValue) => (): void => {
        setShow(!show);
        return setSelectedValue(item);
    };

    return (
        <div className={classNames(cl.select, className)}>
            <div className={cl.selectHeader}>
                { selectedValue.label}
                <Button className={cl.selectHeader__btn} onClick={handleChangeVisible}>{show ? <Up /> : <Down />}</Button>
            </div>
            <div className={classNames(cl.select__options, show && cl.visible)}>
                { options.map((item) => 
                    <div className={classNames(cl.select__options__item, item.value === selectedValue.value && cl.active)} key={item.key} onClick={handleChange(item)}>
                        {item.label}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Select;
