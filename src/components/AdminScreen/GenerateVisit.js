import React, { useState } from 'react';
import css from './AdminScreen.module.css';

const GenerateVisit = ({ reference, createdAt, setRegisteredClients }) => {
  const [activeVisit, setActiveVisit] = useState(false);

  function handleEnnOfVisit(clientRef) {
    setActiveVisit((prevState) => !prevState);
    setRegisteredClients((prevState) => {
      return prevState.filter((c) => c.generatedRef !== clientRef);
    });
  }
  function handleCancelVisit(clientRef) {
    setRegisteredClients((prevState) => {
      return prevState.filter((c) => c.generatedRef !== clientRef);
    });
  }
  return (
    <tr>
      <td className={css.ref}>{reference}</td>
      <td className={css.created}>{createdAt}</td>
      <td className={css.buttons}>
        <button className={css.invite} disabled={activeVisit} onClick={() => setActiveVisit((prevState) => !prevState)}>
          Invite client
        </button>
        <button className={css.end} disabled={!activeVisit} onClick={() => handleEnnOfVisit(reference)}>
          End of visit
        </button>
        <button className={css.cancel} onClick={() => handleCancelVisit(reference)}>
          Cancel visit
        </button>
      </td>
    </tr>
  );
};

export default GenerateVisit;
