import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const VideoPlayer = ({ embedId }) => (
  <Wrapper>
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Video Player"
      />
    </div>
  </Wrapper>
);

VideoPlayer.propTypes = {
  embedId: PropTypes.string.isRequired,
};

const Wrapper = styled.section`
  .video-responsive {
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
  }

  .video-responsive iframe {
    left: 25%;
    top: 0;
    height: 50%;
    width: 50%;
    position: absolute;
  }
`;

export default VideoPlayer;
