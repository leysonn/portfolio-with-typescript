type PortfolioList = {
    types: string[];
    projects: {
        [key: string]: {
            name: string;
            type: string;
            images: {
                main: string;
                other: string[];
            };
            video: string;
            title: string;
            description: string;
            categories: {
                name: string;
                url: string;
            }[];
            client: {
                name: string;
                logo: string;
                url: string;
            };
            date: Date;
            problem: string;
            solution: string;
        };
    };
};

export const portfolioList: PortfolioList = {
    types: ['Design', 'Branding', 'Illustration', 'Motion'],
    projects: {
        '9e12de1d-0c05-5846-9a2e-5329eb178996': {
            name: 'Project1',
            type: 'Branding',
            images: {
                main: 'src',
                other: ['src', 'src', 'src'],
            },
            video: 'src',
            title: 'Project',
            description: 'paragraph',
            categories: [
                {
                    name: 'Category1',
                    url: 'url',
                },
                {
                    name: 'Category2',
                    url: 'url',
                },
                {
                    name: 'Category3',
                    url: 'url',
                },
            ],
            client: { name: 'company', logo: 'src', url: 'url' },
            date: new Date('2000-01-01'),
            problem: 'paragraph',
            solution: 'paragraph',
        },
        'eaa5e5a4-b370-5f4a-9949-d57ac9c84bf1': {
            name: 'Project1',
            type: 'Branding',
            images: {
                main: 'src',
                other: ['src', 'src', 'src'],
            },
            video: 'src',
            title: 'Project',
            description: 'paragraph',
            categories: [
                {
                    name: 'Category1',
                    url: 'url',
                },
                {
                    name: 'Category2',
                    url: 'url',
                },
                {
                    name: 'Category3',
                    url: 'url',
                },
            ],
            client: { name: 'company', logo: 'src', url: 'url' },
            date: new Date('2000-01-01'),
            problem: 'paragraph',
            solution: 'paragraph',
        },
        '8fc627dd-d962-5caf-bbca-d7479bcd4fe9': {
            name: 'Project1',
            type: 'Branding',
            images: {
                main: 'src',
                other: ['src', 'src', 'src'],
            },
            video: 'src',
            title: 'Project',
            description: 'paragraph',
            categories: [
                {
                    name: 'Category1',
                    url: 'url',
                },
                {
                    name: 'Category2',
                    url: 'url',
                },
                {
                    name: 'Category3',
                    url: 'url',
                },
            ],
            client: { name: 'company', logo: 'src', url: 'url' },
            date: new Date('2000-01-01'),
            problem: 'paragraph',
            solution: 'paragraph',
        },
        '11173517-f340-570a-9646-f9f338564d0a': {
            name: 'Project1',
            type: 'Branding',
            images: {
                main: 'src',
                other: ['src', 'src', 'src'],
            },
            video: 'src',
            title: 'Project',
            description: 'paragraph',
            categories: [
                {
                    name: 'Category1',
                    url: 'url',
                },
                {
                    name: 'Category2',
                    url: 'url',
                },
                {
                    name: 'Category3',
                    url: 'url',
                },
            ],
            client: { name: 'company', logo: 'src', url: 'url' },
            date: new Date('2000-01-01'),
            problem: 'paragraph',
            solution: 'paragraph',
        },
        '84328e14-fdbf-50ce-816c-ee0377b4b23f': {
            name: 'Project1',
            type: 'Branding',
            images: {
                main: 'src',
                other: ['src', 'src', 'src'],
            },
            video: 'src',
            title: 'Project',
            description: 'paragraph',
            categories: [
                {
                    name: 'Category1',
                    url: 'url',
                },
                {
                    name: 'Category2',
                    url: 'url',
                },
                {
                    name: 'Category3',
                    url: 'url',
                },
            ],
            client: { name: 'company', logo: 'src', url: 'url' },
            date: new Date('2000-01-01'),
            problem: 'paragraph',
            solution: 'paragraph',
        },
        '47106f7d-f076-5ace-9dfe-efdbfa388881': {
            name: 'Project1',
            type: 'Branding',
            images: {
                main: 'src',
                other: ['src', 'src', 'src'],
            },
            video: 'src',
            title: 'Project',
            description: 'paragraph',
            categories: [
                {
                    name: 'Category1',
                    url: 'url',
                },
                {
                    name: 'Category2',
                    url: 'url',
                },
                {
                    name: 'Category3',
                    url: 'url',
                },
            ],
            client: { name: 'company', logo: 'src', url: 'url' },
            date: new Date('2000-01-01'),
            problem: 'paragraph',
            solution: 'paragraph',
        },
        '4496ae84-330d-5309-bfe7-e720ee43c44e': {
            name: 'Project1',
            type: 'Branding',
            images: {
                main: 'src',
                other: ['src', 'src', 'src'],
            },
            video: 'src',
            title: 'Project',
            description: 'paragraph',
            categories: [
                {
                    name: 'Category1',
                    url: 'url',
                },
                {
                    name: 'Category2',
                    url: 'url',
                },
                {
                    name: 'Category3',
                    url: 'url',
                },
            ],
            client: { name: 'company', logo: 'src', url: 'url' },
            date: new Date('2000-01-01'),
            problem: 'paragraph',
            solution: 'paragraph',
        },
        'db5ef68f-874a-5328-803c-35d289c273fd': {
            name: 'Project1',
            type: 'Branding',
            images: {
                main: 'src',
                other: ['src', 'src', 'src'],
            },
            video: 'src',
            title: 'Project',
            description: 'paragraph',
            categories: [
                {
                    name: 'Category1',
                    url: 'url',
                },
                {
                    name: 'Category2',
                    url: 'url',
                },
                {
                    name: 'Category3',
                    url: 'url',
                },
            ],
            client: { name: 'company', logo: 'src', url: 'url' },
            date: new Date('2000-01-01'),
            problem: 'paragraph',
            solution: 'paragraph',
        },
        'f6a768d6-fb72-5a16-8140-f6ec9f8e34e5': {
            name: 'Project1',
            type: 'Branding',
            images: {
                main: 'src',
                other: ['src', 'src', 'src'],
            },
            video: 'src',
            title: 'Project',
            description: 'paragraph',
            categories: [
                {
                    name: 'Category1',
                    url: 'url',
                },
                {
                    name: 'Category2',
                    url: 'url',
                },
                {
                    name: 'Category3',
                    url: 'url',
                },
            ],
            client: { name: 'company', logo: 'src', url: 'url' },
            date: new Date('2000-01-01'),
            problem: 'paragraph',
            solution: 'paragraph',
        },
    },
};
