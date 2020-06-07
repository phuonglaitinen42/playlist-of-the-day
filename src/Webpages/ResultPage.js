import React, { Component  } from "react";
import axios from 'axios';
import NameCard from '../Components/NameCard/NameCard';

// for Phuong
// source: https://stackoverflow.com/questions/55741562/how-do-i-pass-this-data-through-to-other-components-with-react-and-axios
// https://stackoverflow.com/questions/45258536/axios-react-get-request-set-state-or-props-from-api-call
// https://stackoverflow.com/questions/58299482/react-pass-id-from-state-on-client-to-axios-get-on-express-server
// https://stackoverflow.com/questions/55741562/how-do-i-pass-this-data-through-to-other-components-with-react-and-axios

class ResultPage extends Component  {
    state = {
        usernamedata: [],
        intervalIsSet: false
    };

    componentDidMount() {
      axios.get('http://localhost:3001/usernames/')
      .then((result) => {
          this.setState({ usernamedata: result.data });
    });
}

    render() {
        return (
            <div>
                <NameCard
                usernamedata={this.state.username}
                 />
                </div>
        );
    };
}
 
    

export default ResultPage;