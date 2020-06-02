import React from "react";

import PropTypes from "prop-types";
import { CSSTransitionGroup } from "react-transition-group";
import Button from "react-bootstrap/Button";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from "react-share";
function Result(props) {
  function refreshPage() {
    window.location.reload(false);
  }
  const shareUrl = "http://localhost:3000/quiz";
  const title = "Playlist of the Day";
  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        It's a likely chance that you prefer{" "}
        <strong>{props.quizResult} </strong>music at the momment!
      </div>
      <div>
        <Button className="d-inline-block" variant="success" type="submit">
          Get your playlist now
        </Button>
        <Button
          className="d-inline-block"
          variant="light"
          type="submit"
          onClick={refreshPage}
        >
          Redo the questions
        </Button>
        <div className="share-btn">
          <h5>Share your Playlist of the Day with your friends</h5>
          <FacebookShareButton url={shareUrl} quote={title}>
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>
          <TwitterShareButton url={shareUrl} quote={title}>
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>
        </div>
      </div>
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;
