import React, { AllHTMLAttributes, PropsWithChildren } from 'react';
import classNames from 'classnames';

import Title from '../Title';
import Button from '../Button';
import { ReactComponent as Close } from '../../assets/icons/close.svg';

import cl from './Modal.module.css';

interface IModalProps extends PropsWithChildren, AllHTMLAttributes<HTMLDivElement> {
    title: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
    cancelText?: string;
    okText?: string;
    onOk?: () => void;
    onCancel?: () => void;
    okDisabled?: boolean;
}

const Modal = (props: IModalProps): JSX.Element => {
    const { title, visible, setVisible, cancelText = 'Отмена', okText = 'Ок', onCancel, onOk, okDisabled = false } = props;

    const handleClose = (): void => {
        return setVisible(false);
    };

    return (
        <div className={classNames(cl.modal, visible && cl.modal__visible)}>
            <div className={classNames(cl.modal__window, props.className)}>
                <div className={cl.modal__window__header}>
                    <Title className={cl.modal__window__header_title}>{title}</Title>
                    <Button ghost onClick={onCancel || handleClose}><Close /></Button>
                </div>
                <div className={cl.modal__window__content}>{ props.children }</div>
                <div className={cl.modal__window__footer}>
                    <Button className={cl.modal__window__footer_btn} ghost onClick={onCancel || handleClose}>{cancelText}</Button>
                    <Button className={cl.modal__window__footer_btn} onClick={onOk} disabled={okDisabled}>{okText}</Button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
