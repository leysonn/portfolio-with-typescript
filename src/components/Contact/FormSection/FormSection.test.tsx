import { fireEvent, render, screen, waitFor } from '../../../utils/test-utils';
import FormSection from './FormSection';

async function checkEmail(submitButton: HTMLButtonElement, emailInput: HTMLInputElement, email: string) {
    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.click(submitButton);

    await waitFor(() => expect(emailInput.value).toBe(email));
    expect(emailInput).toHaveClass(/error/i);
}

beforeEach(() => {
    render(<FormSection />);
});

describe('FormSection', () => {
    it('render', () => {
        const formSection = screen.getByTestId('form-section');

        expect(formSection).toBeInTheDocument();
    });

    it('correct data', async () => {
        const emailInput = screen.getByTestId<HTMLInputElement>('email-input');
        const subjectSelect = screen.getByTestId<HTMLSelectElement>('subject-select');
        const messageInput = screen.getByTestId<HTMLInputElement>('message-input');
        const submitButton = screen.getByTestId<HTMLButtonElement>('submit-button');

        fireEvent.change(emailInput, { target: { value: 'test@me.com' } });
        fireEvent.change(subjectSelect, { target: { value: 'Design' } });
        fireEvent.change(messageInput, { target: { value: 'test message' } });

        fireEvent.click(submitButton);

        await waitFor(() => expect(emailInput).toBeDisabled());
        expect(subjectSelect).toBeDisabled();
        expect(messageInput).toBeDisabled();
        expect(submitButton.textContent).toContain('Submitted');
    });

    it('missing data', async () => {
        const emailInput = screen.getByTestId<HTMLInputElement>('email-input');
        const subjectSelect = screen.getByTestId<HTMLSelectElement>('subject-select');
        const messageInput = screen.getByTestId<HTMLInputElement>('message-input');
        const submitButton = screen.getByTestId<HTMLButtonElement>('submit-button');

        fireEvent.click(submitButton);

        await waitFor(() => expect(emailInput).toHaveClass(/error/i));
        expect(subjectSelect).toHaveClass(/error/i);
        expect(messageInput).toHaveClass(/error/i);
        expect(submitButton.textContent).not.toContain('Submitted');
    });

    it('missing one of the required data', async () => {
        const emailInput = screen.getByTestId<HTMLInputElement>('email-input');
        const subjectSelect = screen.getByTestId<HTMLSelectElement>('subject-select');
        const messageInput = screen.getByTestId<HTMLInputElement>('message-input');
        const submitButton = screen.getByTestId<HTMLButtonElement>('submit-button');

        fireEvent.change(emailInput, { target: { value: 'test@me.com' } });
        fireEvent.change(subjectSelect, { target: { value: 'Design' } });

        fireEvent.click(submitButton);

        await waitFor(() => expect(emailInput).not.toHaveClass(/error/i));
        expect(subjectSelect).not.toHaveClass(/error/i);
        expect(messageInput).toHaveClass(/error/i);
    });

    it('invalid email', async () => {
        const emailInput = screen.getByTestId<HTMLInputElement>('email-input');
        const subjectSelect = screen.getByTestId<HTMLSelectElement>('subject-select');
        const messageInput = screen.getByTestId<HTMLInputElement>('message-input');
        const submitButton = screen.getByTestId<HTMLButtonElement>('submit-button');

        fireEvent.change(emailInput, { target: { value: 'test@me' } });
        fireEvent.change(subjectSelect, { target: { value: 'Design' } });
        fireEvent.change(messageInput, { target: { value: 'test message' } });

        fireEvent.click(submitButton);

        await waitFor(() => expect(emailInput).toHaveClass(/error/i));
        expect(subjectSelect).not.toHaveClass(/error/i);
        expect(messageInput).not.toHaveClass(/error/i);

        checkEmail(submitButton, emailInput, 'test@me');
        checkEmail(submitButton, emailInput, 'test @me.com');
        checkEmail(submitButton, emailInput, 'test@tes.t');

        fireEvent.change(emailInput, { target: { value: 'test@me.com' } });

        await waitFor(() => expect(emailInput.value).toBe('test@me.com'));
        expect(emailInput).not.toHaveClass(/error/i);
    });
});
