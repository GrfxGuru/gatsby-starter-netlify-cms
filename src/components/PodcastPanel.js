import React from "react";
import podcastIconApple from "../img/podcast_players/podcastIconApple.png";
import podcastIconSpotify from "../img/podcast_players/podcastIconSpotify.png";
import podcastIconGoogle from "../img/podcast_players/podcastIconGoogle.png";

const PodcastPanel = ({
  title,
  icon,
  description,
  appleLink,
  spotifyLink,
  googleLink,
}) => (
  <div style={podcastBackingPanel}>
    <div style={podcastIcon}>
      <img src={icon} />
    </div>
    <div style={podcastTitle}>
      <h2>{title}</h2>
    </div>
    <div style={podcastDescription}>
      <p>{description}</p>
    </div>
    <div>
      <a href={appleLink}>
        <img src={podcastIconApple} style={podcastIconStyleApple} />
      </a>
      <a href={spotifyLink}>
        <img src={podcastIconSpotify} style={podcastIconStyleSpotify} />
      </a>
      <a href={googleLink}>
        <img src={podcastIconGoogle} style={podcastIconStyleGoogle} />
      </a>
    </div>
  </div>
);

const podcastBackingPanel = {
  width: 600,
  height: 148,
  overflow: "visible",
  backgroundColor: "#89393d",
  borderRadius: 15,
};

const podcastIcon = {
  width: 128,
  height: 128,
  overflow: "hidden",
  borderRadius: 15,
  backgroundSize: "cover",
  // eslint-disable-next-line prettier/prettier
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  imageRendering: "auto",
  border: "2px solid #ffffff",
  position: "relative",
  top: 10,
  left: 10,
};

const podcastTitle = {
  width: 433,
  height: 80,
  fontFamily: `"system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif", serif`,
  color: "#ffffff",
  fontSize: 24,
  fontWeight: "bold",
  letterSpacing: 0,
  lineHeight: 1.2,
  textAlign: "left",
  position: "absolute",
  left: 150,
  top: 110,
};

const podcastDescription = {
  width: 433,
  height: 80,
  fontFamily: `"system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif", serif`,
  color: "#ffffff",
  fontSize: 16,
  letterSpacing: 0,
  lineHeight: 1.2,
  textAlign: "left",
  position: "absolute",
  left: 150,
  top: 145,
};

const podcastIconStyleApple = {
  width: 131,
  height: 28,
  position: "absolute",
  left: 170,
  top: 210,
};

const podcastIconStyleSpotify = {
  width: 131,
  height: 28,
  position: "absolute",
  left: 321,
  top: 210,
};

const podcastIconStyleGoogle = {
  width: 90,
  height: 28,
  position: "absolute",
  left: 472,
  top: 210,
};

export default PodcastPanel;
