import React, { useEffect } from 'react';
import useGetGames from "../custom-hooks/useGetGames";
import Game from './Game';
import Loader from './Loader';

const GameList = () => {
    const { games, getGames, loading, error } = useGetGames();

    useEffect(() => {
        getGames();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="row">
            {loading ? (
                <Loader />
            ) : error ? (
                <p>Error</p>
            ) : (
                games.map((game) => (
                    <Game
                        key={game.id}
                        data={game}
                    />
                ))
            )}
        </div>
    );
};

export default GameList;
