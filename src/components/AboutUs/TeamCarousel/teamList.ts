import azah_photo from '../../../assets/images/team/azah.png';
import roelof_photo from '../../../assets/images/team/roelof.png';
import leonardo_photo from '../../../assets/images/team/leonardo.png';
import izabella_photo from '../../../assets/images/team/izabella.png';

export type TeamListItem = {
    name: string;
    role: string;
    image: string;
};

export const teamList: TeamListItem[] = [
    {
        name: 'Azah Anyeni',
        role: 'Designer',
        image: azah_photo,
    },
    {
        name: 'Roelof Bekkenenks',
        role: 'React Developer',
        image: roelof_photo,
    },
    {
        name: 'Leonardo Oliveira',
        role: 'Illustrator',
        image: leonardo_photo,
    },
    {
        name: 'Izabella Tabakova',
        role: 'Product Designer',
        image: izabella_photo,
    },
];
