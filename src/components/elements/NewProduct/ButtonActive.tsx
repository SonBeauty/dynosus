import React, { useState } from "react";
import { Link } from "react-router-dom";

type ButtonActiveProps = {
    setActive: React.Dispatch<React.SetStateAction<number>>;
};

const ButtonActive: React.FC<ButtonActiveProps> = ({ setActive }) => {
    const items = [
        {
            title: "New product",
        },
        {
            title: "Special",
        },
        {
            title: "Women",
        },
        {
            title: "Men",
        },
        {
            title: "Kids",
        },
        {
            title: "Accessories",
        },
    ];
    const [activeIndex, setActiveIndex] = useState(1);
    console.log('button', activeIndex);

    const handleOnClick = (index: number) => {
        setActiveIndex(index);
        setActive(index)
    };

    return (
        <>
            {items.map((item, index) => (
                <li key={index} onClick={() => handleOnClick(index + 1)}>
                    <Link
                        to={`/#tab-${index + 1}`}
                        className={
                            activeIndex === index + 1
                                ? "btn btn-default btn-bd-green-hover btn-select active"
                                : "btn btn-default btn-bd-green-hover btn-select"
                        }>
                        {item?.title}
                    </Link>
                </li>
            ))}
        </>
    );
};

export default ButtonActive;
