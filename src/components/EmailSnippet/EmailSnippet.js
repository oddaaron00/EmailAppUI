import './EmailSnippet.css';
import clipIcon from '../../assets/images/icon_clip.svg';
import clipIconHover from '../../assets/images/icon_clip_hover.svg';
import { useState } from 'react';

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

    return (
        <tr className='emailSnippet' style={hover ? {color: '#0033dd'} : {}} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <td>{email.sender}</td>
            <td>{email.recips.join(', ')}</td>
            <td>{}</td>
            <td>{email.subj}</td>
            <td>{typeof email.att != "undefined" && <img width='19px' src={hover ? clipIconHover : clipIcon}/>}</td>
            <td className='dateRow'>{email.date.getFullYear()}/{email.date.getMonth() + 1}/{email.date.getDate()}</td>
        </tr>
    )
}