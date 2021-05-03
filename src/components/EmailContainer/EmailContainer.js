import './EmailContainer.css';
import NoEmails from "../NoEmails/NoEmails";
import EmailSnippet from '../EmailSnippet/EmailSnippet';
import arrowUp from '../../assets/images/icon_arrow01.svg';
import arrowDown from '../../assets/images/icon_arrow01_down.svg';
import { useState } from 'react';

export default function EmailContainer({ emails, width }) {
    //0 = none, 1 = asc, 2 = desc
    const [sortDir, setSortDir] = useState(0);
    const [localEmails, setLocalEmails] = useState(emails);
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

    const tableDesktop = (
        <table id='emailTable'>
            <thead id='tableHeader'>
                <tr onClick={e => headerSort(e.target.className)} id='headerRow'>
                    <th className='sender' width='14%'>From {sortHeading === 'sender' && <img src={sortDir === 1 ? arrowUp : sortDir === 2 ? arrowDown : ''} alt='' width='12px'/>}</th>
                    <th className='recips' width='20%'>To {sortHeading === 'recips' && <img src={sortDir === 1 ? arrowUp : sortDir === 2 ? arrowDown : ''} alt='' width='12px'/>}</th>
                    <th className='extraRecips' width='4%'></th>
                    <th className='subj' width='47%'>Subject {sortHeading === 'subj' && <img src={sortDir === 1 ? arrowUp : sortDir === 2 ? arrowDown : ''} alt='' width='12px'/>}</th>
                    <th className='att' width='4%'></th>
                    <th className='date' width='11%' id='dateHeader' >Date {sortHeading === 'date' && <img src={sortDir === 1 ? arrowUp : sortDir === 2 ? arrowDown : ''} alt='' width='12px'/>}</th>
                </tr>
            </thead>
            <tbody>
                {localEmails.map(email => <EmailSnippet key={email.id} email={email} width={width}/>)}
            </tbody>
        </table>
    )

    const tableMobile = (
      <>
        <table id='emailTable'>
            <thead id='tableHeader'>
              <tr className='spaceFixTop'></tr>
                <tr id='headerRow'>
                    <th
                      style={(sortHeading === 'sender' && sortDir !== 0) ? {paddingLeft: '25px', color: '#111111'} : {paddingLeft: '25px'}}
                      className='sender'
                      onClick={e => headerSort(e.target.className)}
                    >
                      From {(sortHeading === 'sender' && sortDir !== 0) && <img src={sortDir === 1 ? arrowUp : arrowDown} alt='' width='12px'/>}
                    </th>
                    <th
                      style={(sortHeading === 'recips' && sortDir !== 0) ? {paddingLeft: '25px', color: '#111111'} : {}}
                      className='recips borderClass'
                      onClick={e => headerSort(e.target.className.split(' ')[0])}
                    >
                      To {(sortHeading === 'recips' && sortDir !== 0) && <img src={sortDir === 1 ? arrowUp : arrowDown} alt='' width='12px'/>}
                    </th>
                    <th
                      style={(sortHeading === 'subj' && sortDir !== 0) ? {paddingLeft: '25px', color: '#111111'} : {}}
                      className='subj borderClass'
                      onClick={e => headerSort(e.target.className.split(' ')[0])}
                    >
                      Subject {(sortHeading === 'subj' && sortDir !== 0) && <img src={sortDir === 1 ? arrowUp : arrowDown} alt='' width='12px'/>}
                    </th>
                    <th
                      style={(sortHeading === 'date' && sortDir !== 0) ? {paddingLeft: '25px', color: '#111111'} : {}}
                      className='date borderClass'
                      id='dateHeader'
                      onClick={e => headerSort(e.target.className.split(' ')[0])}
                    >
                      Date {(sortHeading === 'date' && sortDir !== 0) && <img src={sortDir === 1 ? arrowUp : arrowDown} alt='' width='12px'/>}
                    </th>
                    <th></th>
                </tr>
                <tr className='spaceFixBottom'></tr>
            </thead>
        </table>
        <div id='containerMobile'>
            {localEmails.map(email => <EmailSnippet key={email.id} email={email} width={width}/>)}
        </div>
        </>
    )

    return (
        <div id='emailContainer'>
            {emails.length === 0 ? <NoEmails/> : width <= 550 ? tableMobile : tableDesktop}
        </div>
    )
}