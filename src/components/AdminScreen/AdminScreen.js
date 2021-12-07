import React, { useState, useEffect } from 'react';
import css from './AdminScreen.module.css';
import GenerateVisit from './GenerateVisit';
import { getCostumers } from '../../apis/fetch';

const AdminScreen = ({ setIsLoggedIn }) => {
  const [registeredClients, setRegisteredClients] = useState([]);

  useEffect(() => {
    (async () => {
      const presentCostumers = await getCostumers();
      setRegisteredClients(presentCostumers);
    })();
  }, []);

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
              .map(({ reference, createdAt, _id, active }) => (
                <GenerateVisit
                  key={_id}
                  id={_id}
                  active={active}
                  reference={reference}
                  createdAt={createdAt.slice(11, 16)}
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
