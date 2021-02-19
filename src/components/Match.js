import React, { Component } from 'react';
import './Match.css';

export default class Match extends Component {
  test = () => {
    console.log("ok")
  }
  render() {
    return (
    <div className="Match_background">
      <div className="Match_container">

      <div className="Match_coeurs_container">
          <img
            className="Match_img_loveroom"
            src="imageAlex/loveroom.png"
            alt="loveroom"
          />
      </div>

        <div className="Match_candidat_container">
          <img
            className="Match_img_candidat"
            src="https://images.unsplash.com/photo-1559717642-f78162471caf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
            alt="name"
          />
            <button className="btnStartFight" onClick={this.test}>Est-ce que tu veux pusher avec moi ???</button>
          <img
            className="Match_img_candidat"
            src="https://images.unsplash.com/photo-1546314029-ca8247095938?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
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
}
