import logo1 from '../assets/images/partners/logo1.png';
import logo2 from '../assets/images/partners/logo2.png';
import logo3 from '../assets/images/partners/logo3.png';
import logo4 from '../assets/images/partners/logo4.png';
import logo5 from '../assets/images/partners/logo5.png';

type partnersListItem = {
    image: string,
    url: string,
    name: string,
}

export const partnersList: partnersListItem[] = [
    {
        image: logo1,
        url: "#!",
        name: "Digitalside",
    },
    {
        image: logo2,
        url: "#!",
        name: "Vortex",
    },
    {
        image: logo3,
        url: "#!",
        name: "Travel Explorer",
    },
    {
        image: logo4,
        url: "#!",
        name: "Fuzion",
    },
    {
        image: logo5,
        url: "#!",
        name: "MediaFury",
    },
]