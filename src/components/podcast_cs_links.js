import React from "react";

const PodcastLinksCS = () => (
  <div className="podcastPlayersLinkTable">
    <h2>Subscribe to the Podcast</h2>
    <p>
      If you like this episode, please check out others at{" "}
      <a
        href="https://pw.d.pr/5TbjRs"
        target="_blank"
        rel="noopener noreferrer"
      >
        CompileSwift Podcast
      </a>
      . Or click the link to your favorite Podcast player.
    </p>
    <div className="podcastPlayerIconList">
      <div className={"podcastPlayerIcon"}>
        <a href={"https://overcast.fm/itunes1467065787/compile-swift"}>
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
            "https://podcasts.apple.com/us/podcast/compile-swift/id1467065787"
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
        <a href={"https://open.spotify.com/show/2RGHkl4UtYj0V7lPcRojzK"}>
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
            "https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy9iZDg2YjM4L3BvZGNhc3QvcnNz"
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
        <a href={"https://pw.d.pr/5TbjRs"}>
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

export default PodcastLinksCS;
