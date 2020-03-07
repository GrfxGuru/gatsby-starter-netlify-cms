import React from "react";

const PodcastLinksTLC = () => (
  <div className="podcastPlayersLinkTable">
    <h2>Subscribe to the Podcast</h2>
    <p>
      If you like this episode, please check out others at{" "}
      <a
        href="https://pw.d.pr/NBc0dv"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        The Life Creative Podcast
      </a>
      . Or click the link to your favorite Podcast player.
    </p>
    <div className="podcastPlayerIconList">
      <div className={"podcastPlayerIcon"}>
        <a href={"https://overcast.fm/itunes1269813811/the-life-creative"}>
          <img
            src={require("../img/podcast_players/overcast.png")}
            alt="Overcast icon"
            width="32"
            height="32"
          />
          <br />
          <b>Overcast</b>
        </a>
      </div>
      <div className={"podcastPlayerIcon"}>
        <a
          href={
            "https://podcasts.apple.com/us/podcast/the-life-creative/id1269813811"
          }
        >
          <img
            src={require("../img/podcast_players/apple_podcasts.png")}
            alt="Apple icon"
            width="32"
            height="32"
          />
          <br />
          <b>Apple</b>
        </a>
      </div>
      <div className={"podcastPlayerIcon"}>
        <a href={"https://open.spotify.com/show/1hd27peL8JEoy4WMJq33Un"}>
          <img
            src={require("../img/podcast_players/spotify.png")}
            alt="Spotify icon"
            width="32"
            height="32"
          />
          <br />
          <b>Spotify</b>
        </a>
      </div>
      <div className={"podcastPlayerIcon"}>
        <a
          href={
            "https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy85YTJmMTgvcG9kY2FzdC9yc3M="
          }
        >
          <img
            src={require("../img/podcast_players/google_podcasts.png")}
            alt="Google Podcasts icon"
            width="32"
            height="32"
          />
          <br />
          <b>Google</b>
        </a>
      </div>
      <div className={"podcastPlayerIcon"}>
        <a href={"http://pca.st/uEB6"}>
          <img
            src={require("../img/podcast_players/pocket_casts.png")}
            alt="Pocket Casts icon"
            width="32"
            height="32"
          />
          <br />
          <b>Pocketcasts</b>
        </a>
      </div>
      <div className={"podcastPlayerIcon"}>
        <a href={"https://pw.d.pr/NBc0dv"}>
          <img
            src={require("../img/podcast_players/anchor.png")}
            alt="Anchor icon"
            width="32"
            height="32"
          />
          <br />
          <b>All the links</b>
        </a>
      </div>
    </div>
  </div>
);

export default PodcastLinksTLC;
