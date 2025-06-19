import { classNames } from "shared/lib/classNames/classNames"
import cls from './Template.module.scss'
import { FC } from "react"

interface TemplateProps {
    className?: string
}

export const Template: FC<TemplateProps> = (props) => {
    const {
        className, 
    } = props

    return (
        <div className={classNames(cls.Template, {},[className])}>
        </div>
    )
}