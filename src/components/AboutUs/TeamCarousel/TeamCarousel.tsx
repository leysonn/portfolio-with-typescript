import { teamList } from './teamList';
import styles from './TeamCarousel.module.scss';
import EmployeeCard from './EmployeeCard/EmployeeCard';
import Carousel from '../../Carousel/Carousel';

function TeamCarousel() {
    return (
        <Carousel
            list={teamList}
            buttons
            titleContainer={{ name: 'Our Team', title: 'Team of Designers and Developers', className: styles.titleContainer }}
            carousel={{
                content: (item, index) => <EmployeeCard key={index} name={item.name} role={item.role} image={item.image} />,
                itemWidth: 18.75,
                className: styles.carousel,
                containerClassName: styles.carouselContainer,
            }}
        />
    );
}

export default TeamCarousel;
