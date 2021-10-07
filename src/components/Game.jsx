import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { setFavorite, deleteFavorite } from "../actions";
import { Link } from "react-router-dom";

const Game = (props) => {
  const [favorite, setFavorite] = useState(false);

  const { data, favoriteGames } = props;
  const { id, title, thumbnail, genre } = data;


  useEffect(() => {}, []);

  const handleSetFavorite = () => {
    props.setFavorite({ data });
    setFavorite(true);
  };

  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
    setFavorite(false);
  };

  const isFavorite = () => {
    const result = favoriteGames.filter(
      (favoriteGame) => favoriteGame.data.id === id
    );
    if (result.length) {
      setFavorite(true);
    }
  };

  
  useEffect(() => {
    isFavorite();
    // eslint-disable-next-line
  }, []);  



  return (
    <div className="col-md-4 box-games">
      <div className="work-item">
        <img className="img-responsive" src={thumbnail} alt="" />
        <h3>
          <Link to={`/game/${id}`}>{title}</Link>
        </h3>
        <span className="org">{genre}</span>
        {favorite ? (
          <i className="fas fa-heart fa-3x favorite"  onClick={() => handleDeleteFavorite(id)}></i>
        ) : (
          <i className="far fa-heart fa-3x no-favorite" onClick={handleSetFavorite}></i>
        )
        }

      </div>
    </div>
  );
};

// propsTypes
Game.propTypes = {
  data: propTypes.object,
  id: propTypes.number,
  thumbnail: propTypes.string,
};

// native redux functions
const mapStateToProps = (state) => {
  return {
    favoriteGames: state.favoriteGames,
  };
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
