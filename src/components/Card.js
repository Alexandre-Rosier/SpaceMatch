import React from 'react'
import './Card.css'

const Card = ({ name, image }) => (
        <figure >
          <img className="PhotoCard" src={image} alt={name} />
          <figcaption>
           <div className="NamePers">{name}</div>
          </figcaption>
        </figure>
      );
      export default Card;
