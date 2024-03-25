import { UseFormRegisterReturn } from 'react-hook-form';
import styles from './Textarea.module.scss';

type TextareaProps = {
    register: UseFormRegisterReturn<string>;
    placeholder: string;
};

function Textarea({ register, placeholder }: TextareaProps) {
    return <textarea className={styles.textarea} placeholder={placeholder} {...register} />;
}

export default Textarea;
