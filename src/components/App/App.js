import { useState } from 'react';
import DateSelector from '../DateSelector/DateSelector';
import EmailCount from '../EmailCount/EmailCount';
import EmailContainer from '../EmailContainer/EmailContainer';
import './App.css';

function App() {
  const [dateRange] = useState({
    startDate: new Date('2020/1/1'),
    endDate: new Date('2020/1/1')
  });

  //Dummy data with multiple emails
  const [dummyData] = useState({
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
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum quam at nulla rhoncus bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam consectetur ullamcorper lacus ut rutrum. Nunc fermentum odio metus, ut tincidunt lorem iaculis ac. Quisque tincidunt vehicula lacinia. Curabitur semper efficitur erat, ac elementum nunc laoreet sit amet. In fermentum leo a laoreet porta. Nunc sodales commodo massa, vitae commodo libero ullamcorper vitae. Praesent felis dui, iaculis eu varius iaculis, finibus eu est. Vivamus dignissim tempus orci, rutrum tempor est facilisis ac. Ut hendrerit turpis nibh, vel mollis tellus tincidunt at. Phasellus quis consectetur leo, efficitur venenatis lectus. Curabitur dictum, diam et malesuada condimentum, quam nunc vehicula orci, sed consectetur nisi ex blandit dui. Integer consectetur arcu nec elit tempor, eu mollis diam scelerisque. Pellentesque efficitur gravida pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum quam at nulla rhoncus bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam consectetur ullamcorper lacus ut rutrum. Nunc fermentum odio metus, ut tincidunt lorem iaculis ac. Quisque tincidunt vehicula lacinia. Curabitur semper efficitur erat, ac elementum nunc laoreet sit amet. In fermentum leo a laoreet porta. Nunc sodales commodo massa, vitae commodo libero ullamcorper vitae. Praesent felis dui, iaculis eu varius iaculis, finibus eu est. Vivamus dignissim tempus orci, rutrum tempor est facilisis ac. Ut hendrerit turpis nibh, vel mollis tellus tincidunt at. Phasellus quis consectetur leo, efficitur venenatis lectus. Curabitur dictum, diam et malesuada condimentum, quam nunc vehicula orci, sed consectetur nisi ex blandit dui. Integer consectetur arcu nec elit tempor, eu mollis diam scelerisque. Pellentesque efficitur gravida pharetra. ',
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
        body: 'asfdgfd',
        date: new Date('2010-10-10 10:10')
      }
    ]
  })

  //Dummy data with no emails
  /*const [dummyData, setDummyData] = useState({
    emails: [

    ]
  })*/

  return (
    <div className='App'>
      <DateSelector dateRange={dateRange}/>
      <EmailCount numberOfEmails={dummyData.emails.length}/>
      <EmailContainer emails={dummyData.emails}/>
    </div>
  );
}

export default App;
