import './EmailContainer.css';
import NoEmails from "../NoEmails/NoEmails";
import EmailSnippet from '../EmailSnippet/EmailSnippet';
import arrowUp from '../../assets/images/icon_arrow01.svg';
import arrowDown from '../../assets/images/icon_arrow01_down.svg';
import { useState } from 'react';

export default function EmailContainer({ emails }) {
    //0 = none, 1 = asc, 2 = desc
    const [sortDir, setSortDir] = useState(0);
    const [localEmails, setLocalEmails] = useState([{
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
      }]);
    const [sortHeading, setSortHeading] = useState();

    const headerSort = colName => {
        let sortedEmails;
        /*if (colName !== sortHeading) {
          setSortDir(1);
        }*/
        switch (sortDir) {
            case 0:
                sortedEmails = localEmails.sort((a, b) => {
                    if (a[colName] < b[colName]) return -1;
                    if (a[colName] > b[colName]) return 1;
                    return 0;
                });
                setSortDir(1);
                setSortHeading(colName);
                setLocalEmails([...sortedEmails]);
                break;
            case 1:
                sortedEmails = localEmails.sort((a, b) => {
                    if (a[colName] > b[colName]) return -1;
                    if (a[colName] < b[colName]) return 1;
                    return 0;
                });
                setSortDir(2);
                setSortHeading(colName);
                setLocalEmails([...sortedEmails]);
                break;
            case 2:
                setLocalEmails([...emails]);
                setSortHeading(colName);
                setSortDir(0);
                break;
            default:
                break;
        }
    }

    const table = (
        <table id='emailTable'>
            <thead id='tableHeader'>
                <tr onClick={e => headerSort(e.target.className)}>
                    <th className='sender' width='14%'>From {sortHeading === 'sender' && <img src={sortDir === 1 ? arrowUp : sortDir === 2 ? arrowDown : ''} alt='' width='12px'/>}</th>
                    <th className='recips' width='20%'>To {sortHeading === 'recips' && <img src={sortDir === 1 ? arrowUp : sortDir === 2 ? arrowDown : ''} alt='' width='12px'/>}</th>
                    <th className='extraRecips' width='4%'></th>
                    <th className='subj' width='47%'>Subject {sortHeading === 'subj' && <img src={sortDir === 1 ? arrowUp : sortDir === 2 ? arrowDown : ''} alt='' width='12px'/>}</th>
                    <th className='att' width='4%'></th>
                    <th className='date' width='11%' id='dateHeader' >Date {sortHeading === 'date' && <img src={sortDir === 1 ? arrowUp : sortDir === 2 ? arrowDown : ''} alt='' width='12px'/>}</th>
                </tr>
            </thead>
            <tbody>
                {localEmails.map(email => <EmailSnippet key={email.id} email={email}/>)}
            </tbody>
        </table>
    )

    return (
        <div id='emailContainer'>
            {emails.length === 0 && <NoEmails/>}
            {emails.length !== 0 && table}
        </div>
    )
}