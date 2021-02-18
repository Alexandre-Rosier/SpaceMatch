// import React, { useState, useEffect } from 'react';
// import arms from './Arms';
// import './NoMatch.css';

// export default function NoMatch() {
//   const [armsImg, setArmsImg] = useState('');
//   const [launch, setLaunch] = useState('Start');
//   const [armsImgAi, setArmsImgAI] = useState('');
//   const [stop, setStop] = useState('');
//   const [BtnStart, setBtnStart] = useState('invisible');

//   //Choose play weapon
//   const handleChange = (e) => {
//     setArmsImg(e.target.value);
//     setBtnStart('');
//   };

//   Math.floor(Math.random() * 10 + 1);
//   // Start Battle and put weapon IA
//   const startGame = () => {
//     setLaunch('No love me !!!!!!');
//     setArmsImgAI(arms[Math.floor(Math.random() * arms.length)].img);
//     setStop('invisible');
//   };

//   return (
//     <div className="noMatch_container">
//       <div className="noMatch_armes">
//         <div className="noMAtch_user_weapon">
//           <p>Choisissez votre arme brise coeur</p>
//           <select className={stop} onChange={handleChange}>
//             {arms.map((arm) => (
//               <option value={arm.img}>{arm.Arme}</option>
//             ))}
//           </select>
//           <div className="noMatch_user_select_arm">
//             <img className="img-weapon" src={armsImg} alt={armsImg}></img>
//           </div>
//         </div>
//         <div className="noMAtch_ai_weapon">
//           <p>L'arme de votre adversaire</p>
//           <br></br>
//           <img className="img-weapon" src={armsImgAi}></img>
//         </div>
//       </div>
//       <div className="noMatch_candidat_container">
//         <img
//           className="noMatch_img_candidat"
//           src="https://images.unsplash.com/photo-1559717642-f78162471caf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
//           alt="name"
//         />
//         {/*bloc candidat 1*/}
//         <button className={BtnStart} onClick={startGame}>
//           {launch}
//         </button>
//         <img
//           className="noMatch_img_candidat"
//           src="https://images.unsplash.com/photo-1546314029-ca8247095938?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
//           alt="name"
//         />
//         {/*bloc candidat 2*/}
//       </div>
//       <button>Peut être une dernière chance de passer une bonne soirée</button>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import arms from './Arms';
import './NoMatch.css';

export default function NoMatch() {
  const [armsImg, setArmsImg] = useState('');
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

  //Choose play weapon
  const handleChange = (e) => {
    setArmsImg(e.target.value);
    setBtnStart('');
    setUserMessage('Voici votre arme')
    setImgVisible('')
  };

  Math.floor(Math.random() * 10 + 1);
  // Start Battle and put weapon IA
  const startGame = () => {
    const random =Math.floor(Math.random() * arms.length)
    setImgVisibleAi('')
    setArmsImgAI(arms[random].img);
    setStop('invisible');
    setBtnStart('invisible');
    setAiMessage(`Voici l'arme de votre adversaire " ${arms[random].Arme} "`)
    setMessageCombat('')
    setMessageNewChance('')
  };

  return (
    <div className="noMatch_container">
      <div className="noMatch_candidat_container">
        <div className="noMAtch_user_weapon">
          <p> {UserMessage} </p>
          <select className={stop} onChange={handleChange}>
            {arms.map((arm) => (
              <option value={arm.img}>{arm.Arme}</option>
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
        <span className={`spanCombatEnCour ${messageCombat}`}>Combat en Cour...</span>
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
