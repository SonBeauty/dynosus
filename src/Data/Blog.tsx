interface BlogData {
  tag: string;
  title: string;
  imageUrl: string;
  link: string;
  bgColor: string;
}

interface PostData {
  title: string;
  imageUrl: string;
  author: string;
  authorAvatar: string;
  date: string;
  link: string;
  bgColor: string;
  decription?: string;
}

export const blogsData1: BlogData[] = [
  {
    tag: 'Lastest trend',
    title: '5 Tips for Furnishing your New Home',
    imageUrl: '/assets/imgs/template/blog-img-1.png',
    link: '/#',
    bgColor: 'col-bg-9'
  },
  {
    tag: 'Home improvement',
    title: 'The Best Ways to Arrange your Living Room Furniture',
    imageUrl: '/assets/imgs/template/blog-img-2.png',
    link: '/#',
    bgColor: 'color-bg-1'
  },
  {
    tag: 'Design ideas',
    title: 'Which Sofa Style Suits Your Personality',
    imageUrl: '/assets/imgs/template/blog-img-3.png',
    link: '/#',
    bgColor: 'color-bg-2'
  },
  {
    tag: 'Lastest trend',
    title: 'Ideas for Creating an Inviting Entryway',
    imageUrl: '/assets/imgs/template/blog-img-4.png',
    link: '/#',
    bgColor: 'color-bg-9'
  },
  {
    tag: 'Home Improvement',
    title: 'Design a Home Office that Works for You',
    imageUrl: '/assets/imgs/template/blog-img-5.png',
    link: '/#',
    bgColor: 'color-bg-1'
  },
  {
    tag: 'Design ideas',
    title: 'Transitional Style Takes Center Stage',
    imageUrl: '/assets/imgs/template/blog-img-6.png',
    link: '/#',
    bgColor: 'color-bg-2'
  }
];

export const blogsData2: BlogData[] = [
  {
    tag: 'Lastest trend',
    title: '5 Tips for Furnishing your New Home',
    imageUrl: '/assets/imgs/page/homepage1/img-news-1.png',
    link: '/#',
    bgColor: 'col-bg-9'
  },
  {
    tag: 'Home improvement',
    title: 'Mastering the Art of Looking Cool Style',
    imageUrl: '/assets/imgs/page/homepage1/img-news-2.png',
    link: '/#',
    bgColor: 'color-bg-1'
  },
  {
    tag: 'Design ideas',
    title: 'Dressing Nice: Dressing Nice Every Day',
    imageUrl: '/assets/imgs/page/homepage1/img-news-3.png',
    link: '/#',
    bgColor: 'col-bg-2'
  }
];

export const postsData: PostData[] = [
  {
    title: 'Unveiling the Latest Fashion Trends of this Season',
    imageUrl: '/assets/imgs/page/homepage7/img-blog-1.png',
    author: 'Jenny Wilson',
    authorAvatar: '/assets/imgs/page/blog/2/user-1.png',
    date: 'August 25, 2022',
    link: '/#',
    bgColor: 'bg-light-green',
    decription: 'Fashion is an ever-evolving phenomenon that shapes our sense of style and self-expression. As we delve into the latest fashion trends, we embark on a captivating journey through the world of apparel.'
  },
  {
    title: 'Mastering the Art of Looking Cool Style',
    imageUrl: '/assets/imgs/page/homepage7/img-blog-2.png',
    author: 'Jenny Wilson',
    authorAvatar: '/assets/imgs/page/blog/2/user-2.png',
    date: 'August 25, 2022',
    link: '/#',
    bgColor: 'bg-light-purple',
    decription: "There's nothing quite like the effortless, laid-back vibes of fashion that are both comfortable and stylish. Effortless fashion is all about comfort, and letting go of trends that don't fit your personal style."
  },
  {
    title: 'Dressing Nice: Dressing Nice Every Day',
    imageUrl: '/assets/imgs/page/homepage7/img-blog-3.png',
    author: 'Jane Cooper',
    authorAvatar: '/assets/imgs/page/blog/2/user-3.png',
    date: 'August 25, 2022',
    link: '/#',
    bgColor: 'bg-light-green',
    decription: 'Fashion is an ever-evolving phenomenon that shapes our sense of style and self-expression. As we delve into the latest fashion trends, we embark on a captivating journey through the world of apparel.'
  },
  {
    title: 'The Hottest Fashion Trends of the Season',
    imageUrl: '/assets/imgs/page/homepage7/img-blog-4.png',
    author: 'Wade Warren',
    authorAvatar: '/assets/imgs/page/blog/2/user-4.png',
    date: 'August 25, 2022',
    link: '/#',
    bgColor: 'bg-light-purple',
    decription: 'Fashion is an ever-evolving phenomenon that shapes our sense of style and self-expression. As we delve into the latest fashion trends, we embark on a captivating journey through the world of apparel.'
  },
  {
    title: 'Dressing Nice: A Guide to Effortless Style',
    imageUrl: '/assets/imgs/page/homepage7/img-blog-5.png',
    author: 'Jenny Wilson',
    authorAvatar: '/assets/imgs/page/blog/2/user-5.png',
    date: 'August 25, 2022',
    link: '/#',
    bgColor: 'bg-light-green',
    decription: 'Fashion is an ever-evolving phenomenon that shapes our sense of style and self-expression. As we delve into the latest fashion trends, we embark on a captivating journey through the world of apparel.'
  },
  {
    title: 'Dressing Nice: Unleashing Your Style Now',
    imageUrl: '/assets/imgs/page/homepage7/img-blog-6.png',
    author: 'Jenny Wilson',
    authorAvatar: '/assets/imgs/page/blog/2/user-6.png',
    date: 'August 25, 2022',
    link: '/#',
    bgColor: 'bg-light-purple',
    decription: 'Fashion is an ever-evolving phenomenon that shapes our sense of style and self-expression. As we delve into the latest fashion trends, we embark on a captivating journey through the world of apparel.'
  }
];

