import { UseFormRegisterReturn } from 'react-hook-form';
import { SelectHTMLAttributes } from 'react';
import styles from './Dropdown.module.scss';
import dropdown_icon from '../../../assets/icons/dropdown_icon.svg';
import clsx from 'clsx';

interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
    register: UseFormRegisterReturn<string>;
    options: string[];
    defaultValue?: string;
    error?: boolean;
}

function Dropdown({ options, defaultValue, register, error, value, ...props }: DropdownProps) {
    return (
        <div className={styles.dropdownContainer}>
            <select
                className={clsx(error ? styles.dropdownError : styles.dropdown, value === '' && styles.defaultValue)}
                value={value}
                {...register}
                {...props}
            >
                {defaultValue && (
                    <option value="" disabled hidden>
                        {defaultValue}
                    </option>
                )}
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <img className={styles.dropdownIcon} draggable={false} loading="lazy" src={dropdown_icon} alt="Down arrow" />
        </div>
    );
}

export default Dropdown;
