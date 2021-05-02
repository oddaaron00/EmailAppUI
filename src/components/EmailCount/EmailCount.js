import './EmailCount.css';

export default function EmailCount({ numberOfEmails }) {
    return (
        <div id='emailCount'>
            <p>Results: <span id='countNumber'>{numberOfEmails}</span> mail(s)</p>
        </div>
    )
}