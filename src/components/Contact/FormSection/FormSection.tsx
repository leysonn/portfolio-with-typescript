import { useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { projectsList } from '../../../constants/projectsList';
import styles from './FormSection.module.scss';
import Button from '../../Button/Button';
import Input from '../../Form/Input/Input';
import Textarea from '../../Form/Textarea/Textarea';
import Dropdown from '../../Form/Dropdown/Dropdown';
import map_image from '../../../assets/images/map.png';
import poi_icon from '../../../assets/icons/poi_icon.svg';

type Inputs = {
    email: string;
    subject: string;
    message: string;
};

function FormSection() {
    const [dropdownValue, setDropdownValue] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = useCallback(data => {
        console.log(data);
        setSubmitted(true);
    }, []);

    const handleDropdownChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>): void => {
        setDropdownValue(event.currentTarget.value);
    }, []);

    return (
        <section className={styles.formSection}>
            <div className={styles.wrapper}>
                <div className={styles.formContent}>
                    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                        <h3 className={styles.title}>Get in touch</h3>
                        <Input
                            placeholder="Your email"
                            register={register('email', {
                                required: true,
                                pattern: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
                            })}
                            error={!!errors.email}
                            disabled={submitted}
                        />
                        <Dropdown
                            register={register('subject', { required: true, onChange: handleDropdownChange })}
                            options={projectsList.types}
                            defaultValue="Subject"
                            value={dropdownValue}
                            error={!!errors.subject}
                            disabled={submitted}
                        />
                        <Textarea
                            placeholder="Message"
                            register={register('message', { required: true })}
                            error={!!errors.message}
                            disabled={submitted}
                        />
                        <Button className={submitted ? styles.buttonSubmitted : styles.button} color="light_accent" width={9.62} disabled={submitted}>
                            {submitted ? `Submitted ✔` : 'Submit Now'}
                        </Button>
                    </form>
                    <div className={styles.poiContainer}>
                        <img className={styles.poi} src={poi_icon} alt="POI Icon" draggable={false} />
                    </div>
                </div>
            </div>
            <img className={styles.map} src={map_image} alt="Map" draggable={false} />
        </section>
    );
}

export default FormSection;
