import React from 'react';
import { Link } from 'react-router-dom';
import { setSection } from "../../actions";
import { useDispatch } from "react-redux";
import '../../assets/css/notFound.css';

const NotFound = () => {

    const dispatch = useDispatch();

    const handleSetSection = (section) => {
        dispatch(setSection(section));
    };

    return (
        <div id='oopss'>
            <div id='error-text'>
                <span>404</span>
                <p>PAGE NOT FOUND</p>
                <p className='hmpg' onClick={() => handleSetSection("Characters")}>
                    <Link to="/" className="back">Back To Home</Link>
                </p>
            </div>
        </div>
    )
}

export default NotFound;
