import { sortProjects } from './sortProjects';

describe('sortProjects', () => {
    it('should return sorted projects', () => {
        const projectsList = {
            types: ['Design', 'Branding', 'Illustration', 'Motion'],
            projects: [
                {
                    id: '5129b737-e7af-54b9-9be0-cca9fdd3196f',
                    name: 'SOFA',
                    type: 'Design',
                    images: {
                        main: 'src',
                        other: ['src', 'src', 'src', 'src'],
                    },
                    video: {
                        preview: 'src',
                        mp4: 'src',
                        webm: 'src',
                    },
                    title: 'Work Media Project',
                    description: 'paragraph',
                    categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
                    client: { name: 'Vortex', logo: 'src', url: '#!' },
                    date: new Date('12-01-2021'),
                    problem: 'paragraph',
                    solution: 'paragraph',
                },
                {
                    id: '7837657d-13b3-512f-a45c-29ccc4571fac',
                    name: 'KeyBoard',
                    type: 'Branding',
                    images: {
                        main: 'src',
                        other: ['src', 'src', 'src', 'src'],
                    },
                    video: {
                        preview: 'src',
                        mp4: 'src',
                        webm: 'src',
                    },
                    title: 'Work Media Project',
                    description: 'paragraph',
                    categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
                    client: { name: 'Vortex', logo: 'src', url: '#!' },
                    date: new Date('12-01-2021'),
                    problem: 'paragraph',
                    solution: 'paragraph',
                },
                {
                    id: '569c0bd7-0953-5adb-9967-193dcd93a9fe',
                    name: 'Work Media',
                    type: 'Illustration',
                    images: {
                        main: 'src',
                        other: ['src', 'src', 'src', 'src'],
                    },
                    video: {
                        preview: 'src',
                        mp4: 'src',
                        webm: 'src',
                    },
                    title: 'Work Media Project',
                    description: 'paragraph',
                    categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
                    client: { name: 'Vortex', logo: 'src', url: '#!' },
                    date: new Date('12-01-2021'),
                    problem: 'paragraph',
                    solution: 'paragraph',
                },
                {
                    id: '0994c27d-8c9f-55b2-a9d3-6f61932668c6',
                    name: 'DDDone',
                    type: 'Motion',
                    images: {
                        main: 'src',
                        other: ['src', 'src', 'src', 'src'],
                    },
                    video: {
                        preview: 'src',
                        mp4: 'src',
                        webm: 'src',
                    },
                    title: 'Work Media Project',
                    description: 'paragraph',
                    categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
                    client: { name: 'Vortex', logo: 'src', url: '#!' },
                    date: new Date('12-01-2021'),
                    problem: 'paragraph',
                    solution: 'paragraph',
                },
            ],
        };

        const sortedProjects = {
            'Show All': projectsList.projects,
            Design: projectsList.projects.filter(project => project.type === 'Design'),
            Branding: projectsList.projects.filter(project => project.type === 'Branding'),
            Illustration: projectsList.projects.filter(project => project.type === 'Illustration'),
            Motion: projectsList.projects.filter(project => project.type === 'Motion'),
        };

        const testSortedProjects = sortProjects('Show All', projectsList);
        expect(testSortedProjects).toEqual(sortedProjects);
    });

    it('should return sorted projects with only one type', () => {
        const projectsList = {
            types: ['Design'],
            projects: [
                {
                    id: '5129b737-e7af-54b9-9be0-cca9fdd3196f',
                    name: 'SOFA',
                    type: 'Design',
                    images: {
                        main: 'src',
                        other: ['src', 'src', 'src', 'src'],
                    },
                    video: {
                        preview: 'src',
                        mp4: 'src',
                        webm: 'src',
                    },
                    title: 'Work Media Project',
                    description: 'paragraph',
                    categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
                    client: { name: 'Vortex', logo: 'src', url: '#!' },
                    date: new Date('12-01-2021'),
                    problem: 'paragraph',
                    solution: 'paragraph',
                },
                {
                    id: '7837657d-13b3-512f-a45c-29ccc4571fac',
                    name: 'KeyBoard',
                    type: 'Branding',
                    images: {
                        main: 'src',
                        other: ['src', 'src', 'src', 'src'],
                    },
                    video: {
                        preview: 'src',
                        mp4: 'src',
                        webm: 'src',
                    },
                    title: 'Work Media Project',
                    description: 'paragraph',
                    categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
                    client: { name: 'Vortex', logo: 'src', url: '#!' },
                    date: new Date('12-01-2021'),
                    problem: 'paragraph',
                    solution: 'paragraph',
                },
                {
                    id: '569c0bd7-0953-5adb-9967-193dcd93a9fe',
                    name: 'Work Media',
                    type: 'Illustration',
                    images: {
                        main: 'src',
                        other: ['src', 'src', 'src', 'src'],
                    },
                    video: {
                        preview: 'src',
                        mp4: 'src',
                        webm: 'src',
                    },
                    title: 'Work Media Project',
                    description: 'paragraph',
                    categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
                    client: { name: 'Vortex', logo: 'src', url: '#!' },
                    date: new Date('12-01-2021'),
                    problem: 'paragraph',
                    solution: 'paragraph',
                },
                {
                    id: '0994c27d-8c9f-55b2-a9d3-6f61932668c6',
                    name: 'DDDone',
                    type: 'Motion',
                    images: {
                        main: 'src',
                        other: ['src', 'src', 'src', 'src'],
                    },
                    video: {
                        preview: 'src',
                        mp4: 'src',
                        webm: 'src',
                    },
                    title: 'Work Media Project',
                    description: 'paragraph',
                    categories: ['Art Direction', 'User Interface', 'Branding Strategy', 'Print Design', '3D Render'],
                    client: { name: 'Vortex', logo: 'src', url: '#!' },
                    date: new Date('12-01-2021'),
                    problem: 'paragraph',
                    solution: 'paragraph',
                },
            ],
        };

        const sortedProjects = {
            'Show All': projectsList.projects,
            Design: projectsList.projects.filter(project => project.type === 'Design'),
        };

        const testSortedProjects = sortProjects('Show All', projectsList);
        expect(testSortedProjects).toEqual(sortedProjects);
    });

    it('should return null types', () => {
        const projectsList = {
            types: ['Design', 'Branding', 'Illustration', 'Motion'],
            projects: [],
        };

        const sortedProjects = {
            'Show All': [],
            Design: [],
            Branding: [],
            Illustration: [],
            Motion: [],
        };

        const testSortedProjects = sortProjects('Show All', projectsList);
        expect(testSortedProjects).toEqual(sortedProjects);
    });
});
