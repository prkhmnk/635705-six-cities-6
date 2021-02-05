import React from "react";
import MainPage from "../main-page/main-page";
import PropTypes from 'prop-types';

const App = (props) => {
  const {adCount, cities} = props;

  return (
    <MainPage adCount={adCount} cities={cities} />
  );
};

App.propTypes = {
  adCount: PropTypes.number.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string)
};

export default App;
