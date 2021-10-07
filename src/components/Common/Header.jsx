import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSection } from "../../actions";
import logo from '../../assets/img/logo.png';

const Header = () => {
  const dispatch = useDispatch();

  const handleSetSection = (section) => {
    dispatch(setSection(section));
  };

  return (
    <header>
      <nav className="navbar navbar-default" role="navigation">
        <div className="container">
          <div className="row">
            <div className="navbar-header col-12 w-100" onClick={() => handleSetSection("Characters")}>
              <Link className="navbar-brand" to="/">
                <img className="img-responsive imgHeader" src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="ir-favorito" onClick={() => handleSetSection("Favorites")}>
                <Link to="/favorites"><h3>My Favorites <i class="fad fa-heart"></i></h3></Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
