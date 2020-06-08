import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NameCard from "../Components/NameCard/NameCard";
const ResultPage = () => {
  const [loadedUsername, setLoadedUsername] = useState();
  let { userId } = useParams();
  useEffect(() => {
    if (!loadedUsername) {
      axios
        .get("http://localhost:3001/usernames/" + userId)
        .then((response) => {
          console.log(response.data);
          setLoadedUsername(response.data);
        });
    }
  });
  let name = undefined;
  if (userId) {
    name = <p>User</p>;
  }

  if (loadedUsername) {
    name = (
      <div>
        <NameCard name={loadedUsername.username} />
      </div>
    );
  }
  return name;
};

export default ResultPage;

// import React, { Component  } from "react";
// import axios from 'axios';
// import NameCard from '../Components/NameCard/NameCard';

// // for Phuong
// // source: https://stackoverflow.com/questions/55741562/how-do-i-pass-this-data-through-to-other-components-with-react-and-axios
// // https://stackoverflow.com/questions/45258536/axios-react-get-request-set-state-or-props-from-api-call
// // https://stackoverflow.com/questions/58299482/react-pass-id-from-state-on-client-to-axios-get-on-express-server
// // https://stackoverflow.com/questions/55741562/how-do-i-pass-this-data-through-to-other-components-with-react-and-axios

// class ResultPage extends Component  {
//     state = {
//         usernamedata: [],
//         intervalIsSet: false
//     };

//     componentDidMount() {
//       axios.get('http://localhost:3001/usernames/')
//       .then((result) => {
//           this.setState({ usernamedata: result.data });
//     });
// }

//     render() {
//         return (
//             <div>
//                 <NameCard
//                 usernamedata={this.state.username}
//                  />
//                 </div>
//         );
//     };
// }

// export default ResultPage;
