import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Summary from './Summary';
import Holdings from './Holdings';
import Positions from './Positions';
import Funds from './Funds';
import App from './App';
import { GeneralContextProvider } from './GeneralContext';
import WatchList from './WatchList';
import Orders from './Orders';



const Dasahboard = () => {
    return ( 
        <div className="dashboard-container">
      <GeneralContextProvider> 
        <WatchList />
      </GeneralContextProvider> 
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<App />} />
        </Routes>
      </div>
    </div>
     );
}
 
export default Dasahboard;