import { IconOthers } from "../components/svg/IconOthersSVG";
import { IconWallpaper } from "../components/svg/IconWallpaperSVG";
import { IconArmchair } from "../components/svg/IconArmchairSVG";
import { IconBookcase } from "../components/svg/IconBookcaseSVG";
import { IconBookshelf } from "../components/svg/IconBookshelfSVG";
import { IconChair } from "../components/svg/IconChairSVG";
import { IconCupboard } from "../components/svg/IconCupboardSVG";
import { IconRecliner } from "../components/svg/IconReclinerSVG";
import { IconChest } from "../components/svg/IconShestSVG";
import { IconSink } from "../components/svg/IconSinkSVG";
import { IconSofaLine } from "../components/svg/IconSofaLineSVG";
import { IconWardrobe } from "../components/svg/IconWardrobeSVG";

interface Product {
  id: number;
  img: string;
  brand: string;
  title: string;
  rating: number;
  oldPrice: number;
  newPrice: number;
  type: string
}

interface Category {
  id: number;
  img: React.ReactNode;
  title: string;
  productCount: number;
}

export const data: Product[] = [
  {
    id: 1,
    img: "/assets/imgs/page/homepage1/img11.png",
    brand: "Routine",
    title: "Product 1",
    rating: 84,
    newPrice: 2.80,
    oldPrice: 22.51,
    type: 'chair'
  },
  {
    id: 2,
    img: "/assets/imgs/page/homepage1/img12.png",
    brand: "Routine",
    title: "Product 2",
    rating: 68,
    newPrice: 2.80,
    oldPrice: 22.51,
    type: 'chair'
  },

  {
    id: 3,
    img: "/assets/imgs/page/homepage1/img13.png",
    brand: "Routine",
    title: "Product 3",
    rating: 76,
    newPrice: 2.80,
    oldPrice: 22.51,
    type: 'sofa'
  },

  {
    id: 4,
    img: "/assets/imgs/page/homepage1/img14.png",
    brand: "Routine",
    title: "Product 4",
    rating: 125,
    newPrice: 2.80,
    oldPrice: 22.51,
    type: 'wardrobe'
  },

  {
    id: 5,
    img: "/assets/imgs/page/homepage1/img15.png",
    brand: "Routine",
    title: "Product 5",
    rating: 84,
    newPrice: 2.80,
    oldPrice: 22.51,
    type: 'bed'
  },

  {
    id: 6,
    img: "/assets/imgs/page/homepage1/img16.png",
    brand: "Routine",
    title: "Product 6",
    rating: 68,
    newPrice: 2.80,
    oldPrice: 22.51,
    type: 'chair'
  },

  {
    id: 7,
    img: "/assets/imgs/page/homepage1/img17.png",
    brand: "Routine",
    title: "Product 7",
    rating: 76,
    newPrice: 2.80,
    oldPrice: 22.51,
    type: 'sofa'
  },

  {
    id: 8,
    img: "/assets/imgs/page/homepage1/img18.png",
    brand: "Routine",
    title: "Product 8",
    rating: 125,
    newPrice: 2.80,
    oldPrice: 22.51,
    type: 'chair'
  },

  {
    id: 9,
    img: "/assets/imgs/page/homepage1/img19.png",
    brand: "Routine",
    title: "Product 9",
    rating: 84,
    newPrice: 2.805,
    oldPrice: 22.51,
    type: 'sofa'
  },

  {
    id: 10,
    img: "/assets/imgs/page/homepage1/img20.png",
    brand: "Routine",
    title: "Product 10",
    rating: 68,
    newPrice: 2.80,
    oldPrice: 22.51,
    type: 'bed'
  },

  {
    id: 11,
    img: "/assets/imgs/page/homepage1/img21.png",
    brand: "Routine",
    title: "Product 11",
    rating: 76,
    newPrice: 2.80,
    oldPrice: 22.51,
    type: 'bed'
  },

  {
    id: 12,
    img: "/assets/imgs/page/homepage1/img22.png",
    brand: "Routine",
    title: "Product 12",
    rating: 125,
    newPrice: 2.80,
    oldPrice: 22.51,
    type: 'wardrobe'
  },

];

