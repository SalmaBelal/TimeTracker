import React from 'react'
import "./TrackerItem.css"

function TrackerItem() {
    return (
        <div className='trackerItem'>
            <h2>Item Name</h2>
            <div className="trackerItem__timer">
                <button>start</button>
                <button>stop</button>
            </div>
            <h2>Time Spent: 0</h2>
            <div className="trackerItem__modify">
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default TrackerItem