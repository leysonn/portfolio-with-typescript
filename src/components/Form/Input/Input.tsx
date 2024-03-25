import { UseFormRegisterReturn } from 'react-hook-form';
import styles from './Input.module.scss';

type InputProps = {
    register: UseFormRegisterReturn<string>;
    placeholder: string;
};

function Input({ register, placeholder }: InputProps) {
    return <input className={styles.input} placeholder={placeholder} {...register} />;
}

export default Input;
