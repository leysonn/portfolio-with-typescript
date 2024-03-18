import graham_avatar from '../../../assets/images/comments/graham.png'
import alan_avatar from '../../../assets/images/comments/alan.png'
import richardo_avatar from '../../../assets/images/comments/richardo.png'

export type Comment = {
    avatar: string;
    name: string;
    company: string;
    comment: string;
};

export const commentsList: Comment[] = [
    {
        avatar: graham_avatar,
        name: 'Graham Griffiths',
        company: 'Twitor',
        comment: 'Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety.',
    },
    {
        avatar: alan_avatar,
        name: 'Alan Martí',
        company: 'Meta Inc.',
        comment:
            'A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you. A digital agency is a business you hire to outsource your digital marketing efforts, ',
    },
    {
        avatar: richardo_avatar,
        name: 'Richardo Kann',
        company: 'Photogram',
        comment: 'Provide your business with a variety of digital solutions to promote your product or service online.',
    },
];
