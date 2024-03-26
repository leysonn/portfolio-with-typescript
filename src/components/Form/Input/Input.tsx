import { UseFormRegisterReturn } from 'react-hook-form';
import { InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    register: UseFormRegisterReturn<string>;
    error?: boolean;
}

function Input({ register, error, ...props }: InputProps) {
    return <input className={error ? styles.inputError : styles.input} {...register} {...props} />;
}

export default Input;
