import React from 'react';
import { Link } from 'react-router-dom';
import { setSection } from "../actions";
import { useDispatch } from "react-redux";
import NotFound from '../assets/img/noData.png';
import Return from '../assets/img/return.png';

const NoData = () => {
    const dispatch = useDispatch();

    const handleSetSection = (section) => {
        dispatch(setSection(section));
    };

    return (
        <div className="text-center">
            <img className="imgNotFound" src={NotFound} alt="Not Found"/>
            <br />
            <br />
            <br />
            <p className="parrafo-not-found">No information found, please select your favorite games</p>
            <br />
            <br />
            <div onClick={() => handleSetSection("Characters")}>
                <Link to="/" >
                    <img className="imgNotFound cursor-pointer" src={Return} alt="Return"/>
                </Link>
            </div>
        </div>
    )
}

export default NoData;
