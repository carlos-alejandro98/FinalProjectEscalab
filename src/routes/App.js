import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import "../assets/css/bootstrap.css";
import "../assets/css/style.css";

import NotFound from "../components/NotFound";
import Header from "../components/Common/Header";
import Banner from "../components/Common/Banner";
import Footer from "../components/Common/Footer";
import Loader from "../components/Loader";

import GameDetails from '../containers/GamesDetails';
import Favorite from '../containers/Favorite';
//import Games from "../containers/Games";

const Games = lazy(() => import("../containers/Games"));

const handleUp = () => {
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: 'smooth'
    });
};

const App = () => (
  
  <BrowserRouter>
    <Header />
    <Banner />
    <Suspense
        fallback={
          <Loader />
        }
      >
    <Switch>
      
        <Route exact path="/" component={Games} />
        <Route exact path="/game/:game_id" component={GameDetails} />
        <Route exact path="/favorites" component={Favorite} />
        <Route component={NotFound} />
        
    </Switch>
    </Suspense>
    
    <div class="ir-arriba btnTop" onClick={handleUp} title="Volver arriba">
      <span class="fa-stack">
        <i class="fa fa-circle fa-stack-2x"></i>
        <i class="fa fa-arrow-up fa-stack-1x fa-inverse"></i>
      </span>
    </div>
    
    <Footer />
  </BrowserRouter>
);

export default App;
