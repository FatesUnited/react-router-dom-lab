import { useParams } from 'react-router';

const MailboxDetails = (props) => {
    const { mailboxId } = useParams();
    const selectedBox = props.mailboxes.find(
        (mailbox) => mailbox._id === Number(mailboxId)
    );

    if (!selectedBox) return <h1>Mailbox not found</h1>

    return (
    <>
        <h1>Box {selectedBox._id}</h1>
        <h2>Owner: {selectedBox.boxOwner}</h2>
        <h3>Size: {selectedBox.boxSize}</h3>
    </>
    );
};

export default MailboxDetails;