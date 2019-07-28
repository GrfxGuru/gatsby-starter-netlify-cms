import React from 'react'

const PodcastLinksTLC = () => (
    <div className="podcastPlayersLinkTable">
        <h2>Subscribe to the Podcast</h2>
        <p>If you like this episode, please check out others at <a href="https://pw.d.pr/NBc0dv" target="_blank"
                                                                   rel="noopener noreferrer"> The Life Creative
            Podcast</a>. Or click the link to your favorite Podcast player.</p>
        <div className="podcastPlayerIconList">
            <a href={"https://overcast.fm/itunes1269813811/the-life-creative"}>
                <img src={require('../img/podcast_players/overcast.png')} alt="Overcast icon" width="32" height="32"/>
            </a>
            <a href={"https://pw.d.pr/NBc0dv"}>
                <img src={require('../img/podcast_players/anchor.png')} alt="Anchor icon" width="32" height="32"/>
            </a>
            <a href={"http://pca.st/uEB6"}>
                <img src={require('../img/podcast_players/pocket_casts.png')} alt="Pocket Casts icon" width="32"
                     height="32"/>
            </a>
            <a href={"https://play.radiopublic.com/the-life-creative-WYBnel"}>
                <img src={require('../img/podcast_players/radiopublic.png')} alt="Radio Public icon" width="32"
                     height="32"/>
            </a>
            <a href={"https://podcasts.apple.com/us/podcast/the-life-creative/id1269813811"}>
                <img src={require('../img/podcast_players/apple_podcasts.png')} alt="Apple icon" width="32"
                     height="32"/>
            </a>
            <a href={"https://open.spotify.com/show/1hd27peL8JEoy4WMJq33Un"}>
                <img src={require('../img/podcast_players/spotify.png')} alt="Spotify icon" width="32" height="32"/>
            </a>
            <a href={"https://playmusic.app.goo.gl/?ibi=com.google.PlayMusic&isi=691797987&ius=googleplaymusic&link=https://play.google.com/music/m/Idhzktukhazvz55gayca5mdfocy?t%3DThe_Life_Creative%26pcampaignid%3DMKT-na-a"}>
                <img src={require('../img/podcast_players/google_play.png')} alt="Google Play icon" width="32"
                     height="32"/>
            </a>
            <a href={"https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy85YTJmMTgvcG9kY2FzdC9yc3M="}>
                <img src={require('../img/podcast_players/google_podcasts.png')} alt="Google Podcasts icon" width="32"
                     height="32"/>
            </a>
            <a href={"https://castbox.fm/channel/id1015404"}>
                <img src={require('../img/podcast_players/castbox.png')} alt="Castbox player icon" width="32"
                     height="32"/>
            </a>
            <a href={"https://www.breaker.audio/the-life-creative"}>
                <img src={require('../img/podcast_players/breaker.png')} alt="Breaker player icon" width="32"
                     height="32"/>
            </a>
        </div>
    </div>
);

export default PodcastLinksTLC