export const ShopData: Product[] = [
  {
    id: 1,
    img: "/assets/imgs/page/shop/product-img-1.png",
    brand: "Routine",
    title: "Product 1",
    rating: 84,
    newPrice: 2.80,
    oldPrice: 22.51,
    type: 'chair'
  },
  {
    id: 2,
    img: "/assets/imgs/page/shop/product-img-2.png",
    brand: "Routine",
    title: "Product 2",
    rating: 68,
    newPrice: 2.80,
    oldPrice: 22.51,
    type: 'chair'
  },
  {
    id: 3,
    img: "/assets/imgs/page/shop/product-img-3.png",
    brand: "Routine",
    title: "Product 3",
    rating: 76,
    newPrice: 2.80,
    oldPrice: 22.51,
    type: 'sofa'
  },
  {
    id: 4,
    img: "/assets/imgs/page/shop/product-img-4.png",
    brand: "Routine",
    title: "Product 4",
    rating: 125,
    newPrice: 2.80,
    oldPrice: 22.51,
    type: 'wardrobe'
  },
  {
    id: 5,
    img: "/assets/imgs/page/shop/product-img-5.png",
    brand: "Routine",
    title: "Product 5",
    rating: 84,
    newPrice: 2.80,
    oldPrice: 22.51,
    type: 'bed'
  },
  {
    id: 6,
    img: "/assets/imgs/page/shop/product-img-6.png",
    brand: "Routine",
    title: "Product 6",
    rating: 68,
    newPrice: 2.80,
    oldPrice: 22.51,
    type: 'chair'
  },
  {
    id: 7,
    img: "/assets/imgs/page/shop/product-img-7.png",
    brand: "Routine",
    title: "Product 7",
    rating: 76,
    newPrice: 2.80,
    oldPrice: 22.51,
    type: 'sofa'
  },
  {
    id: 8,
    img: "/assets/imgs/page/shop/product-img-8.png",
    brand: "Routine",
    title: "Product 8",
    rating: 125,
    newPrice: 2.80,
    oldPrice: 22.51,
    type: 'chair'
  },
  {
    id: 9,
    img: "/assets/imgs/page/shop/product-img-9.png",
    brand: "Routine",
    title: "Product 9",
    rating: 84,
    newPrice: 2.805,
    oldPrice: 22.51,
    type: 'sofa'
  },
  {
    id: 10,
    img: "/assets/imgs/page/shop/product-img-10.png",
    brand: "Routine",
    title: "Product 10",
    rating: 68,
    newPrice: 2.80,
    oldPrice: 22.51,
    type: 'bed'
  },
  {
    id: 11,
    img: "/assets/imgs/page/shop/product-img-11.png",
    brand: "Routine",
    title: "Product 11",
    rating: 76,
    newPrice: 2.80,
    oldPrice: 22.51,
    type: 'bed'
  },
  {
    id: 12,
    img: "/assets/imgs/page/shop/product-img-12.png",
    brand: "Routine",
    title: "Product 12",
    rating: 125,
    newPrice: 2.80,
    oldPrice: 22.51,
    type: 'wardrobe'
  }
];

export const ViewedProductData: Product[] = [
  {
    id: 1,
    img: "/assets/imgs/page/shop/viewed-product-1.png",
    brand: "Routine",
    title: "Product 17",
    rating: 84,
    newPrice: 2.80,
    oldPrice: 22.51,
    type: 'chair'
  },
  {
    id: 2,
    img: "/assets/imgs/page/shop/viewed-product-2.png",
    brand: "Routine",
    title: "Product 18",
    rating: 68,
    newPrice: 2.80,
    oldPrice: 22.51,
    type: 'chair'
  },
  {
    id: 3,
    img: "/assets/imgs/page/shop/viewed-product-3.png",
    brand: "Routine",
    title: "Product 19",
    rating: 76,
    newPrice: 2.80,
    oldPrice: 22.51,
    type: 'sofa'
  },
  {
    id: 4,
    img: "/assets/imgs/page/shop/viewed-product-4.png",
    brand: "Routine",
    title: "Product 20",
    rating: 125,
    newPrice: 2.80,
    oldPrice: 22.51,
    type: 'wardrobe'
  },
  {
    id: 5,
    img: "/assets/imgs/page/shop/viewed-product-5.png",
    brand: "Routine",
    title: "Product 21",
    rating: 84,
    newPrice: 2.80,
    oldPrice: 22.51,
    type: 'bed'
  },
  {
    id: 6,
    img: "/assets/imgs/page/shop/viewed-product-6.png",
    brand: "Routine",
    title: "Product 22",
    rating: 84,
    newPrice: 2.80,
    oldPrice: 22.51,
    type: 'bed'
  }
];

export const Categories: Category[] = [
  {
    id: 1,
    title: "Bookshelf",
    img: <IconBookshelf />,
    productCount:1253
  },
  {
    id: 2,
    title: "Armchair",
    img: <IconArmchair />,
    productCount:1253
  },
  {
    id: 3,
    title: "Chair",
    img: <IconChair />,
    productCount:1253
  },
  {
    id: 4,
    title: "Bookcase",
    img: <IconBookcase />,
    productCount:1253
  },
  {
    id: 5,
    title: "Wardrobe",
    img: <IconWardrobe />,
    productCount:1253
  },
  {
    id: 6,
    title: "Chest",
    img: <IconChest />,
    productCount:1253
  },
  {
    id: 7,
    title: "Sofa",
    img: <IconSofaLine />,
    productCount:1253
  },
  {
    id: 8,
    title: "Cupboard",
    img: <IconCupboard />,
    productCount:1253
  },
  {
    id: 9,
    title: "Recliner",
    img: <IconRecliner />,
    productCount:1253
  },
  {
    id: 10,
    title: "Wallpaper",
    img: <IconWallpaper />,
    productCount:1253
  },
  {
    id: 11,
    title: "Sink",
    img: <IconSink />,
    productCount:1253
  },
  {
    id: 12,
    title: "Others",
    img: <IconOthers />,
    productCount:1253
  }
]; 