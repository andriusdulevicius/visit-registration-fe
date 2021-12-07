import React from 'react';
import { cancelCostumerVisit, editCostumerStatus, getCostumers } from '../../apis/fetch';
import css from './AdminScreen.module.css';

const GenerateVisit = ({ reference, createdAt, id, active }) => {
  async function setActiveVisit(id) {
    const existingCostumers = await getCostumers();
    if (existingCostumers.find((c) => c.active === true)) return;
    await editCostumerStatus(id, { active: true });
  }

  async function handleEnnOfVisit(id) {
    await editCostumerStatus(id, { active: false });
    await cancelCostumerVisit(id);
  }
  async function handleCancelVisit(id) {
    await cancelCostumerVisit(id);
  }

  return (
    <tr>
      <td className={css.ref}>{reference}</td>
      <td className={css.created}>{createdAt}</td>
      <td className={css.buttons}>
        <button className={css.invite} disabled={active} onClick={() => setActiveVisit(id)}>
          Invite client
        </button>
        <button className={css.end} disabled={!active} onClick={() => handleEnnOfVisit(id)}>
          End of visit
        </button>
        <button className={css.cancel} onClick={() => handleCancelVisit(id)}>
          Cancel visit
        </button>
      </td>
    </tr>
  );
};

export default GenerateVisit;
