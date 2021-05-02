import './EmailContainer.css';
import NoEmails from "../NoEmails/NoEmails";

export default function EmailContainer({ numberOfEmails }) {
    return (
        <div id='emailContainer'>
            {numberOfEmails === 0 && <NoEmails/>}
        </div>
    )
}