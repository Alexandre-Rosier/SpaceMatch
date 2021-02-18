// import React, { Component } from 'react';

// export default class NoMatch extends Component {
//   render() {
//     return (
//       <div className="">
//         <div className="">
//           <img className="" src={props.image} alt={props.name} />
//           {/* bloc armes */}
//         </div>
//         <div>
//           <img className="" src={props.image} alt={props.name} />
//           {/*bloc candidat 1*/}
//           <h1>VS</h1>
//           <img className="" src={props.image} alt={props.name} />
//           {/*bloc candidat 2*/}
//         </div>
//         <h2>tu l'as bien défonces, tu peux retourner pécho</h2>
//       </div>
//     );
//   }
// }
import React, { useState, useEffect } from 'react';
import arms from './Arms';
import './NoMatch.css';

export default function NoMatch() {
  const [armsImg, setArmsImg] = useState('');
  const [launch, setLaunch] = useState('Start');
  const [armsImgAi, setArmsImgAI] = useState('');
  const [stop, setStop] = useState('');

  //Choose play weapon
  const handleChange = (e) => {
    setArmsImg(e.target.value);
  };

  Math.floor(Math.random() * 10 + 1);
  // Start Battle and put weapon IA
  const startGame = () => {
    setLaunch('No love me !!!!!!');
    setArmsImgAI(arms[Math.floor(Math.random() * arms.length)].img);
    setStop('invisible');
  };

  // let keys = Array.from(arms.keys());
  // console.log(keys[Math.floor(Math.random() * keys.length)]);

  // let keys = Array.from(arms.keys());

  return (
    <div className="noMatch_container">
      <div className="noMatch_armes">
        <div className="noMAtch_user_weapon">
          <select className={stop} onChange={handleChange}>
            {arms.map((arm) => (
              <option value={arm.img}>{arm.Arme}</option>
            ))}
          </select>
          <div className="noMatch_user_select_arm">
            <img className="img-weapon" src={armsImg} alt={armsImg}></img>
          </div>
        </div>
        <div className="noMAtch_ai_weapon">
          <br></br>
          <img className="img-weapon" src={armsImgAi}></img>
        </div>
      </div>
      <div className="noMatch_candidat_container">
        <img
          className="noMatch_img_candidat"
          src="https://images.unsplash.com/photo-1559717642-f78162471caf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
          alt="name"
        />
        {/*bloc candidat 1*/}
        <button className={stop} onClick={startGame}>
          {launch}
        </button>
        <img
          className="noMatch_img_candidat"
          src="https://images.unsplash.com/photo-1546314029-ca8247095938?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
          alt="name"
        />
        {/*bloc candidat 2*/}
      </div>
      <h2>tu l'as bien défonces, tu peux retourner pécho</h2>
    </div>
  );
}
