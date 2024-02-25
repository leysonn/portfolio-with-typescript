import styles from './Button.module.scss';

type ButtonProps = {
    children: string | JSX.Element | JSX.Element[];
    className?: string;
    width: number;
    color: 'light' | 'dark' | 'light_accent' | 'dark_accent';
    onClick?(): void;
}

function Button({ children, className, width, color, onClick }: ButtonProps) {
    return (
        <button style={{ width: width + 'rem' }} className={`${styles[color]} ${className}`} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
