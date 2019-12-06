import React from 'react';

import ItemList from '../../components/itemList/ItemList.component';

import './dashboard.styles.scss';

const DashboardPage = () => (
  <div className='dashboard'>
    <ItemList />
  </div>
);

export default DashboardPage;
