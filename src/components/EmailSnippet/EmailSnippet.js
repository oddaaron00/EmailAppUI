import './EmailSnippet.css';
import clipIcon from '../../assets/images/icon_clip.svg';
import clipIconHover from '../../assets/images/icon_clip_hover.svg';
import { useEffect, useState } from 'react';

/**
 * @param {Number} email.id - ID
 * @param {String} email.sender - Sender
 * @param {String[]} email.recips - Recipients
 * @param {String} email.subj - Subject
 * @param {String} email.body - Body
 * @param {Date} email.date - Date sent
 * @param {String} att.name - Attachment name (if present)
 * @param {String} att.size - Attachment size (if present)
 */
export default function EmailSnippet({ email }) {
    const [hover, setHover] = useState(false);

    /*
    //Function taken from https://stackoverflow.com/questions/143815/determine-if-an-html-elements-content-overflows?noredirect=1&lq=1
    function checkOverflow(el)
    {
        console.log(el);
       var curOverflow = el.style.overflow;
    
       if ( !curOverflow || curOverflow === "visible" )
          el.style.overflow = "hidden";
    
       var isOverflowing = el.clientWidth < el.scrollWidth 
          || el.clientHeight < el.scrollHeight;
    
       el.style.overflow = curOverflow;
    
       console.log(isOverflowing);
    }

    const isOverflown = element => {
        let isOverflown = element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
      }
      
    const fun = textArr => {
        console.log(textArr.join(', ').scrollWidth);
        
    }*/

    const determineDateFormat = date => {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        const currentDateTime = new Date();
        if (currentDateTime.getFullYear() === date.getFullYear() && currentDateTime.getMonth() === date.getMonth() 
                && currentDateTime.getDate() === date.getDate()) {
            return date.getHours() + ':' + date.getMinutes();
        }
        else if (currentDateTime.getFullYear() === date.getFullYear()) {
            return monthNames[date.getMonth()] + ' ' + date.getDay();
        } else {
            return email.date.getFullYear() + '/' + (email.date.getMonth() + 1) + '/' + email.date.getDate();
        }
    }

    return (
        <tr className='emailSnippet' style={hover ? {color: '#0033dd', backgroundColor: '#f7f9fa'} : {}} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <td>{email.sender}</td>
            <td>{email.recips.join(', ')}</td>
            <td>{}</td>
            <td>{email.subj}</td>
            <td>{typeof email.att != "undefined" && <img width='19px' src={hover ? clipIconHover : clipIcon}/>}</td>
            <td className='dateRow'>{determineDateFormat(email.date)}</td>
        </tr>
    )
}