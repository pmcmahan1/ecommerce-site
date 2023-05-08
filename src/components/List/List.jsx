import React from 'react'
import './List.scss'
import Card from '../Card/Card'
import img from '../NewProducts/img.jpg'
import img2 from '../NewProducts/img2.jpg'

const List = () => {

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
    <div className='list'>{data?.map(item=>(
        <Card item={item} key={item.id} />
    ))}</div>
  )
}

export default List