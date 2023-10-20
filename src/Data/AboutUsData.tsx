interface AboutUsData {
  title: string;
  content: string;
  image: string;
  bdBGColor: string;
}

export const AUData1: AboutUsData[] = [
  {
    title: 'About the Company',
    content: 'Our company is a leading furniture enterprise dedicated to providing exceptional furniture and accessories. We specialize in curating a wide range of stylish and timeless designs that cater to various styles and occasions.',
    image: '/assets/imgs/page/homepage1/company.svg',
    bdBGColor: 'bd-bg-4'
  },
  {
    title: 'History of Formation',
    content: "Our company has a rich and inspiring history. It all started [insert specific information about the company's origin, such as the year and circumstances of establishment].",
    image: '/assets/imgs/page/homepage1/history.svg',
    bdBGColor: 'bd-bg-9'
  },
  {
    title: 'Company Mission',
    content: 'At our company, our mission is to empower individuals to express their unique personalities through furniture. We believe that furniture goes beyond mere functionality—it is a powerful form of self-expression.',
    image: '/assets/imgs/page/homepage1/social.svg',
    bdBGColor: 'bd-bg-2'
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
