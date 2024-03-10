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
            id: '4250fa47-5b86-527c-9c80-83b39940c0e6',
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
            id: 'f0403369-99d6-5186-9e13-41a4cf7beaaf',
            name: 'Project1',
            type: 'Branding',
            images: {
                main: project1_image,
                other: ['src', 'src', 'src'],
            },
            video: {
                preview: 'src',
                mp4: 'src',
            },
            title: 'Project',
            description: 'paragraph',
            categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
            client: { name: 'company', logo: 'src', url: 'url' },
            date: new Date('2000-01-01'),
            problem: 'paragraph',
            solution: 'paragraph',
        },
        {
            id: '18cdf3eb-6ed7-5650-b1f3-307d526d780d',
            name: 'Project1',
            type: 'Branding',
            images: {
                main: project1_image,
                other: ['src', 'src', 'src'],
            },
            video: {
                preview: 'src',
                mp4: 'src',
            },
            title: 'Project',
            description: 'paragraph',
            categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
            client: { name: 'company', logo: 'src', url: 'url' },
            date: new Date('2000-01-01'),
            problem: 'paragraph',
            solution: 'paragraph',
        },
        {
            id: '1a9fa476-a4ec-53d1-94f0-14060637e40a',
            name: 'Project1',
            type: 'Branding',
            images: {
                main: project1_image,
                other: ['src', 'src', 'src'],
            },
            video: {
                preview: 'src',
                mp4: 'src',
            },
            title: 'Project',
            description: 'paragraph',
            categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
            client: { name: 'company', logo: 'src', url: 'url' },
            date: new Date('2000-01-01'),
            problem: 'paragraph',
            solution: 'paragraph',
        },
        {
            id: '9b67a926-f050-5147-a2dc-154fb1cd29ed',
            name: 'Project1',
            type: 'Branding',
            images: {
                main: project1_image,
                other: ['src', 'src', 'src'],
            },
            video: {
                preview: 'src',
                mp4: 'src',
            },
            title: 'Project',
            description: 'paragraph',
            categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
            client: { name: 'company', logo: 'src', url: 'url' },
            date: new Date('2000-01-01'),
            problem: 'paragraph',
            solution: 'paragraph',
        },
        {
            id: '6e0fcbc7-9acb-557d-9b19-c3de4f9acc2a',
            name: 'Project1',
            type: 'Branding',
            images: {
                main: project1_image,
                other: ['src', 'src', 'src'],
            },
            video: {
                preview: 'src',
                mp4: 'src',
            },
            title: 'Project',
            description: 'paragraph',
            categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
            client: { name: 'company', logo: 'src', url: 'url' },
            date: new Date('2000-01-01'),
            problem: 'paragraph',
            solution: 'paragraph',
        },
        {
            id: 'e65f7343-fa6e-5553-95fd-a5aeec409444',
            name: 'Project1',
            type: 'Branding',
            images: {
                main: project1_image,
                other: ['src', 'src', 'src'],
            },
            video: {
                preview: 'src',
                mp4: 'src',
            },
            title: 'Project',
            description: 'paragraph',
            categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
            client: { name: 'company', logo: 'src', url: 'url' },
            date: new Date('2000-01-01'),
            problem: 'paragraph',
            solution: 'paragraph',
        },
        {
            id: '1ed8157d-ef04-59c1-bcfd-ca24ceae929f',
            name: 'Project1',
            type: 'Branding',
            images: {
                main: project1_image,
                other: ['src', 'src', 'src'],
            },
            video: {
                preview: 'src',
                mp4: 'src',
            },
            title: 'Project',
            description: 'paragraph',
            categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
            client: { name: 'company', logo: 'src', url: 'url' },
            date: new Date('2000-01-01'),
            problem: 'paragraph',
            solution: 'paragraph',
        },
        {
            id: '5193810c-044f-5821-b071-55ec51cb9814',
            name: 'Project1',
            type: 'Branding',
            images: {
                main: project1_image,
                other: ['src', 'src', 'src'],
            },
            video: {
                preview: 'src',
                mp4: 'src',
            },
            title: 'Project',
            description: 'paragraph',
            categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
            client: { name: 'company', logo: 'src', url: 'url' },
            date: new Date('2000-01-01'),
            problem: 'paragraph',
            solution: 'paragraph',
        },
        {
            id: '4250fa47-5b86-527c-9c80-83b39940c0e6',
            name: 'KeyBoard',
            type: 'Branding',
            images: {
                main: project1_image,
                other: ['src', 'src', 'src'],
            },
            video: {
                preview: 'src',
                mp4: 'src',
            },
            title: 'Work Media Project',
            description:
                'Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.',
            categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
            client: { name: 'company', logo: 'src', url: 'url' },
            date: new Date('12-01-2021'),
            problem:
                "Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.\n\nA digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
            solution:
                "Put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.\n\nAgency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
        },
        {
            id: 'f0403369-99d6-5186-9e13-41a4cf7beaaf',
            name: 'Project1',
            type: 'Branding',
            images: {
                main: project1_image,
                other: ['src', 'src', 'src'],
            },
            video: {
                preview: 'src',
                mp4: 'src',
            },
            title: 'Project',
            description: 'paragraph',
            categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
            client: { name: 'company', logo: 'src', url: 'url' },
            date: new Date('2000-01-01'),
            problem: 'paragraph',
            solution: 'paragraph',
        },
        {
            id: '18cdf3eb-6ed7-5650-b1f3-307d526d780d',
            name: 'Project1',
            type: 'Branding',
            images: {
                main: project1_image,
                other: ['src', 'src', 'src'],
            },
            video: {
                preview: 'src',
                mp4: 'src',
            },
            title: 'Project',
            description: 'paragraph',
            categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
            client: { name: 'company', logo: 'src', url: 'url' },
            date: new Date('2000-01-01'),
            problem: 'paragraph',
            solution: 'paragraph',
        },
        {
            id: '1a9fa476-a4ec-53d1-94f0-14060637e40a',
            name: 'Project1',
            type: 'Branding',
            images: {
                main: project1_image,
                other: ['src', 'src', 'src'],
            },
            video: {
                preview: 'src',
                mp4: 'src',
            },
            title: 'Project',
            description: 'paragraph',
            categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
            client: { name: 'company', logo: 'src', url: 'url' },
            date: new Date('2000-01-01'),
            problem: 'paragraph',
            solution: 'paragraph',
        },
        {
            id: '9b67a926-f050-5147-a2dc-154fb1cd29ed',
            name: 'Project1',
            type: 'Branding',
            images: {
                main: project1_image,
                other: ['src', 'src', 'src'],
            },
            video: {
                preview: 'src',
                mp4: 'src',
            },
            title: 'Project',
            description: 'paragraph',
            categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
            client: { name: 'company', logo: 'src', url: 'url' },
            date: new Date('2000-01-01'),
            problem: 'paragraph',
            solution: 'paragraph',
        },
    ],
};
