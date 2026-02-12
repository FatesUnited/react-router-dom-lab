import { useState } from 'react';
import { useNavigate } from 'react-router';

const initialState = {
    boxSize: 'Small',
    boxOwner: '',
}

const MailboxForm = ({ addBox }) => {
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        addBox(formData);
        setFormData(initialState);
        navigate('/mailboxes');
    };

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    };

    return (
        <main>
            <h1>Add New Mailbox</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='boxOwner'>Enter a Boxholder:</label>
                <input
                    type='text'
                    id='boxOwner'
                    name='boxOwner'
                    value={formData.boxOwner}
                    onChange={handleChange}
                />
                <label htmlFor='boxSize'>Select a Box Size:</label>
                <select
                    id='boxSize'
                    name='boxSize'
                    value={formData.boxSize}
                    onChange={handleChange}
                    defaultValue='Small'
                >
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                </select>
                <button type='submit'>Submit</button>
            </form>
        </main >
    );
};

export default MailboxForm;