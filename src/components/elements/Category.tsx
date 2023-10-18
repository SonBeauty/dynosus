import React from 'react'
import Style from '../../css/Category.module.css'
import Button from './Button/Button';

const data = [
    {
        image: './assets/imgs/page/homepage1/imgC-1.png',
        text: 'Delivering the highest quality items is our commitment, and ensuring exceptional customer experiences is always our top priority.',
        title: 'Most Trendy Sofa',
        room: 'Living room'
    },
    {
        image: './assets/imgs/page/homepage1/imgC-2.png',
        text: 'Delivering the highest quality items is our commitment, and ensuring exceptional customer experiences is always our top priority.',
        title: 'Most Trendy Bed',
        room: 'Bed Room'
    },
    {
        image: './assets/imgs/page/homepage1/imgC-3.png',
        text: 'Delivering the highest quality items is our commitment, and ensuring exceptional customer experiences is always our top priority.',
        title: 'Most Trendy Tables',
        room: 'Dining room'
    },
    {
        image: './assets/imgs/page/homepage1/imgC-4.png',
        text: 'Delivering the highest quality items is our commitment, and ensuring exceptional customer experiences is always our top priority.',
        title: 'Popular Kitchen Item',
        room: 'Kitchen room'
    },
];

const Category = () => {
    return (
        <div className="container text-center">
            <div className='mb-100'>
                <p className={Style.textTitle}>Categories</p>
                <p className={Style.textBody}>Find out what you need your home</p>
            </div>
            {data.map((item, index) => (
                <div className={index % 2 === 0 ? `${Style.row}` : `${Style.rowReverse}`} key={index}>
                    <div className={Style.imgContain}>
                        <img src={item.image} alt='img' />
                    </div>
                    <div className={Style.roomContain}>
                        <div className={index % 2 === 0 ? `${Style.room} ${Style.roomRow}` : `${Style.room} ${Style.roomReverse}`}>
                            <p className={Style.textRoom}>{item?.room}</p>
                        </div>
                    </div>
                    <div className={`text-center col-lg-5 col-md-5 ${Style.textContain} `}>
                        <div className={Style.textTitle}>{item.title}</div>
                        <div className={`${Style.textBody} mb-30`}>{item.text}</div>
                        <Button content='View more' />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Category