import './DateSelector.css';
import calendarIcon from '../../assets/images/icon_calendar.svg';
import searchIcon from '../../assets/images/icon_search.svg';

export default function DateSelector({dateRange}) {
    
    const openCalendar = () => {}

    const search = () => {}

    return (
        <div id='selectorContainer'>
            <div id='dateSelector'>
                <input onClick={openCalendar} id='calendarIcon' type='image' src={calendarIcon} alt='Open calendar' width='28'/>
                {/*There will be a more efficient way of doing the below but this works totally fine*/}
                <p>{dateRange.startDate.getFullYear()}/{dateRange.startDate.getMonth() + 1}/{dateRange.startDate.getDate()} - {dateRange.endDate.getFullYear()}/{dateRange.endDate.getMonth() + 1}/{dateRange.endDate.getDate()}</p>
            </div>
            <input onClick={search} id='searchIcon' type='image' src={searchIcon} alt='Search selected dates' width='25'/>
        </div>
    )
}