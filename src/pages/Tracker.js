import React from 'react'
import TrackerItem from '../components/TrackerItem'

function Tracker() {
    return (
        <div className='tracker'>
            <h2 className="tracker__title">
                Time Tracker
            </h2>
            <div className="tracker__add">
                <h3>Add Tracking Category</h3>
                <button>+</button>
            </div>
            <div className="tracker__items">
                <TrackerItem />
                <TrackerItem />
                <TrackerItem />
            </div>


        </div>
    )
}

export default Tracker