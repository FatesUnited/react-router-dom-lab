import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router';
import MailboxDetails from './components/MailboxDetails/MailboxDetails.jsx';
import MailboxForm from './components/MailboxForm/MailboxForm.jsx';
import MailboxList from './components/MailboxList/MailboxList.jsx';
import NavBar from './components/NavBar/NavBar.jsx';

function App() {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (formData) => {
    setMailboxes([...mailboxes, { ...formData, _id: mailboxes.length + 1 }]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<main><h1>Post Office</h1></main>}></Route>
        <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes} />}></Route>
        <Route path='/new-mailbox' element={<MailboxForm addBox={addBox} />}></Route>
        <Route path='mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes} />}></Route>
      </Routes>
    </>
  );
};

export default App;