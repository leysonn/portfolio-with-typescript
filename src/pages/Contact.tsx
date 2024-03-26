import FaqSection from '../components/Contact/FaqSection/FaqSection';
import FormSection from '../components/Contact/FormSection/FormSection';
import InfoSection from '../components/Contact/InfoSection/InfoSection';
import Title from '../components/Title/Title';

function Contact() {
    return (
        <main>
            <Title>Contact</Title>
            <FormSection />
            <InfoSection />
            <FaqSection />
        </main>
    );
}

export default Contact;
