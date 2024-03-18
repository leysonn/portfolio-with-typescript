import { commentsList } from './commentsList';
import styles from './CommentsCarousel.module.scss';
import Carousel from '../../Carousel/Carousel';
import Comment from './Comment/Comment';
import { useState } from 'react';

function CommentsCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Carousel
            list={commentsList}
            width='screen'
            titleContainer={{ name: 'Testimonials', title: 'What Our Clients Saying', className: styles.titleContainer }}
            carousel={{
                content: (item, index) => (
                    <Comment
                        key={index}
                        comment={item.comment}
                        user={{ name: item.name, company: item.company, avatar: item.avatar }}
                        active={index === activeIndex}
                    />
                ),
                itemWidth: "100%",
                className: styles.carousel,
                containerClassName: styles.carouselContainer,
                wrapperClassName: styles.carouselWrapper,
            }}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
        />
    );
}

export default CommentsCarousel;
