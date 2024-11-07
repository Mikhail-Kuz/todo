import React, { HTMLProps, PropsWithChildren } from 'react';
import classNames from 'classnames';

import cl from './Title.module.css';

interface ITitleProps extends PropsWithChildren {
    className?: string;
} 

const Title = ({ className, children }: ITitleProps): JSX.Element => {
    return (
        <div className={classNames(cl.title, className)}>
            { children }
        </div>
    );
}

export default Title;
