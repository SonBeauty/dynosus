import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ModalVideo from 'react-modal-video';

const NewProduct: React.FC<{ activeIndex: number }> = ({ activeIndex }) => {
    const ProductData = [{
        title: "New product",
        content: "  Embrace sustainable fashion with our new line of  clothing made from ethically sourced organic cotton and recycled materials, ensuring both style and environmental consciousness go hand in hand",
        img: "img-product-1.png",
        background: "bg-2"
    }, {
        title: "Design Studios That Everyone Should Know",
        content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        img: "img-1-2.jpg",
        background: "bg-1"
    }, {
        title: "We can blend colors multiple ways",
        content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        img: "img-1-3.jpg",
        background: "bg-3"
    }, {
        title: "Choose The Best Plan That&apos;s For You",
        content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        img: "img-1-4.jpg",
        background: "bg-4"
    }, {
        title: "Subscribe our newsletter to get gift",
        content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        img: "img-1-5.jpg",
        background: "bg-5"
    }, {
        title: "Ready to get started? Create and Account",
        content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        img: "img-1-6.jpg",
        background: "bg-6"
    }]
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            {ProductData.map((item, index) => (
                <div
                    className={
                        activeIndex === index + 1
                            ? "tab-pane fade  active show"
                            : "tab-pane fade "
                    }
                >
                    <div className={`${item?.background} panel-box mt-50`}>
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <div className="box-optimized">
                                    <h3 className="text-heading-2">
                                        {item?.title}
                                    </h3>
                                    <p className="text-body-excerpt mt-30">
                                        {item?.content}
                                    </p>
                                    <div className="mt-40">
                                        <Link to="/#" className="btn btn-default btn-white icon-arrow-right">
                                            Learn more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <div className="block-video icon-pattern">
                                    <div
                                        className="popup-youtube btn-play-video"
                                        onClick={() => setOpen(true)}
                                    ></div>
                                    <img
                                        src={`/assets/imgs/page/homepage1/${item?.img}`}
                                        alt="Dionysus"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <ModalVideo
                channel="youtube"
                youtube={{
                    autoplay: 1,
                    mute: 1,
                }}
                isOpen={isOpen}
                videoId="A450hyqGkmk"
                onClose={() => setOpen(false)}
            />
        </>
    )
}

export default NewProduct