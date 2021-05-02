import { useState } from 'react';
import DateSelector from '../DateSelector/DateSelector';
import EmailCount from '../EmailCount/EmailCount';
import './App.css';

function App() {
  const [dateRange, setDateRange] = useState({
    startDate: '2020/1/1',
    endDate: '2020/1/1'
  });

  const dummyData = {
    numberOfEmails: 0
  }

  return (
    <div className='App'>
      <DateSelector dateRange={dateRange}/>
      <EmailCount numberOfEmails={dummyData.numberOfEmails}/>
    </div>
  );
}

export default App;
