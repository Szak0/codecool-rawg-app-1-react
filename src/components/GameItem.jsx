import React, { useRef, useState } from "react";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import Platforms from "./Platforms";

const GameItem = ({ game }) => {
  const [videInfo, seVideoInfo] = useState({
    vidRef: useRef(null),
  });

  const handlePlayVideo = () => {
    videInfo.vidRef.current.play();
  };

  return (
    <div key={game.name + game.id} className="game-card">
      <div className="video-container">
        {game.clip ? (
          <div>
            <button onClick={handlePlayVideo} className={"play-button"}>
              PLAY
            </button>
            <video
              src={game.clip.clip}
              poster={game.background_image}
              onClick={(e) => e.target.pause()}
              ref={videInfo.vidRef}
              muted
              type="video/mp4"
            />
          </div>
        ) : (
          <img src={game.background_image} alt={game.name} />
        )}
      </div>

      <Link to={"game/" + game.id} className={"normalize-link"}>
        <div className={"game-card-info"}>
          <div>
            <h3>{game.name}</h3>
          </div>
          <span>{game.released}</span>
          <Platforms platforms={game.platforms} />
          <div className={"rating-container"}>
            <span>{game.author}</span>
            <div className={"rating-number"}>
              <span>{game.rating}</span>
            </div>
            <div className={"rating-info"}>
              <StarRatings
                rating={game.rating}
                starRatedColor="white"
                starEmptyColor="black"
                numberOfStars={5}
                name="game-rating"
                starDimension="20px"
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GameItem;
