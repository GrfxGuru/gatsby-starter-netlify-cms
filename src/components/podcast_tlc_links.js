import React from 'react'
import Link from 'gatsby-link'

const PodcastLinksTLC = () => (
    <div className="podcastPlayersLinkTable">
        <h2>Subscribe to the Podcast</h2>
        <p>If you like this episode, please check out others at <a href="https://pw.d.pr/NBc0dv" target="_blank"
                                                                   rel="noopener noreferrer"> The Life Creative
            Podcast</a>. Or click the link to your favorite Podcast player.</p>
        <div className="podcastPlayerIconList">
            <Link to="https://overcast.fm/itunes1269813811/the-life-creative">
                <img src={require('../img/podcast_players/overcast.png')} alt="Overcast icon" width="32" height="32"/>
            </Link>
            <Link to="https://pw.d.pr/NBc0dv">
                <img src={require('../img/podcast_players/anchor.png')} alt="Anchor icon" width="32" height="32"/>
            </Link>
            <Link to="http://pca.st/uEB6">
                <img src={require('../img/podcast_players/pocket_casts.png')} alt="Pocket Casts icon" width="32"
                     height="32"/>
            </Link>
            <Link to="https://overcast.fm/itunes1269813811/the-life-creative">
                <img src={require('../img/podcast_players/radiopublic.png')} alt="Radio Public icon" width="32"
                     height="32"/>
            </Link>
            <Link to="https://overcast.fm/itunes1269813811/the-life-creative">
                <img src={require('../img/podcast_players/apple_podcasts.png')} alt="Apple icon" width="32"
                     height="32"/>
            </Link>
            <Link to="https://overcast.fm/itunes1269813811/the-life-creative">
                <img src={require('../img/podcast_players/spotify.png')} alt="Spotify icon" width="32" height="32"/>
            </Link>
            <Link to="https://overcast.fm/itunes1269813811/the-life-creative">
                <img src={require('../img/podcast_players/google_play.png')} alt="Google Play icon" width="32"
                     height="32"/>
            </Link>
            <Link to="https://overcast.fm/itunes1269813811/the-life-creative">
                <img src={require('../img/podcast_players/google_podcasts.png')} alt="Google Podcasts icon" width="32"
                     height="32"/>
            </Link>
            <Link to="https://overcast.fm/itunes1269813811/the-life-creative">
                <img src={require('../img/podcast_players/castbox.png')} alt="Castbox player icon" width="32"
                     height="32"/>
            </Link>
            <Link to="https://overcast.fm/itunes1269813811/the-life-creative">
                <img src={require('../img/podcast_players/breaker.png')} alt="Breaker player icon" width="32"
                     height="32"/>
            </Link>
        </div>
    </div>
)

export default PodcastLinksTLC
