import Layout from './components/layout/Layout'
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';
import routes from './components/raute/routes';
import { useEffect } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
function App() {
  return (
    // <div>
    //   <Layout />
    // </div>/
    <Router>
      <Header />
      <Routes>
            {routes.map((route, index) => (
                <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={route.component}
                />
            ))}
      </Routes>
    <Footer />
    </Router>
  );
}

export default App;
