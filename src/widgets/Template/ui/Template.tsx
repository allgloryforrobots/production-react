import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import cls from './Template.module.scss';

interface TemplateProps {
    className?: string
}

export const Template: FC<TemplateProps> = (props) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.Template, {}, [className])} />
    );
};
