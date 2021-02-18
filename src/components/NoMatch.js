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
import React, { Component } from 'react';
import './NoMatch.css';

export default class NoMatch extends Component {
  render() {
    return (
      <div className="noMatch_container">
        <div className="noMatch_armes">
          <img
            className="noMatch_img_arme"
            src="https://images.unsplash.com/photo-1544038659-12337883d216?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="name"
          />
          <img
            className="noMatch_img_arme"
            src="https://images.unsplash.com/photo-1544038659-12337883d216?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="name"
          />
          <img
            className="noMatch_img_arme"
            src="https://images.unsplash.com/photo-1544038659-12337883d216?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="name"
          />
          <img
            className="noMatch_img_arme"
            src="https://images.unsplash.com/photo-1544038659-12337883d216?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="name"
          />
          {/* bloc armes */}
        </div>
        <div className="noMatch_candidat_container">
          <img
            className="noMatch_img_candidat"
            src="https://images.unsplash.com/photo-1559717642-f78162471caf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
            alt="name"
          />
          {/*bloc candidat 1*/}
          <h1 className="noMatch_title_vs">VS</h1>
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
}
