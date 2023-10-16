import { Link } from "react-router-dom";
import { blogsData5 } from "../../Data/Blog"
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

interface BlogData {
    tag: string;
    title: string;
    imageUrl: string;
    link: string;
    bgColor: string;
}

const Blog = () => {
    const { pathname } = useLocation()
    const [location, setLocation] = useState<BlogData[]>([])
    useEffect(() => {
        switch (pathname) {
            case '/':
                setLocation(blogsData5)
                break
            case '/index-4':
                setLocation(blogsData5)
                break
            case '/index-3':
                setLocation(blogsData5)
                break
            default:
                setLocation([])
                break
        }
    }, [pathname])

    return (
        <>
            {location.map((item, i) => {
                return (
                    <div className="col-lg-4 col-md-6 col-sm-12 pr-30 mb-20">
                        <div className="card-grid-style-4">
                            <div className="blog-category">
                                <span className="tag-dot">{`${item.tag}`}</span>
                                <div className='h-title'>
                                    <Link to="/#" className="text-heading-5">
                                        {`${item?.title}`}
                                    </Link>
                                </div>
                            </div>
                            <div className={`grid-4-img ${item?.bgColor}`}>
                                <Link to="/#">
                                    <img
                                        src={`${item?.imageUrl}`}
                                        alt="Moirai"
                                        className="w-100"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Blog