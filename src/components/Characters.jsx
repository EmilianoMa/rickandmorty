import React from "react";
import useFetch from "../hook/useFetch";
import { useEffect } from "react";

const Characters = ({ url }) => {
  const [character, characterApi] = useFetch(url);

  useEffect(() => {
    characterApi();
  }, []);

  console.log(character);
  return (
    <div className="content__character">
      <div className="character__img">
        <img src={character?.image} alt="" />
        <h5 className="character__status">
          {character?.status === "Alive"
            ? `🟢${character?.status}`
            : `🔴${character?.status}`}
        </h5>
      </div>
      <div className="character__info">
        <h3>{character?.name}</h3>
        <hr />
        <ul className="character__info-list">
          <li>
            <span>Specie</span>
            <span> {character?.species}</span>
          </li>
          <li>
            <span>Origin</span>
            <span>{character?.origin.name}</span>
          </li>
          <li>
            <span>Eppisodes where appear</span>
            <span>{character?.episode.length}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Characters;
