import React, { useState } from 'react'
import TrackerItem from '../components/TrackerItem'

function Tracker() {
    const initial = [{ id: 1, title: "test1" }, { id: 2, title: "test2" }]

    const [trackingItems, setTrackingItems] = useState(initial);

    function AddNewItem() {
        setTrackingItems([...trackingItems, { id: 3, title: "test3" }]);
    }

    //how will you do it where when you add a new tracker item it creates an item with a blank title and promps for title?

    return (
        <div className='tracker'>
            <h2 className="tracker__title">
                Time Tracker
            </h2>
            <div className="tracker__add">
                <h3>Add Tracking Category</h3>
                <button onClick={() => AddNewItem()}>+</button>
            </div>
            <div className="tracker__items">
                {trackingItems && trackingItems.map(item => (
                    <TrackerItem key={item.id} id={item.id} title={item.title} />
                ))}
            </div>
        </div>
    )
}

export default Tracker