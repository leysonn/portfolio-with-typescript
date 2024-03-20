import { useCallback, useState } from 'react';
import { faqList } from './faqList';
import styles from './Faq.module.scss';
import FaqItem from './FaqItem/FaqItem';

function Faq() {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const toggleIsExpanded = useCallback((index: number) => setCurrentQuestion(currentQuestion => (currentQuestion === index ? NaN : index)), []);

    return (
        <article className={styles.faq}>
            {faqList.map((question, index) => (
                <FaqItem
                    key={index}
                    title={question.title}
                    description={question.description}
                    isExpanded={currentQuestion === index}
                    toggleIsExpanded={() => toggleIsExpanded(index)}
                />
            ))}
        </article>
    );
}

export default Faq;
