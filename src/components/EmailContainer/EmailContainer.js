import './EmailContainer.css';
import NoEmails from "../NoEmails/NoEmails";
import EmailSnippet from '../EmailSnippet/EmailSnippet';

export default function EmailContainer({ numberOfEmails, emails }) {
    const table = (
        <table id='emailTable'>
            <thead id='tableHeader'>
                <tr>
                    <th className='senderCol' width='14%'>From</th>
                    <th className='recipsCol' width='20%'>To</th>
                    <th className='extraRecips' width='4%'></th>
                    <th className='subjCol' width='47%'>Subject</th>
                    <th className='attCol' width='4%'></th>
                    <th className='dateCol' width='11%' id='dateHeader'>Date</th>
                </tr>
            </thead>
            <tbody>
                {emails.map(email => <EmailSnippet key={email.id} email={email}/>)}
            </tbody>
        </table>
    )

    return (
        <div id='emailContainer'>
            {numberOfEmails === 0 && <NoEmails/>}
            {numberOfEmails !== 0 && table}
        </div>
    )
}