import { MouseEvent } from 'react';
import clsx from 'clsx';
import styles from './TypeSelector.module.scss';

type TypeSelectorProps = {
    type: string;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
    count: number;
    active: boolean;
};

function TypeSelector({ type, onClick, count, active }: TypeSelectorProps) {
    return (
        <div className={styles.typeSelector}>
            <button className={clsx(active && styles.active)} onClick={onClick}>
                {type}
            </button>
            <span className={styles.count}>{count}</span>
        </div>
    );
}

export default TypeSelector;
