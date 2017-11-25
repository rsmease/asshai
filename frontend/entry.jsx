//core utils
import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store';
import Root from './components/root';

//testing modules
import { fetchTeam, fetchAllTeams } from './util/team_util';

document.addEventListener('DOMContentLoaded', () => {
  //bootstrap user
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = createStore(preloadedState);
    delete window.currentUser;
  } else {
    store = createStore();
  }

  //testing
  window.store = store;
  window.fetchTeam = fetchTeam;
  window.fetchAllTeams = fetchAllTeams;

  //execution
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);

});
