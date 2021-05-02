import './DateSelector.css';
import calenderIcon from '../../assets/images/icon_calender.svg';
import searchIcon from '../../assets/images/icon_search.svg';

export default function DateSelector({dateRange}) {

    const openCalender = () => {}

    const search = () => {}

    return (
        <div id='selectorContainer'>
            <div id='dateSelector'>
                <input onClick={openCalender} id='calenderIcon' type='image' src={calenderIcon} alt='Open calender' width='28'/>
                <p>{dateRange.startDate} - {dateRange.endDate}</p>
            </div>
            <input onClick={search} id='searchIcon' type='image' src={searchIcon} alt='Search selected dates' width='25'/>
        </div>
    )
}