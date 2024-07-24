import Layout from '../layout/Layout';
import MainDetails from '../body/card-details/MainDetails';
import SamplePage from '../body/stock-market/SamplePage';


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
    path: '/ci-calculator',
    component: <MainDetails clicked='MF' />
  },
  {
    path: '/absolute',
    component: <MainDetails clicked='ABSCAL' />
  },
  {
    path: '/rule-of-72',
    component: <MainDetails clicked='RULE72' />
  },
  {
    path: '/stock-market',
    component: <SamplePage clicked='SM' />
  },
  {
    path: '/mutual-fund',
    component: <SamplePage clicked='SM' />
  }
];

export default routes;
