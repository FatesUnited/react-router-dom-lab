import { Link } from 'react-router';

const MailboxList = ({ mailboxes }) => {
    return (
    <>
        <h1>Mailboxes</h1>
        <ul>
            {mailboxes.map((box, index) => (
                <li className='mail-box' key={index}>
                    <Link to={`/mailboxes/${box._id}`}>
                        <p>{box._id}</p>
                        <p>{box.boxOwner}</p>
                    </Link>
                </li>
            ))}
        </ul>
    </>
    );
};

export default MailboxList;