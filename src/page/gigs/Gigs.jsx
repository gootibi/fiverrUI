import React, { useState } from 'react'
import './Gigs.scss'
import { gigs } from '../../data.js'
import GigCard from '../../components/gigCard/GigCard.jsx'

const Gigs = () => {

  const [ sort, setSort ] = useState('sales')
  const [ open, setOpen ] = useState(false)

  const reSort = (type) => {
    setSort(type)
    setOpen(false)
  }

  return (
    <div className='gigs'>
      <div className="container">
        <span className="breadcrumbs">FIVERR > GRAPHICS & DESING ></span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Fiverr's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder='min' />
            <input type="text" placeholder='max' />
            <button>Applay</button>
          </div>
          <div className="right">
            <span className="sortBy">SortBy</span>
            <span className="sortType">{sort === 'sales' ? 'Best Selling' : 'Newest'}</span>
            <img src="./img/down.png" alt="down" onClick={() => setOpen(!open)}/>
            {open && <div className="rightMenu">
              {sort === 'sales' ? <span onClick={() => reSort('createdAt')}>Newest</span>
              : <span onClick={() => reSort('sales')}>Best Selling</span>}
            </div>}
          </div>
        </div>
        <div className="cards">
            {gigs.map(gig => (
              <GigCard key={gig.id} item={gig} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Gigs