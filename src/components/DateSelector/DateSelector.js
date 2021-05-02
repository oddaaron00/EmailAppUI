import { useState } from 'react'

export default function DateSelector() {
    const [dateRange, setDateRange] = useState('');

    return (
        <div id='dateSelector'>
            <button id='openCalenderButton'>
            </button>
                <img src='src/assets/icon_calender.svg' alt='Open calender'/>
            <p>TEXT</p>
            <button id='searchDatesButton'>
                <img src='src/assets/icon_search.svg' alt='Search date range'/>
            </button>
        </div>
    )
}