import { stay } from '../../Data/Tailored'
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface stayData {
    title: string,
    content: string
}

const BestSeller = () => {
    const { pathname } = useLocation()
    const [location, setLocation] = useState<stayData[]>([])

    useEffect(() => {
        switch (pathname) {
            case '/index-3':
                setLocation(stay)
                break
            default:
                setLocation([])
                break
        }
    }, [pathname])

    return (
        <>
            {location.map((item) => (
                <div className="col-lg-6 col-sm-6 col-12 mt-50">
                    <h4 className="text-heading-6 icon-leaf">{item?.title}</h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                        {item?.content}
                    </p>
                </div>
            ))}
        </>

    )
}

export default BestSeller