export const postsData2: PostData[] = [
  {
    title: 'The Hottest Fashion Trends of the Season',
    imageUrl: '/assets/imgs/page/blog/2/img-news-2.png',
    author: 'Jenny Wilson',
    authorAvatar: '/assets/imgs/page/blog/2/user-1.png',
    date: 'August 25, 2022',
    link: '/#',
    bgColor: '',
    decription: "Dressing Nice: Dressing Nice Every Day doesn't have to be a daunting task or reserved for special occasions. With a few simple tips and a little planning, you can elevate your daily style and feel confident in your appearance"
  },
  {
    title: 'Dressing Nice: Unleashing Your Style Now',
    imageUrl: '/assets/imgs/page/blog/2/img-news-3.png',
    author: 'Jenny Wilson',
    authorAvatar: '/assets/imgs/page/blog/2/user-2.png',
    date: 'August 25, 2022',
    link: '/#',
    bgColor: 'color-bg-2',
    decription: "In this blog post, we'll explore some timeless tips and tricks to help you dress nice effortlessly, regardless of the occasion"
  },
  {
    title: 'The Art of Dressing',
    imageUrl: '/assets/imgs/page/homepage1/img-news-11.png',
    author: 'Jane Cooper',
    authorAvatar: '/assets/imgs/page/blog/2/user-3.png',
    date: 'August 25, 2022',
    link: '/#',
    bgColor: 'color-bg-10',
    decription: 'Fashion is an ever-evolving phenomenon that shapes our sense of style and self-expression. As we delve into the latest fashion trends, we embark on a captivating journey through the world of apparel.'
  },
  {
    title: 'The Art of Dressing',
    imageUrl: '/assets/imgs/page/homepage1/img-news-11.png',
    author: 'Wade Warren',
    authorAvatar: '/assets/imgs/page/blog/2/user-4.png',
    date: 'August 25, 2022',
    link: '/#',
    bgColor: 'color-bg-2',
    decription: 'Fashion is an ever-evolving phenomenon that shapes our sense of style and self-expression. As we delve into the latest fashion trends, we embark on a captivating journey through the world of apparel.'
  },
  {
    title: 'Dressing Nice: A Guide to Effortless Style',
    imageUrl: '/assets/imgs/page/homepage1/img-news-11.png',
    author: 'Jenny Wilson',
    authorAvatar: '/assets/imgs/page/blog/2/user-5.png',
    date: 'August 25, 2022',
    link: '/#',
    bgColor: 'color-bg-5',
    decription: 'Fashion is an ever-evolving phenomenon that shapes our sense of style and self-expression. As we delve into the latest fashion trends, we embark on a captivating journey through the world of apparel.'
  },
  {
    title: 'Dressing Nice: Unleashing Your Style Now',
    imageUrl: '/assets/imgs/page/homepage1/img-news-11.png',
    author: 'Jenny Wilson',
    authorAvatar: '/assets/imgs/page/blog/2/user-6.png',
    date: 'August 25, 2022',
    link: '/#',
    bgColor: 'color-bg-9',
    decription: 'Fashion is an ever-evolving phenomenon that shapes our sense of style and self-expression. As we delve into the latest fashion trends, we embark on a captivating journey through the world of apparel.'
  }
];