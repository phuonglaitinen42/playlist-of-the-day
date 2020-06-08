// import React, { Component } from "react";

// // for Phuong:
// // This is just here to get the data.

// class NameCard extends React.Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <p>{this.props.username}</p>
//             </React.Fragment>
//         );
//     }
// }

// /* Alternative we could do something like from
// React-task-10.

// const NameCard = ({ username }) => {
//     return (
//         <div className="nameCard">
//             <p>{username}</p>
//         </div>
//     );
// };
// */

// export default NameCard;
import React from "react";

const NameCard = (props) => {
  return (
    <div>
      <p>Thank you, {props.name} for taking the quiz</p>
    </div>
  );
};

export default NameCard;
