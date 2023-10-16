import React, { useState } from 'react'
import ButtonActive from './ButtonActive'
import NewProduct from './NewProduct'

const NewProducts: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <>
            <ul className="nav" role="tablist">
                <ButtonActive setActive={setActiveIndex} />
            </ul>
            <div className="container mt-30">
                <div className="tab-content">
                    <NewProduct activeIndex={activeIndex} />
                </div>
            </div>
        </>
    )
}

export default NewProducts