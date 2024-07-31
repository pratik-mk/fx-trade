import React, { useState } from 'react'
import './DataCollection.css'

const DataCollection = () => {
  const [selected, setSelected] = useState('1-10')

  const ranges = [
    '1-10',
    '11-20',
    '21-30',
    '31-40',
    '41-50',
    '51-60',
    '61-70',
    '71-80',
    '81-90',
    '90-100',
    '100-110',
    '110-120',
    '120-130',
    '130-140',
    '140-150',
    '150-160',
    '160-170',
    '170-180',
  ]

  return (
    <div className='data-collection'>
      <div className='header'>
        <div>Data Collection Account</div>
        <div className='tabs'>
          <button className='tab'>Mt 4</button>
          <button className='tab selected'>Mt 5</button>
        </div>
      </div>
      <div className='ranges'>
        {ranges.map((range, index) => (
          <button
            key={index}
            className={`range-button ${selected === range ? 'selected' : ''}`}
            onClick={() => setSelected(range)}
          >
            {range}
          </button>
        ))}
      </div>
    </div>
  )
}

export default DataCollection
