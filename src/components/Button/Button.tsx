import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: string | JSX.Element | JSX.Element[];
    width: number;
    color: 'light' | 'dark' | 'light_accent' | 'dark_accent' | 'light_transparent' | 'dark_transparent';
}

function Button({ children, className, width, color, ...props }: ButtonProps) {
    return (
        <button style={{ width: width + 'rem' }} className={styles[color] + (className ? ' ' + className : '')} {...props}>
            {children}
        </button>
    );
}

export default Button;
