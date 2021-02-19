import React, { useState, useEffect } from 'react';
import './Match.css';

export default function Match (props) {
  const [prevImageUser, setPrevImageUser] = useState('');
  const [prevImageIa, setPrevImageIa] = useState('');

  useEffect(() => {
    try {
      const { imageUser, imageIa } = props.location.data;
      setPrevImageUser(imageUser);
      setPrevImageIa(imageIa);
    } catch (error) {
      alert(error);
    }
  }, []);

    return (
    <div className="Match_background">
      <div className="Match_container">

      <div className="Match_coeurs_container">
          <img
            className="Match_img_coeurs"
            src="images/matchCoeur1.png"
            alt="coeur"
          />
          <img
            className="Match_img_coeurs"
            src="images/matchCoeur2.png"
            alt="coeur"
          />
      </div>

        <div className="Match_candidat_container">
          <img
            className="Match_img_candidat"
            src={prevImageUser}
            alt="name"
          />
            <button className="button_match">ça t'excite ???</button>
          <img
            className="Match_img_candidat"
            src={prevImageIa}
            alt="name"
          />
        </div>

        <video
          className="Match_vidéo_les_inconnus"
          src="https://cdn.discordapp.com/attachments/778279208718696459/812043876026155078/les-inconnus-ingrid-est-ce-que-tu-baises.mp3"
        ></video>
      </div>
    </div>
    );
}
