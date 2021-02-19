import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ButtonMatch from './BoutonMatch';
import Card from './Card';
import './Jeucopy.css';
import './BoutonMatch.css';
import PresPage2 from './PresentationPage2';

export default function Jeucopy() {
  const [StarsData, setStarsData] = useState(['']);
  const [ImgRandom, setImgRandom] = useState('');
  const [StarName, setStarName] = useState('');
  const [ImgRandomSd, setImgRandomSd] = useState('');
  const [StarNameSd, setStarNameSd] = useState('');
  const [Score, setScore] = useState('');
  const [invisible, setInvisible] = useState('');
  const[invisibleMatch, setInvisibleMatch] = useState('invisible')
  const[invisibleNoMatch, setInvisibleNoMatch] = useState('invisible')
  

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(
        'https://miadil.github.io/starwars-api/api/all.json'
      );
      const reqFuturama = await axios.get(
        'http://futuramaapi.herokuapp.com/api/v2/characters'
      );
      console.log(reqFuturama.data);
      const random = Math.floor(Math.random() * 87);
      const random2 = Math.floor(Math.random() * 20);
      setStarName(req.data[random].name);
      setImgRandom(req.data[random].image);
      setStarNameSd(reqFuturama.data[random2].Name);
      setImgRandomSd(reqFuturama.data[random2].PicUrl);
    }
    fetchData();
  }, []);

  const ButtonMatch = (e) => {
    e.preventDefault();
    console.log('ok');
    const randomScore = Math.floor(Math.random() * 100);
    if (randomScore > 50) {
      setScore('Ca Match');
      setInvisible('invisible')
      setInvisibleMatch('')
    } else {
      setScore('No Match');
      setInvisible('invisible');
      setInvisibleNoMatch('')
    }
  };

  return (
    <div className="Container-Jeu">
      <PresPage2 />
      <div className="Jeu">
        <h1 className="TitreJeu">La roue de l'amour � </h1>

        <div id="tableauJeu">
          <div className="Card">
            <Card image={ImgRandom} />
          </div>
          <p id="icon18">{Score}</p>
          <div className="Card">
            <Card image={ImgRandomSd} />
          </div>
        </div>

        <Link
          className={`buttonNoMatch ${invisibleMatch} `}
          to={{
            pathname: '/match',
            data: {
              imageUser: ImgRandom,
              imageIa: ImgRandomSd,
            },
          }}
        >
           Etes vous faits l'un pour l'autre ?<span id="hart">🌈💖🔥</span>
        </Link>
        <button type="button" id="buttonMatch" className={invisible} onClick={ButtonMatch}>
          Etes vous faits l'un pour l'autre ?<span id="hart">🌈💖🔥</span>
        </button>

        <Link
          className={`buttonNoMatch ${invisibleNoMatch}`}
          to={{
            pathname: '/nomatch',
            data: {
              imageUser: ImgRandom,
              imageIa: ImgRandomSd,
            },
          }}
        >
          It's a FIGHT ! <span id="hart">🔪💣🍆</span>
        </Link>
      </div>
    </div>
  );
}
