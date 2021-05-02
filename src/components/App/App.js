import { useState } from 'react';
import DateSelector from '../DateSelector/DateSelector';
import EmailCount from '../EmailCount/EmailCount';
import EmailContainer from '../EmailContainer/EmailContainer';
import './App.css';

function App() {
  const [dateRange, setDateRange] = useState({
    startDate: new Date('2020/1/1'),
    endDate: new Date('2020/1/1')
  });

  const dummyData = {
    numberOfEmails: 0,
    emails: [
      {
        id: 0,
        sender: 'aaa@example.com',
        recips: [
          'zzz.zzz@example.com'
        ],
        subj: '[ HR-888 ] Notice of official announcement',
        body: 'test',
        date: new Date('2021-02-05 12:32'),
        att: {
          name: 'attch1',
          size: '10KB'
        }
      },
      {
        id: 1,
        sender: 'bbb.bbbb@example.com',
        recips: [
          'yyy@example.com'
        ],
        subj: '[web:333] "Web Contact"',
        body: 'testtest',
        date: new Date('2021-01-01 21:22')
      },
      {
        id: 3,
        sender: 'eee@gmail.com',
        recips: [
          'vvv.v@exam.com',
          'hello@hmail.com',
          'gmail@gt.co.uk'
        ],
        subj: 'Multiple adasfglk lkselkrj fjlseartj trrtj trekslt lrrejkgdgkfsdlkgf gfdsklfsd fsdjlkfsdfsdf fjdfgklfd dflgkdytkg  rre rt a',
        body: 'tesssssst',
        date: new Date('2010-01-12 01:02')
      },
      {
        id: 4,
        sender: 'casey@casey.com',
        recips: [
          'test1@gmail.com',
          'test2@test2.fr'
        ],
        subj: 'asddff',
        body: 'lorem ipsum',
        date: new Date('2010-10-10 10:10')
      }
    ]
  }

  return (
    <div className='App'>
      <DateSelector dateRange={dateRange}/>
      <EmailCount numberOfEmails={dummyData.numberOfEmails}/>
      <EmailContainer emails={dummyData.emails}/>
    </div>
  );
}

export default App;
