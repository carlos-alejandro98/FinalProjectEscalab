import React from 'react';
import { connect } from "react-redux";
import propTypes from "prop-types";
import Game from "./Game";
import NoData from './NoData';

const FavoriteList = (props) => {
  const { favoriteGames } = props;

  return (
    <div className="works" id="games">
      <div className="container">
        <div className="characterList">
          {!favoriteGames.length ? (
            <NoData />
          ) : (
            favoriteGames.map((game) => (
              <Game
                key={game.data.id}
                data={game.data}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

// propsTypes
FavoriteList.propTypes = {
  game: propTypes.object,
};


//native react-redux functions vs hooks: useSelect && useDispatch
const mapStateToProps = (state) => {
  return {
    favoriteGames: state.favoriteGames,
  };
};

export default connect(mapStateToProps, null)(FavoriteList);
