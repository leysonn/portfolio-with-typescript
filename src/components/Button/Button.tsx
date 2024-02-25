import styles from './Button.module.scss';

interface IButtonProps {
    width: number;
    content: string;
    color: 'light' | 'dark' | 'light_accent' | 'dark_accent';
    onCLick?(): void;
}

function Button({ width, content, color, onCLick }: IButtonProps) {
    return (
        <button style={{ width: width + 'rem' }} className={styles[color]} onClick={onCLick}>
            {content}
        </button>
    );
}

export default Button;
