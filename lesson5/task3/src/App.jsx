import React from 'react';

import UsersList from './users/UsersList';

const App = () => (
  <div>
    <div className="filter">
      <span className="filter__count">5</span>
      <input type="text" className="filter__input" />
    </div>
    <UsersList />
  </div>
);

export default App;
