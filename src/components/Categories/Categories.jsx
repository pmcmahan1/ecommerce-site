import React from 'react'
import './Categories.scss'
import classics from './classics.jpg'
import gifts from './gifts.jpg'
import newP from './new.jpg'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
            <img src={newP} alt="" />
            <button>
                    <Link className="link" to="/products/1">New</Link>
                </button>
            </div>
            <div className="row">
            <img src={gifts} alt="" />
            <button>
                    <Link className="link" to="/products/1">Gifts</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
            <img src={classics} alt="" />
            <button>
                    <Link className="link" to="/products/1">Classics</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Categories