import { UseFormRegisterReturn } from 'react-hook-form';
import { InputHTMLAttributes } from 'react';
import styles from './Textarea.module.scss';

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
    register: UseFormRegisterReturn<string>;
    error?: boolean;
}

function Textarea({ register, error, ...props }: TextareaProps) {
    return <textarea className={error ? styles.textareaError : styles.textarea} {...register} {...props} />;
}

export default Textarea;
