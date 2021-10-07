import React , {useEffect} from 'react';
import GameList from '../components/GameList';

const Games = () => {

    useEffect(() => {
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: 'smooth'
        });
    }, []);

    return(
    <div className="works" id="games">
        <div className="container">
            <div className="default-heading">
                <h2>Games</h2>
            </div>
        </div>
        <div className="container">
            <GameList />
        </div>
    </div>
    );
};

export default Games;
