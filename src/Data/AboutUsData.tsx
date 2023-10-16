interface AboutUsData {
    title: string;
    content: string;
    image: string;
    bgImage: string;
    bgColor: string;
}

export const AUData1: AboutUsData[] = [
    {
        title: 'About the Company',
        content: 'Our company is a leading fashion enterprise dedicated to providing exceptional clothing and accessories. We specialize in curating a wide range of stylish and timeless designs that cater to various styles and occasions.',
        image: '/assets/imgs/page/homepage1/company.svg',
        bgImage: 'bg-company',
        bgColor: 'bg-4'
    },
    {
        title: 'History of Formation',
        content: "Our company has a rich and inspiring history. It all started [insert specific information about the company's origin, such as the year and circumstances of establishment].",
        image: '/assets/imgs/page/homepage1/history.svg',
        bgImage: 'bg-history',
        bgColor: 'bg-9'
    },
    {
        title: 'Company Mission',
        content: 'At our company, our mission is to empower individuals to express their unique personalities through fashion. We believe that clothing goes beyond mere functionality—it is a powerful form of self-expression.',
        image: '/assets/imgs/page/homepage1/social.svg',
        bgImage: 'bg-social',
        bgColor: 'bg-2'
    },
];

export const AUData2: AboutUsData[] = [
    {
        title: 'Learning Opportunities',
        content: 'Fuel your growth with diverse programs, workshops, and mentorship to reach new career heights.',
        image: '/assets/imgs/page/homepage1/icon_book.svg',
        bgImage: 'bg-learning',
        bgColor: 'bg-5'
    },
    {
        title: 'Flexible Work Hours',
        content: 'Achieve work-life balance through our adaptable schedules, accommodating personal commitments for optimal effectiveness.',
        image: '/assets/imgs/page/homepage1/icons-clock.svg',
        bgImage: 'bg-comprehendsive',
        bgColor: 'bg-9'
    },
    {
        title: 'Comprehensive Benefits',
        content: 'Prioritize your well-being with an all-encompassing package, including medical insurance, wellness programs, retirement plans, and employee assistance, ensuring your health, happiness, and satisfaction.',
        image: '/assets/imgs/page/homepage1/icons-health.svg',
        bgImage: 'bg-flexible',
        bgColor: 'bg-2'
    },
];

export const aboutUsHomepage = [
    {
        title: "About the Company",
        backgroundImage: "/assets/imgs/page/homepage1/company.svg",
        content:
            "Our company is a leading fashion enterprise dedicated to providing exceptional clothing and accessories. We specialize in curating a wide range of stylish and timeless designs that cater to various styles and occasions.",
        link: "/#",
        className: "bg-company bg-5"
    },
    {
        title: "History of Formation",
        backgroundImage: "/assets/imgs/page/homepage1/history.svg",
        content:
            "Our company has a rich and inspiring history. It all started [insert specific information about the company&apos;s origin, such as the year and circumstances of establishment].",
        link: "/#",
        className: "bg-history bg-9"
    },
    {
        title: "Company Mission",
        backgroundImage: "/assets/imgs/page/homepage1/social.svg",
        content:
            "At our company, our mission is to empower individuals to express their unique personalities through fashion. We believe that clothing goes beyond mere functionality—it is a powerful form of self-expression.",
        link: "/#",
        className: "bg-social bg-2"
    },
];
