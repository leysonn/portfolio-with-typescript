import project19_image from '../assets/images/projects/9/project1.png';
import project18_image from '../assets/images/projects/8/project1.png';
import project17_image from '../assets/images/projects/7/project1.png';
import project16_image from '../assets/images/projects/6/project1.png';
import project15_image from '../assets/images/projects/5/project1.png';
import project14_image from '../assets/images/projects/4/project1.png';
import project13_image from '../assets/images/projects/3/project1.png';
import project12_image from '../assets/images/projects/2/project1.png';
import project1_image from '../assets/images/projects/1/project1.png';
import project2_image from '../assets/images/projects/1/project2.png';
import project3_image from '../assets/images/projects/1/project3.png';
import project4_image from '../assets/images/projects/1/project4.png';
import project5_image from '../assets/images/projects/1/project5.png';
import project_preview from '../assets/images/projects/1/preview.png';
import project_video_mp4 from '../assets/videos/test-video.mp4';
import project_video_webm from '../assets/videos/test-video.webm';
import client_logo1 from '../assets/images/partners/logo2.png';

export type ProjectsList = {
    types: string[];
    projects: ProjectItem[];
};

export type ProjectItem = {
    id: string;
    name: string;
    type: string;
    images: {
        main: string;
        other: string[];
    };
    video: {
        preview: string;
        webm?: string;
        mp4: string;
    };
    title: string;
    description: string;
    categories: string[];
    client: {
        name: string;
        logo: string;
        url: string;
    };
    date: Date;
    problem: string;
    solution: string;
};

