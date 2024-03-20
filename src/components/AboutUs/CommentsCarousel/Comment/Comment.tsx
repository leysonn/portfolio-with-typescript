import styles from './Comment.module.scss';
import star from '../../../../assets/icons/star.svg';

type CommentProps = {
    comment: string;
    user: {
        name: string;
        company: string;
        avatar: string;
    };
    active: boolean;
};

function Comment({ comment, user, active }: CommentProps) {
    const stars: JSX.Element[] | null = [];
    for (let i = 0; i < 5; i++) {
        stars.push(<img className={styles.star} src={star} alt="Star" />);
    }

    return (
        <article className={styles.comment + (active ? ' ' + styles.active : '')}>
            <div className={styles.stars}>{stars}</div>
            <p className={styles.commentText}>{comment}</p>
            <div className={styles.user}>
                <img className={styles.avatar} src={user.avatar} alt={user.name + ' avatar'} draggable={false} />
                <div className={styles.userDetails}>
                    <h3 className={styles.name}>{user.name}</h3>
                    <span className={styles.company}>{user.company}</span>
                </div>
            </div>
        </article>
    );
}

export default Comment;
