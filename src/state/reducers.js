import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { setNewCostumer, setAllCostumers, setActiveVisit } from './actions';
// import { AppState } from './store';

const INITIAL_STATE = {
  allCostumers: [],
  activeVisit: {},
};

const allCostumersReducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(setAllCostumers, (state, { payload }) => {
    state.allCostumers = payload;
  });
});

const activeVisitReducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(setActiveVisit, (state, { payload }) => {
    state.activeVisit = payload;
  });
});

const reducers = combineReducers({
  user: allCostumersReducer,
  admin: activeVisitReducer,
});

// export const activeVisitSelector = (state: AppState) => state.admin.activeVisit;
// export const allCostumersSelector = (state: AppState) => state.user.allCostumers;

export default reducers;
