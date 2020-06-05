import React from "react";
import { useParams } from "react-router-dom";
const Share = (props) => {
  let { resultId } = useParams();
  return (
    <div>
      <h2>Playlist of the Day</h2>
      <p>Playlist of the day for you is:</p>
      <h4>{props.playlistName}</h4>
    </div>
  );
};

export default Share;
