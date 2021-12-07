import { createAction } from '@reduxjs/toolkit';

export const setNewCostumer = createAction('user/SET_NEW_COSTUMER');

export const setAllCostumers = createAction('user/SET_ALL_COSTUMERS');

export const setActiveVisit = createAction('admin/SET_ACTIVE_VISIT');
