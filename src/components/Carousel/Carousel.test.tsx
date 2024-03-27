import { useState } from 'react';
import { fireEvent, render, renderHook, screen, waitFor } from '../../utils/test-utils';
import Carousel from './Carousel';

const list: Array<{ [key: string]: string }> = [
    {
        name: 'Testimonial 1',
        title: 'Testimonial 1',
    },
    {
        name: 'Testimonial 2',
        title: 'Testimonial 2',
    },
    {
        name: 'Testimonial 3',
        title: 'Testimonial 3',
    },
];

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
    const { result } = renderHook(() => useState(0));
    const [activeIndex, setActiveIndex] = result.current;

    render(
        <Carousel
            list={list}
            width="screen"
            titleContainer={{ name: 'Testimonials', title: 'What Our Clients Saying' }}
            carousel={{
                content: (_, index) => <div key={index} />,
                itemWidth: '100px',
                className: 'test',
                containerClassName: 'testContainer',
                wrapperClassName: 'testWrapper',
            }}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
        />,
    );
});

describe('Carousel', () => {
    it('should render', () => {
        const carousel = screen.getByTestId('carousel');
        const carouselContainer = screen.getByTestId('carousel-container');

        expect(carousel).toBeInTheDocument();
        expect(carouselContainer).toBeInTheDocument();
    });

    it('check default position', () => {
        const carouselContainer = screen.getByTestId('carousel-container');

        expect(carouselContainer).toHaveStyle(`transform: translateX(calc(-0 * 100px))`);
    });

    it('one swipe left', () => {
        const carousel = screen.getByTestId('carousel');
        const carouselContainer = screen.getByTestId('carousel-container');

        swipe('left', carousel);

        waitFor(() => expect(carouselContainer).toHaveStyle(`transform: translateX(calc(-1 * 100px))`));
    });

    it('an extra swipes to the left', () => {
        const carousel = screen.getByTestId('carousel');
        const carouselContainer = screen.getByTestId('carousel-container');

        swipe('left', carousel, list.length + 9);

        waitFor(() => expect(carouselContainer).toHaveStyle(`transform: translateX(calc(-${list.length - 1} * 100px))`));
    });

    it('one swipe right', () => {
        const carousel = screen.getByTestId('carousel');
        const carouselContainer = screen.getByTestId('carousel-container');

        swipe('left', carousel, 2);
        swipe('right', carousel);

        waitFor(() => expect(carouselContainer).toHaveStyle(`transform: translateX(calc(-1 * 100px))`));
    });

    it('an extra swipes to the right', () => {
        const carousel = screen.getByTestId('carousel');
        const carouselContainer = screen.getByTestId('carousel-container');

        swipe('right', carousel, 10);

        waitFor(() => expect(carouselContainer).toHaveStyle(`transform: translateX(calc(-0 * 100px))`));
    });
});
