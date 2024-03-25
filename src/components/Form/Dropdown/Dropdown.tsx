import { UseFormRegisterReturn } from 'react-hook-form';
import styles from './Dropdown.module.scss';
import dropdown_icon from '../../../assets/icons/dropdown_icon.svg';

type DropdownProps = {
    register: UseFormRegisterReturn<string>;
    options: string[];
    value: string;
    defaultValue?: string;
};

function Dropdown({ options, value, defaultValue, register }: DropdownProps) {
    return (
        <div className={styles.dropdownContainer}>
            <select className={styles.dropdown + (value === '' ? ' ' + styles.defaultValue : '')} value={value} {...register}>
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
