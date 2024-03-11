import styles from './Dropdown.module.scss';
import dropdown_icon from '../../../assets/icons/dropdown_icon.svg';

type DropdownProps = {
    className: string;
    label: {
        text?: string;
        for: string;
    };
    options: string[];
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

function Dropdown({ className, label, options, value, onChange }: DropdownProps) {
    return (
        <form className={className + ' ' + styles.dropdownContainer}>
            <label htmlFor={label?.for}>
                {label.text}
                <select className={styles.dropdown} value={value} onChange={onChange}>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <img className={styles.dropdownIcon} draggable={false} loading="lazy" src={dropdown_icon} alt="Down arrow" />
            </label>
        </form>
    );
}

export default Dropdown;
