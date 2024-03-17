import { useCallback, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { teamList } from './teamList';
import styles from './TeamCarousel.module.scss';
import EmployeeCard from './EmployeeCard/EmployeeCard';
import left_arrow from '../../../assets/icons/left_arrow_icon.svg';
import right_arrow from '../../../assets/icons/right_arrow_icon.svg';

function TeamCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    // swipe handlers
    function handleSwipe(direction: 'left' | 'right'): void {
        if (direction === 'left') {
            setActiveIndex(prevIndex => (prevIndex === teamList.length - 1 ? prevIndex : prevIndex + 1));
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
    }, []);

    const handleButtonRight = useCallback((): void => {
        setActiveIndex(prevIndex => (prevIndex === teamList.length - 1 ? prevIndex : prevIndex + 1));
    }, []);

    return (
        <section className={styles.teamCarousel}>
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <span className={styles.name}>Our Team</span>
                    <h2 className={styles.title}>Team of Designers and Developers</h2>
                </div>
                <div className={styles.buttonsContainer}>
                    <button className={styles.button} onClick={handleButtonLeft}>
                        <img className={styles.icon} src={left_arrow} alt="Left arrow icon" draggable={false} />
                    </button>
                    <button className={styles.button} onClick={handleButtonRight}>
                        <img className={styles.icon} src={right_arrow} alt="Right arrow icon" draggable={false} />
                    </button>
                </div>
            </div>
            <div className={styles.carousel} {...swipeHandlers}>
                <div className={styles.carouselContainer} style={{ transform: `translateX(-${activeIndex * 18.75}rem)` }}>
                    {teamList.map((employee, index) => (
                        <EmployeeCard key={index} name={employee.name} role={employee.role} image={employee.image} />
                    ))}
                </div>
            </div>
            <div className={styles.dotsContainer}>
                {teamList.map((_, index) => (
                    <div key={index} className={index === activeIndex ? styles.dotActive : styles.dot} onClick={() => setActiveIndex(index)} />
                ))}
            </div>
        </section>
    );
}

export default TeamCarousel;
