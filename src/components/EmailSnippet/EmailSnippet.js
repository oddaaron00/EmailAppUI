import './EmailSnippet.css';
import clipIcon from '../../assets/images/icon_clip.svg';
import clipIconHover from '../../assets/images/icon_clip_hover.svg';
import { useState } from 'react';
import useWindowSize from '../../utils/useWindowSize';
import mailIcon from '../../assets/images/icon_mail_sp.svg';
import arrowIcon from '../../assets/images/icon_arrow02.svg';
import EmailBody from '../EmailBody/EmailBody';

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
    const [onBody, setOnBody] = useState(false);
    const { width } = useWindowSize();

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

    const snippetDesktop = (
        <tr className='emailSnippet' style={(hover || onBody) ? {color: '#0033dd', backgroundColor: '#f7f9fa', cursor: 'pointer'} : {}} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onDoubleClick={() => setOnBody(!onBody)}>
            <td>{email.sender}</td>
            <td>{email.recips.join(', ')}</td>
            <td>{}</td>
            <td>{email.subj}</td>
            <td>{typeof email.att != "undefined" && <img alt='' width='19px' src={(hover || onBody) ? clipIconHover : clipIcon}/>}</td>
            <td className='dateRow'>{determineDateFormat(email.date)}</td>
        </tr>
    )

    const snippetMobile = (
        <div className="angry-grid" style={onBody ? {color: '#0033dd', backgroundColor: '#f7f9fa', cursor: 'pointer'} : {cursor: 'pointer'}} onDoubleClick={() => setOnBody(!onBody)}>
            <div className="item-0"></div>
            <div id="item-1">
                <img src={mailIcon} alt='' width='17px' className='mailIcon'/>
            </div>
            <div id="item-2">
                <p style={{marginTop: '0px'}}>{email.subj}</p>
            </div>
            <div id="item-3">
                <p>{email.sender}</p>
            </div>
            <div id="item-4">
                <p style={typeof email.att != "undefined" ? {marginTop: '10px'} : {}}>{typeof email.att != "undefined" && <img alt='' className='clipIcon' width='19px' src={clipIcon}/>} {determineDateFormat(email.date)} <img className='arrowIcon' src={arrowIcon} alt='' width='4px'/></p>
            </div>
            <div id="item-5">
                {email.recips.join(', ')}
            </div>
            <div id="item-6">
                <p>+1</p>
            </div>
        </div>
    )

    const calcReturn = () => {
        if (width < 550) {
            if (onBody) {
                return (
                    <>
                    {snippetMobile}
                    <EmailBody body={email.body} medium='mobile'/>
                    </>
                )
            } else {
                return snippetMobile;
            }
        } else {
            if (onBody) {
                return (
                    <>
                    {snippetDesktop}
                    <EmailBody body={email.body} medium='desktop'/>
                    </>
                )
            } else {
                return snippetDesktop;
            }
        }
    }

    return (
        <>
        {calcReturn()}
        </>
    )
}