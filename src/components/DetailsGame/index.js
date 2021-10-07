import React, { useContext } from "react";
import { DetailsGamesContext } from "../../context/DetailsGamesContext";
import Details from "./Details";
import ProgressBar from "../Common/ProgressBar";

const DetailsGame = () => {
  const { doneFetchGameDetail, game, images, requirements } = useContext(DetailsGamesContext);
  return (
    <>
      {doneFetchGameDetail ? (
        !Array.isArray(game) ? (
          <Details game={game} images={images} requirements={requirements}/>
        ) : (
          <p>No Results</p>
        )
      ) : (
        <ProgressBar />
      )}
    </>
  );
};

export default DetailsGame;