export const projectsList: ProjectsList = {
    types: ['Design', 'Branding', 'Illustration', 'Motion'],
    projects: [
        {
            id: '5129b737-e7af-54b9-9be0-cca9fdd3196f',
            name: 'SOFA',
            type: 'Design',
            images: {
                main: project12_image,
                other: [project2_image, project3_image, project4_image, project5_image],
            },
            video: {
                preview: project_preview,
                mp4: project_video_mp4,
                webm: project_video_webm,
            },
            title: 'Work Media Project',
            description:
                'Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.',
            categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
            client: { name: 'Vortex', logo: client_logo1, url: '#!' },
            date: new Date('12-01-2021'),
            problem:
                "Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.\n\nA digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
            solution:
                "Put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.\n\nAgency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
        },
        {
            id: '7837657d-13b3-512f-a45c-29ccc4571fac',
            name: 'KeyBoard',
            type: 'Branding',
            images: {
                main: project1_image,
                other: [project2_image, project3_image, project4_image, project5_image],
            },
            video: {
                preview: project_preview,
                mp4: project_video_mp4,
                webm: project_video_webm,
            },
            title: 'Work Media Project',
            description:
                'Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.',
            categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
            client: { name: 'Vortex', logo: client_logo1, url: '#!' },
            date: new Date('12-01-2021'),
            problem:
                "Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.\n\nA digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
            solution:
                "Put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.\n\nAgency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
        },
        {
            id: '569c0bd7-0953-5adb-9967-193dcd93a9fe',
            name: 'Work Media',
            type: 'Illustration',
            images: {
                main: project13_image,
                other: [project2_image, project3_image, project4_image, project5_image],
            },
            video: {
                preview: project_preview,
                mp4: project_video_mp4,
                webm: project_video_webm,
            },
            title: 'Work Media Project',
            description:
                'Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.',
            categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
            client: { name: 'Vortex', logo: client_logo1, url: '#!' },
            date: new Date('12-01-2021'),
            problem:
                "Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.\n\nA digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
            solution:
                "Put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.\n\nAgency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
        },
        {
            id: '0994c27d-8c9f-55b2-a9d3-6f61932668c6',
            name: 'DDDone',
            type: 'Motion',
            images: {
                main: project14_image,
                other: [project2_image, project3_image, project4_image, project5_image],
            },
            video: {
                preview: project_preview,
                mp4: project_video_mp4,
                webm: project_video_webm,
            },
            title: 'Work Media Project',
            description:
                'Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.',
            categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
            client: { name: 'Vortex', logo: client_logo1, url: '#!' },
            date: new Date('12-01-2021'),
            problem:
                "Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.\n\nA digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
            solution:
                "Put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.\n\nAgency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
        },
        {
            id: '59733074-43b9-5d3d-81a3-b45669989a9c',
            name: 'Abstract',
            type: 'Design',
            images: {
                main: project15_image,
                other: [project2_image, project3_image, project4_image, project5_image],
            },
            video: {
                preview: project_preview,
                mp4: project_video_mp4,
                webm: project_video_webm,
            },
            title: 'Work Media Project',
            description:
                'Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.',
            categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
            client: { name: 'Vortex', logo: client_logo1, url: '#!' },
            date: new Date('12-01-2021'),
            problem:
                "Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.\n\nA digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
            solution:
                "Put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.\n\nAgency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
        },
        {
            id: 'd55edb5d-2d2c-57b5-ae87-507f0e749878',
            name: 'HandP',
            type: 'Branding',
            images: {
                main: project16_image,
                other: [project2_image, project3_image, project4_image, project5_image],
            },
            video: {
                preview: project_preview,
                mp4: project_video_mp4,
                webm: project_video_webm,
            },
            title: 'Work Media Project',
            description:
                'Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.',
            categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
            client: { name: 'Vortex', logo: client_logo1, url: '#!' },
            date: new Date('12-01-2021'),
            problem:
                "Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.\n\nA digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
            solution:
                "Put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.\n\nAgency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
        },
        {
            id: '4867d0ff-52c2-577a-bcee-be9ebe555e11',
            name: 'Architect',
            type: 'Motion',
            images: {
                main: project17_image,
                other: [project2_image, project3_image, project4_image, project5_image],
            },
            video: {
                preview: project_preview,
                mp4: project_video_mp4,
                webm: project_video_webm,
            },
            title: 'Work Media Project',
            description:
                'Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.',
            categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
            client: { name: 'Vortex', logo: client_logo1, url: '#!' },
            date: new Date('12-01-2021'),
            problem:
                "Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.\n\nA digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
            solution:
                "Put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.\n\nAgency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
        },
        {
            id: 'adca858e-2c31-52a3-b15a-63668b30bd2c',
            name: 'CalC',
            type: 'Design',
            images: {
                main: project18_image,
                other: [project2_image, project3_image, project4_image, project5_image],
            },
            video: {
                preview: project_preview,
                mp4: project_video_mp4,
                webm: project_video_webm,
            },
            title: 'Work Media Project',
            description:
                'Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.',
            categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
            client: { name: 'Vortex', logo: client_logo1, url: '#!' },
            date: new Date('12-01-2021'),
            problem:
                "Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.\n\nA digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
            solution:
                "Put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.\n\nAgency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
        },
        {
            id: 'a42224a8-d991-57f4-b580-4d2c7ea50566',
            name: 'Sport',
            type: 'Branding',
            images: {
                main: project19_image,
                other: [project2_image, project3_image, project4_image, project5_image],
            },
            video: {
                preview: project_preview,
                mp4: project_video_mp4,
                webm: project_video_webm,
            },
            title: 'Work Media Project',
            description:
                'Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.',
            categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
            client: { name: 'Vortex', logo: client_logo1, url: '#!' },
            date: new Date('12-01-2021'),
            problem:
                "Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.\n\nA digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
            solution:
                "Put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.\n\nAgency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
        },
        {
            id: '2084ce61-1af1-5279-bb14-f83249345863',
            name: 'SOFA',
            type: 'Design',
            images: {
                main: project12_image,
                other: [project2_image, project3_image, project4_image, project5_image],
            },
            video: {
                preview: project_preview,
                mp4: project_video_mp4,
                webm: project_video_webm,
            },
            title: 'Work Media Project',
            description:
                'Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.',
            categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
            client: { name: 'Vortex', logo: client_logo1, url: '#!' },
            date: new Date('12-01-2021'),
            problem:
                "Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.\n\nA digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
            solution:
                "Put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.\n\nAgency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
        },
        {
            id: 'b026d172-f7fb-5a1d-8140-f14f926e1eac',
            name: 'KeyBoard',
            type: 'Branding',
            images: {
                main: project1_image,
                other: [project2_image, project3_image, project4_image, project5_image],
            },
            video: {
                preview: project_preview,
                mp4: project_video_mp4,
                webm: project_video_webm,
            },
            title: 'Work Media Project',
            description:
                'Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.',
            categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
            client: { name: 'Vortex', logo: client_logo1, url: '#!' },
            date: new Date('12-01-2021'),
            problem:
                "Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.\n\nA digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
            solution:
                "Put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.\n\nAgency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
        },
        {
            id: '8911be48-79c8-5fce-8845-cd023128aa94',
            name: 'Work Media',
            type: 'Illustration',
            images: {
                main: project13_image,
                other: [project2_image, project3_image, project4_image, project5_image],
            },
            video: {
                preview: project_preview,
                mp4: project_video_mp4,
                webm: project_video_webm,
            },
            title: 'Work Media Project',
            description:
                'Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.',
            categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
            client: { name: 'Vortex', logo: client_logo1, url: '#!' },
            date: new Date('12-01-2021'),
            problem:
                "Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.\n\nA digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
            solution:
                "Put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.\n\nAgency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
        },
        {
            id: '5b442b1b-87d4-54d6-86ac-322fb931dde7',
            name: 'DDDone',
            type: 'Motion',
            images: {
                main: project14_image,
                other: [project2_image, project3_image, project4_image, project5_image],
            },
            video: {
                preview: project_preview,
                mp4: project_video_mp4,
                webm: project_video_webm,
            },
            title: 'Work Media Project',
            description:
                'Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.',
            categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
            client: { name: 'Vortex', logo: client_logo1, url: '#!' },
            date: new Date('12-01-2021'),
            problem:
                "Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.\n\nA digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
            solution:
                "Put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.\n\nAgency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
        },
        {
            id: 'd2f07c11-6fa7-50b8-a0b5-a2e8bc471a2e',
            name: 'Abstract',
            type: 'Design',
            images: {
                main: project15_image,
                other: [project2_image, project3_image, project4_image, project5_image],
            },
            video: {
                preview: project_preview,
                mp4: project_video_mp4,
                webm: project_video_webm,
            },
            title: 'Work Media Project',
            description:
                'Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.',
            categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
            client: { name: 'Vortex', logo: client_logo1, url: '#!' },
            date: new Date('12-01-2021'),
            problem:
                "Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.\n\nA digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
            solution:
                "Put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.\n\nAgency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
        },
        {
            id: '42ffc9de-38fa-5f76-8ae7-e1acab3fa338',
            name: 'HandP',
            type: 'Branding',
            images: {
                main: project16_image,
                other: [project2_image, project3_image, project4_image, project5_image],
            },
            video: {
                preview: project_preview,
                mp4: project_video_mp4,
                webm: project_video_webm,
            },
            title: 'Work Media Project',
            description:
                'Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.',
            categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
            client: { name: 'Vortex', logo: client_logo1, url: '#!' },
            date: new Date('12-01-2021'),
            problem:
                "Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.\n\nA digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
            solution:
                "Put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.\n\nAgency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
        },
        {
            id: '55dd5709-50c3-5707-8881-aead77abad37',
            name: 'Architect',
            type: 'Motion',
            images: {
                main: project17_image,
                other: [project2_image, project3_image, project4_image, project5_image],
            },
            video: {
                preview: project_preview,
                mp4: project_video_mp4,
                webm: project_video_webm,
            },
            title: 'Work Media Project',
            description:
                'Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.',
            categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
            client: { name: 'Vortex', logo: client_logo1, url: '#!' },
            date: new Date('12-01-2021'),
            problem:
                "Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.\n\nA digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
            solution:
                "Put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.\n\nAgency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
        },
        {
            id: '7a57eb64-3467-5e86-ab6f-65abf69148f1',
            name: 'CalC',
            type: 'Design',
            images: {
                main: project18_image,
                other: [project2_image, project3_image, project4_image, project5_image],
            },
            video: {
                preview: project_preview,
                mp4: project_video_mp4,
                webm: project_video_webm,
            },
            title: 'Work Media Project',
            description:
                'Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.',
            categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
            client: { name: 'Vortex', logo: client_logo1, url: '#!' },
            date: new Date('12-01-2021'),
            problem:
                "Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.\n\nA digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
            solution:
                "Put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.\n\nAgency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
        },
        {
            id: '4a9fb160-92fc-5d6e-baff-a5cd77d80ee1',
            name: 'Sport',
            type: 'Branding',
            images: {
                main: project19_image,
                other: [project2_image, project3_image, project4_image, project5_image],
            },
            video: {
                preview: project_preview,
                mp4: project_video_mp4,
                webm: project_video_webm,
            },
            title: 'Work Media Project',
            description:
                'Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.',
            categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
            client: { name: 'Vortex', logo: client_logo1, url: '#!' },
            date: new Date('12-01-2021'),
            problem:
                "Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.\n\nA digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
            solution:
                "Put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.\n\nAgency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
        },
        {
            id: '677fb649-42c3-5863-b369-082c37146ac5',
            name: '',
            type: '',
            images: {
                main: 'src',
                other: ['src', 'src', 'src', 'src'],
            },
            video: {
                preview: 'src',
                mp4: 'src',
                webm: 'src',
            },
            title: 'title',
            description: 'paragraph',
            categories: ['category', 'category', 'category', 'category', 'category'],
            client: { name: 'client', logo: 'src', url: '#!' },
            date: new Date('01-01-2000'),
            problem:
                "paragraph",
            solution:
                "paragraph",
        },
    ],
};
