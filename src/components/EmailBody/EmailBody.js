import './EmailBody.css';

export default function EmailBody({ body }) {
    return (
        <tr >
            <td colSpan='6' style={{whiteSpace: 'normal', padding: '5px 19px'}}>
                <div style={{overflowY: 'scroll', maxHeight:'200px'}}>
                    {body}
                </div>
            </td>
        </tr>
    )
}