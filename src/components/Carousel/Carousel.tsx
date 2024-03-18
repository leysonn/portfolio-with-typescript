import { useCallback } from 'react';
import { useSwipeable } from 'react-swipeable';
import styles from './Carousel.module.scss';
import left_arrow from '../../assets/icons/left_arrow_icon.svg';
import right_arrow from '../../assets/icons/right_arrow_icon.svg';

type List = Array<{ [key: string]: string }>;

type CarouselProps = {
    list: List;
    buttons?: boolean;
    titleContainer: {
        name: string;
        title: string;
        className?: string;
    };
    carousel: {
        content: (item: List[number], index: number) => JSX.Element;
        itemWidth: number;
        className: string;
        containerClassName: string;
    };
    activeIndex: number;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
};

function Carousel({ list, buttons = false, titleContainer, carousel, activeIndex, setActiveIndex }: CarouselProps) {
    // swipe handlers
    function handleSwipe(direction: 'left' | 'right'): void {
        if (direction === 'left') {
            setActiveIndex(prevIndex => (prevIndex === list.length - 1 ? prevIndex : prevIndex + 1));
        } else if (direction === 'right') {
            setActiveIndex(prevIndex => (prevIndex === 0 ? prevIndex : prevIndex - 1));
        }
    }

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => handleSwipe('left'),
        onSwipedRight: () => handleSwipe('right'),
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

    // button handlers
    const handleButtonLeft = useCallback((): void => {
        setActiveIndex(prevIndex => (prevIndex === 0 ? prevIndex : prevIndex - 1));
    }, [setActiveIndex]);

    const handleButtonRight = useCallback((): void => {
        setActiveIndex(prevIndex => (prevIndex === list.length - 1 ? prevIndex : prevIndex + 1));
    }, [setActiveIndex, list]);

    return (
        <section className={styles.teamCarousel}>
            <div className={styles.container}>
                <div className={styles.titleContainer + (titleContainer.className ? ' ' + titleContainer.className : '')}>
                    <span className={styles.name}>{titleContainer.name}</span>
                    <h2 className={styles.title}>{titleContainer.title}</h2>
                </div>
                {buttons && (
                    <div className={styles.buttonsContainer}>
                        <button className={styles.button} onClick={handleButtonLeft}>
                            <img className={styles.icon} src={left_arrow} alt="Left arrow icon" draggable={false} />
                        </button>
                        <button className={styles.button} onClick={handleButtonRight}>
                            <img className={styles.icon} src={right_arrow} alt="Right arrow icon" draggable={false} />
                        </button>
                    </div>
                )}
            </div>
            <div className={`${styles.carousel} ${carousel.className}`} {...swipeHandlers}>
                <div
                    className={`${styles.carouselContainer} ${carousel.containerClassName}`}
                    style={{ transform: `translateX(-${activeIndex * carousel.itemWidth}rem)` }}
                >
                    {list.map(carousel.content)}
                </div>
            </div>
            <div className={styles.dotsContainer}>
                {list.map((_, index) => (
                    <div key={index} className={index === activeIndex ? styles.dotActive : styles.dot} onClick={() => setActiveIndex(index)} />
                ))}
            </div>
        </section>
    );
}

export default Carousel;
