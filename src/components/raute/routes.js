import Layout from '../layout/Layout';
import MainDetails from '../body/card-details/MainDetails';


const routes = [
  {
    path: '/',
    exact: true,
    component: <Layout></Layout>
  },
  {
    path: '/sip',
    component: <MainDetails clicked='SIP' />
  },
  {
    path: '/cagr',
    component: <MainDetails clicked='CAGR' />
  },
  {
    path: '/cagr-percentage',
    component: <MainDetails clicked='CAGRP' />
  },
  {
    path: '/lumpsum',
    component: <MainDetails clicked='LUMPSUM' />
  },
  {
    path: '/mutual-fund',
    component: <MainDetails clicked='MF' />
  },
  {
    path: '/ppf',
    component: <MainDetails clicked='PPF' />
  },
  {
    path: '/rule-of-72',
    component: <MainDetails clicked='RULE72' />
  }
];

export default routes;
