import React from 'react'
import './Cart.scss'
import img from '../NewProducts/img.jpg'
import img2 from '../NewProducts/img2.jpg'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"

const Cart = () => {

    const data = [
        {
            id: 1,
            img: img,
            img2: img2,
            title: "Refresh",
            desc: "This candle is the bomb",
            isNew: true,
            oldPrice: 15,
            price: 12,
        },
        {
            id: 1,
            img: img,
            img2: img2,
            title: "Refresh",
            desc: "This candle is the bomb",
            isNew: true,
            oldPrice: 15,
            price: 12,
        },
    ]

  return (
    <div className='cart'>
    <h1>Your Cart</h1>
    {data?.map(item=>(
        <div className="item" key={item.id}>
        <img src={item.img} alt="" />
        <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0,100)}</p>
            <div className="price">1 x ${item.price}</div>
        </div>
        <DeleteOutlinedIcon className='delete'/>
        </div>
    ))}
    <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart