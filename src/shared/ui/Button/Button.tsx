import {classNames} from "shared/lib/className/classNames";
import * as cls from './Button.module.scss';
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton {
	CLEAR = 'clear',

}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
	className?: string,
	theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
	const { className, theme, children, ...otherProps } = props;

	return (
			<button
					className={classNames(cls.button, {}, [cls[theme]])}
					{...otherProps}
			>
				{children}
			</button>
	);
};