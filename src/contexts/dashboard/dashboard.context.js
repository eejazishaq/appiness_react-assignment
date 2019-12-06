import { createContext } from 'react';

import DASHBOARD_DATA from '../../json_data/dashboardData';

const DashboardContext = createContext(DASHBOARD_DATA);

export default DashboardContext;
