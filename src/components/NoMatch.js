import React, { useState, useEffect } from 'react';
import arms from './Arms';
import './NoMatch.css';

export default function NoMatch(props) {
  const [armsImg, setArmsImg] = useState('');
  const [UserArmsScore, setUserArmsScore] = useState('');
  const [launch, setLaunch] = useState('Start');
  const [armsImgAi, setArmsImgAI] = useState('');
  const [stop, setStop] = useState('');
  const [BtnStart, setBtnStart] = useState('invisible');
  const [AiMessage, setAiMessage] = useState(
    'Choisissez votre arme pour connaitre celle de votre adversaire'
  );
  const [UserMessage, setUserMessage] = useState('Choisissez votre arme');
  const [imgVisible, setImgVisible] = useState('invisible');
  const [imgVisibleAi, setImgVisibleAi] = useState('invisible');
  const [messageCombat, setMessageCombat] = useState('invisible');
  const [messageNewChance, setMessageNewChance] = useState('invisible');
  const [red, setRed] = useState('white');
  const [SuperFight, setSuperFight] = useState('Combat en cours ...');
  const [prevImageUser, setPrevImageUser] = useState('');
  const [prevImageIa, setPrevImageIa] = useState('');
  const [ScoreScUser, setScoreScUser] = useState('');
  const [ScoreScAi, setScoreScAi] = useState('');
  const [popupVisible, setPopupVisible] = useState('invisible');

  //Choose play weapon

  const handleChange = (e) => {
    const mychoice = e.target.value;
    setUserArmsScore(e.target[e.target.selectedIndex].id);
    setArmsImg(mychoice);
    setBtnStart('');
    setUserMessage('Voici votre arme');
    setImgVisible('');
  };

  // const catchValue = (imageUser, imageIa) => {
  //   setPrevImageUser(imageUser);
  //   setPrevImageIa(imageIa);
  // };

  useEffect(() => {
    try {
      const { imageUser, imageIa } = props.location.data;
      setPrevImageUser(imageUser);
      setPrevImageIa(imageIa);
    } catch (error) {
      alert(error);
    }
  }, []);

  // Start Battle and put weapon IA
  const startGame = () => {
    const random = Math.floor(Math.random() * arms.length);
    setImgVisibleAi('');
    setArmsImgAI(arms[random].img);
    const scoreArmAi = arms[random].Puissance;
    setStop('invisible');
    setBtnStart('invisible');
    setAiMessage(`Voici l'arme de votre adversaire " ${arms[random].Arme} "`);
    setMessageCombat('');
    setMessageNewChance('');
    setTimeout(function () {
      if (scoreArmAi < UserArmsScore) {
        setSuperFight(' La win Jacquie && Michel ');
        setRed('green');
      } else if (scoreArmAi === UserArmsScore) {
        setSuperFight(' Egalite ');
      } else {
        setSuperFight("T'as perdu ");
        setRed('red');
      }
      setScoreScUser(`Your score : ${UserArmsScore}`);
      setScoreScAi(`Computer score : ${scoreArmAi}`);
    }, 3000);
  };

  const couillesenski = () => {
    setPopupVisible('');
  };

  return (
    <div className="BigContainer-nomatch">
      <div className={`popup ${popupVisible}`}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/hP08aSMWqD4"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="noMatch_container">
        <div className="noMatch_candidat_container">
          <div className="noMAtch_user_weapon">
            <p> {UserMessage} </p>
            <select className={stop} onChange={handleChange}>
              {arms.map((arm) => (
                <option
                  value={arm.img}
                  className="choiceweapon"
                  id={arm.Puissance}
                >
                  {arm.Arme}
                </option>
              ))}
            </select>
            <div className="noMatch_user_select_arm">
              <img
                className={`img-weapon ${imgVisible}`}
                id="userweapon"
                src={armsImg}
                alt={armsImg}
              ></img>
            </div>
            <p>{ScoreScUser}</p>
            <img
              className="noMatch_img_candidat"
              src={prevImageUser}
              alt="name"
            />
          </div>
          <button className={`btnStartFight ${BtnStart}`} onClick={startGame}>
            {launch}
          </button>
          <span
            className={`spanCombatEnCour ${messageCombat}`}
            style={{ color: `${red}` }}
          >
            {SuperFight}
          </span>
          <div className="noMAtch_ai_weapon">
            <p>{AiMessage}</p>
            <img
              className={`img-weapon ${imgVisibleAi}`}
              alt="img"
              src={armsImgAi}
            ></img>
            <p>{ScoreScAi}</p>
            <img
              className="noMatch_img_candidat"
              src={prevImageIa}
              alt="name"
            />
          </div>
        </div>
        <button
          onClick={couillesenski}
          className={`BtnNewChance ${messageNewChance}`}
        >
          Peut être une solution pour pécho la prochaine fois
        </button>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/hP08aSMWqD4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
      </div>
    </div>
  );
}
