import './EmailBody.css';

export default function EmailBody({ body, medium }) {

    const bodyMobile = (
        <div className='emailBodyDiv'>
            {body}
        </div>
    )

    const bodyDesktop = (
        <tr>
            <td colSpan='6' className='emailBodyTd'>
                <div className='emailBodyDiv'>
                    {body}
                </div>
            </td>
        </tr>
    )

    const calcReturn = () => {
        switch (medium) {
            case 'mobile':
                return bodyMobile;
            case 'desktop':
                return bodyDesktop;
        }
    }

    return (
        <>
        {calcReturn()}
        </>
    )
}

