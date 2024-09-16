import React from "react";

const LocationInfo = ({ location }) => {
  return (
    <section className="content__location">
      <h2 className="location__name">{location?.name}</h2>
      <ul className="location__info">
        <li>
          <span>Type:</span>
          <span>{location?.type}</span>
        </li>
        <li>
          <span>Dimension:</span> <span>{location?.dimension}</span>
        </li>
        <li>
          <span>Population:</span>
          <span>{location?.residents.length}</span>
        </li>
      </ul>
    </section>
  );
};

export default LocationInfo;
