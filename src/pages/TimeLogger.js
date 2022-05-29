import React from 'react'
import "./TimeLogger.css"

function TimeLogger() {
    return (
        <div className='timeLogger'>
            <h1>Tracker Item Name</h1>
            <form>
                <div className='timeLogger__timeSpent'>
                    <label>Time Spent</label>
                    <input type="datetime-local"></input>
                </div>

                <button className='timeLogger__submit' type='submit'>Submit</button>
                <button className='timeLogger__discard'>Discard</button>

            </form>

        </div>
    )
}

export default TimeLogger