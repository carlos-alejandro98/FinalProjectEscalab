import { useState, useEffect } from 'react';

const useGetDetailsGame = () => {
    const game_id = window.location.pathname.split("/")[2];
    const [doneFetchGameDetail, setDoneFetchGameDetail] = useState(false);
    const [game, setGame] = useState([]);
    const [images, setImages] = useState([]);
    const [requirements, setRequirements] = useState([]);

    useEffect(() => {
        getDetailsGame(game_id);
      }, [game_id]);
    
      const getDetailsGame = (game_id) => {
        fetch('https://free-to-play-games-database.p.rapidapi.com/api/game?rapidapi-key=6c11314079msh55ef69e7aff5242p173d6djsn1817dfc9659c&id='+game_id)
          .then((res) => res.json())
          .then((data) => {
            setDoneFetchGameDetail(true);
            !Array.isArray(data) && setGame(data);
            !Array.isArray(data) && setImages(data.screenshots);
            data.minimum_system_requirements !== undefined ? 
            setRequirements(data.minimum_system_requirements) : setRequirements([]);
          })
          .catch((err) => console.log(err));
      };

      return { game, images, requirements, doneFetchGameDetail };
}

export default useGetDetailsGame;
