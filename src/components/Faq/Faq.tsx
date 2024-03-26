import { useCallback, useState } from 'react';
import { faqList } from './faqList';
import styles from './Faq.module.scss';
import FaqItem from './FaqItem/FaqItem';

type FaqProps = {
    theme?: 'light' | 'dark';
}

function Faq({ theme = 'dark' }: FaqProps) {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const toggleIsExpanded = useCallback((index: number) => setCurrentQuestion(currentQuestion => (currentQuestion === index ? NaN : index)), []);

    return (
        <article className={styles.faq + ' ' + styles[theme]}>
            {faqList.map((question, index) => (
                <FaqItem
                    key={index}
                    title={question.title}
                    description={question.description}
                    isExpanded={currentQuestion === index}
                    toggleIsExpanded={() => toggleIsExpanded(index)}
                    theme={theme}
                />
            ))}
        </article>
    );
}

export default Faq;
