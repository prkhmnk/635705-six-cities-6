import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainPage from "../Pages/MainPage";
import FavoritesPage from "../Pages/FavoritesPage";
import LoginPage from "../Pages/LoginPage";
import OfferPage from "../Pages/OfferPage";
import NotFoundPage from "../Pages/NotFoundPage";
import PropTypes from "prop-types";

const App = ({adCount, cities, offers, reviews, pageTypes}) => {
  const {FAVORITES, MAIN, OFFER} = pageTypes;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage adCount={adCount} cities={cities} offers={offers} pageType={MAIN} />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/favorites" exact>
          <FavoritesPage offers={offers} pageType={FAVORITES} />
        </Route>
        <Route path="/offer/:id?" exact>
          <OfferPage offers={offers} reviews={reviews} pageType={OFFER} />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  adCount: PropTypes.number.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string),
  offers: PropTypes.arrayOf(PropTypes.object),
  reviews: PropTypes.arrayOf(PropTypes.object),
  pageTypes: PropTypes.objectOf(PropTypes.string)
};

export default App;
