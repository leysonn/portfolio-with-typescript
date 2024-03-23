import { fireEvent, render, screen } from '../../../utils/test-utils';
import TeamCarousel from './TeamCarousel';

function swipe(direction: 'left' | 'right', element: HTMLElement, times: number = 1): void {
    for (let i = 0; i < times; i++) {
        fireEvent.touchStart(element, {
            touches: [{ clientX: direction === 'left' ? 100 : 0, clientY: 100 }],
        });

        fireEvent.touchMove(element, {
            touches: [{ clientX: direction === 'left' ? 0 : 100, clientY: 100 }],
        });

        fireEvent.touchEnd(element);
    }
}

beforeEach(() => {
    render(<TeamCarousel />);
});

describe('TeamCarousel', () => {
    it('should render', () => {
        const carousel = screen.getByTestId('carousel');
        const carouselContainer = screen.getByTestId('carousel-container');

        expect(carousel).toBeInTheDocument();
        expect(carouselContainer).toBeInTheDocument();
    });

    it('check default position', () => {
        const carouselContainer = screen.getByTestId('carousel-container');

        expect(carouselContainer).toHaveStyle(`transform: translateX(calc(-0 * 18.75rem))`);
    });

    it('one swipe left', () => {
        const carousel = screen.getByTestId('carousel');
        const carouselContainer = screen.getByTestId('carousel-container');

        swipe('left', carousel);

        expect(carouselContainer).toHaveStyle(`transform: translateX(calc(-1 * 18.75rem))`);
    });

    it('an extra swipes to the left', () => {
        const carousel = screen.getByTestId('carousel');
        const carouselContainer = screen.getByTestId('carousel-container');
        const employees = screen.getAllByTestId('employee-card');

        swipe('left', carousel, employees.length + 9);

        expect(carouselContainer).toHaveStyle(`transform: translateX(calc(-${employees.length - 1} * 18.75rem))`);
    });

    it('one swipe right', () => {
        const carousel = screen.getByTestId('carousel');
        const carouselContainer = screen.getByTestId('carousel-container');

        swipe('left', carousel, 2);
        swipe('right', carousel);

        expect(carouselContainer).toHaveStyle(`transform: translateX(calc(-1 * 18.75rem))`);
    });

    it('an extra swipes to the right', () => {
        const carousel = screen.getByTestId('carousel');
        const carouselContainer = screen.getByTestId('carousel-container');

        swipe('right', carousel, 10);

        expect(carouselContainer).toHaveStyle(`transform: translateX(calc(-0 * 18.75rem))`);
    });
});
