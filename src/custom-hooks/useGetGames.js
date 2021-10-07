import { useState } from "react";
import axios from "axios";
import { useLocalStorage } from './useLocalStorage'


const useGetGames = () => {
    const [games, setGames] = useLocalStorage("games", "");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    async function getGames() {
        try {
            const response = await axios.get(
                "https://free-to-play-games-database.p.rapidapi.com/api/games?rapidapi-key=6c11314079msh55ef69e7aff5242p173d6djsn1817dfc9659c"
            );
            setGames(response.data);
            setError(false);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };

    return { games, error, loading, getGames };

};

export default useGetGames;
