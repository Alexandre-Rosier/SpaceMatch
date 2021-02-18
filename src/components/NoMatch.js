import React, { useState, useEffect } from 'react';
import arms from './Arms';
import './NoMatch.css';

export default function NoMatch() {
  const [armsImg, setArmsImg] = useState('');
  const [UserArmsScore, setUserArmsScore] =useState('')
  const [launch, setLaunch] = useState('Start');
  const [armsImgAi, setArmsImgAI] = useState('');
  const [stop, setStop] = useState('');
  const [BtnStart, setBtnStart] = useState('invisible');
  const [AiMessage, setAiMessage] = useState('Choisissez votre arme pour connaitre celle de votre adversaire')
  const [UserMessage, setUserMessage] = useState('Choisissez votre arme')
  const [imgVisible, setImgVisible] = useState('invisible')
  const [imgVisibleAi, setImgVisibleAi] = useState('invisible')
  const [messageCombat, setMessageCombat] = useState('invisible')
  const [messageNewChance, setMessageNewChance] = useState("invisible")
  const [red, setRed] = useState('red')
  const [SuperFight, setSuperFight] = useState('Combat en cour ...')

  //Choose play weapon

  const handleChange = (e) => {
    const mychoice = e.target.value
    setUserArmsScore(e.target[e.target.selectedIndex].id)
    setArmsImg(mychoice)
    setBtnStart('')
    setUserMessage('Voici votre arme')
    setImgVisible('')
  };



  // Start Battle and put weapon IA
  const startGame = () => {
    const random =Math.floor(Math.random() * arms.length)
    setImgVisibleAi('')
    setArmsImgAI(arms[random].img);
    const scoreArmAi = arms[random].Puissance
    setStop('invisible');
    setBtnStart('invisible');
    setAiMessage(`Voici l'arme de votre adversaire " ${arms[random].Arme} "`)
    setMessageCombat('')
    setMessageNewChance('')
    setTimeout(
      function(){ 
        if(scoreArmAi < UserArmsScore){
          setSuperFight(" La win Ingrid et Caro && Jacquie && Michel ")
        }else if(scoreArmAi === UserArmsScore){
          setSuperFight(" Egalite ")
        }else{
          setSuperFight("T'as perdu ")
        }
    }, 3000);
  };
    

  return (
    <div className="noMatch_container">
      <div className="noMatch_candidat_container">
        <div className="noMAtch_user_weapon">
          <p> {UserMessage} </p>
          <select className={stop} onChange={handleChange}>
            {arms.map((arm) => (
              <option value={arm.img} className="choiceweapon" id={arm.Puissance} >{arm.Arme}</option>
            ))}
          </select>
          <div className="noMatch_user_select_arm">
            <img className={`img-weapon ${imgVisible}`} id="userweapon" src={armsImg} alt={armsImg}></img>
          </div>
          <img
          className="noMatch_img_candidat"
          src="https://images.unsplash.com/photo-1559717642-f78162471caf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
          alt="name"
        />
        </div>
       
        {/*bloc candidat 1*/}
        <button className={`btnStartFight ${BtnStart}`} onClick={startGame}>
          {launch}
        </button>
        <span className={`spanCombatEnCour ${messageCombat}`} style={{color:`${red}`}}>{SuperFight}</span>
        <div className="noMAtch_ai_weapon">
            <p>{AiMessage}</p>
            <img className={`img-weapon ${imgVisibleAi}`} alt='img' src={armsImgAi}></img>
            <img
            className="noMatch_img_candidat"
            src="https://images.unsplash.com/photo-1546314029-ca8247095938?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
            alt="name"
            />
        </div>
        
        {/*bloc candidat 2*/}
      </div>
      <button className={`BtnNewChance ${messageNewChance}`}>Peut être une dernière chance de passer une bonne soirée</button>
    </div>
  );
}
