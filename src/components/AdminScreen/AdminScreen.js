import React, { useState } from 'react';
import css from './AdminScreen.module.css';
import GenerateVisit from './GenerateVisit';

const AdminScreen = ({ setIsLoggedIn }) => {
  const [registeredClients, setRegisteredClients] = useState([
    { generatedRef: 'ascvb123', createdAt: '11pm' },
    { generatedRef: 'ascvb124', createdAt: '10pm' },
    { generatedRef: 'ascvb125', createdAt: '13pm' },
    { generatedRef: 'ascvb126', createdAt: '14pm' },
    { generatedRef: 'ascvb127', createdAt: '15pm' },
    { generatedRef: 'ascvb128', createdAt: '16pm' },
    { generatedRef: 'ascvb129', createdAt: '17pm' },
    { generatedRef: 'ascvb120', createdAt: '18pm' },
    { generatedRef: 'ascvb121', createdAt: '19pm' },
  ]);

  return (
    <div className='container'>
      <h2 className={css.title}>Client visit management system</h2>
      {!registeredClients && <span>There are no clients waiting at the moment, please wait... </span>}
      {registeredClients && (
        <table className={css.table}>
          <thead>
            <tr>
              <td>Client reference:</td>
              <td>Registered at:</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {registeredClients
              .sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1))
              .slice(0, 6)
              .map(({ generatedRef, createdAt }) => (
                <GenerateVisit
                  key={generatedRef}
                  reference={generatedRef}
                  createdAt={createdAt}
                  setRegisteredClients={setRegisteredClients}
                />
              ))}
          </tbody>
        </table>
      )}

      <button className={css.logout} onClick={() => setIsLoggedIn(false)}>
        Logout
      </button>
    </div>
  );
};

export default AdminScreen;
