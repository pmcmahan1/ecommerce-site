import React from 'react'
import './NewProducts.scss'
import Card from '../Card/Card'
import img from './img.jpg'
import img2 from './img2.jpg'

const NewProducts = () => {

    const data = [
        {
            id: 1,
            img: img,
            img2: img2,
            title: "Refresh",
            isNew: true,
            oldPrice: 15,
            price: 12,
        },
        {
            id: 2,
            img: img,
            img2: img2,
            title: "Spearmint",
            isNew: true,
            oldPrice: 15,
            price: 12,
        },
        {
            id: 3,
            img: img,
            img2: img2,
            title: "Honeydew",
            isNew: false,
            oldPrice: 15,
            price: 12,
        },
        {
            id: 4,
            img: img,
            img2: img2,
            title: "Lavender Dream",
            isNew: false,
            oldPrice: 15,
            price: 12,
        },
    ]

  return (
    <div className='newProducts'>
        <div className="top">
            <h1>Featured Products</h1>
        </div>
        <div className="bottom">
            {data.map(item=>(
                <Card item={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default NewProducts