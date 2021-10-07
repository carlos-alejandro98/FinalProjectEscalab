import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Details = ({ game, images, requirements }) => {
  const {
    title,
    description,
    thumbnail,
    platform,
    genre,
    game_url,
    release_date,
    publisher,
  } = game;
  const { os, processor, memory, graphics, storage } = requirements;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="works" id="games">
        <div className="container">
          <div className="default-heading">
            <div className="row">
              <div className="col-md-6 col-12 boxDescription">
                <img className="imgDescription" src={thumbnail} alt={title} />
                <hr />
                <div className="specs">
                  <strong>Platform: </strong>
                  {platform}
                  <br />
                  <strong>Genre: </strong>
                  {genre}
                  <br />
                  <strong>URl Game: </strong>
                  <a href={game_url}>{game_url}</a>
                  <br />
                  <strong>Publisher: </strong>
                  {publisher}
                  <br />
                  <strong>Release Date: </strong>
                  {release_date}
                </div>
              </div>
              <div className="col-md-6 col-12">
                <h1>{title}</h1>
                <hr />
                <strong>Description: </strong>
                <p>{description}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-12">
                <h2>Minimum Requirements</h2>

                {requirements.length !== 0 ? (
                  
                  <>
                    <div className="d-flex">
                      <strong className="align-self-center">OS:</strong>
                      <p>{os ? os : "No Data"}</p>
                    </div>
                    <div className="d-flex">
                      <strong className="align-self-center">Processor:</strong>
                      <p>{processor ? processor : "No Data"}</p>
                    </div>
                    <div className="d-flex">
                      <strong className="align-self-center">Memory:</strong>
                      <p>{memory ? memory : "No Data"}</p>
                    </div>
                    <div className="d-flex">
                      <strong className="align-self-center">Graphics:</strong>
                      <p>{graphics ? graphics : "No Data"}</p>
                    </div>
                    <div className="d-flex">
                      <strong className="align-self-center">Storage:</strong>
                      <p>{storage ? storage : "No Data"}</p>
                    </div>
                  </>
                ) : (
                  <h4>No Data</h4>
                )}
              </div>
              <div className="col-md-6 col-12 p-0 boxDescription">
                {images.map((i) => {
                  return (
                    <img
                      key={i.id}
                      className="imgGame"
                      src={i.image}
                      alt={i.id}
                    />
                  );
                })}
                ;
              </div>
            </div>
          </div>
          <div className="text-center volver">
            <Link to="/">volver</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
