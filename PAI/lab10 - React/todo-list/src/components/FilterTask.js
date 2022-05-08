import React, { useState } from 'react'

const FilterTask = ({ filter }) => {


    const [click, setClick] = useState(true)

    const isClicked = () => {
        setClick(!click)
        filter(click)
        
    }

    return (
        <div className='filter-div'>
            <input type="checkbox" id="filter" className="filter" onClick={isClicked} />
            <label htmlFor="filter" >hide completed</label>
        </div>
    )

}

export default FilterTask