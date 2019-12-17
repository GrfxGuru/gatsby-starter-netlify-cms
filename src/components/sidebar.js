import React from 'react'
import Aboutbox from './aboutbox'
import BuyMeACoffee from './buymeacoffee'
import swiftIcon from '../img/swift_logo.svg'
import tlcPodcastIcon from '../img/headphones.svg'
import twitterIcon from '../img/twitter.svg'
import linkedInIcon from '../img/linkedin.svg'
import githubIcon from '../img/github.svg'
import mailIcon from '../img/mail.svg'
import youtubeIcon from '../img/youtube-icon.svg'
import twitchIcon from '../img/twitch-icon.svg'
import StickerMule from './StickerMule'
import devToIcon from '../img/dev.svg'

const Sidebar = () => (
  <div className='sidebar'>
    <Aboutbox/>
    <h2 class='sidebarWidget'>Navigation</h2>
    <a href={'/tags/swift'}><img src={swiftIcon} height='20px' width='18px' /> Swift Programming</a>
    <br/>
    <a href={'/podcasts'}><img src={tlcPodcastIcon} height='20px' width='20px' /> Listen to Podcasts</a>
    <br/>
    <a href={'/tags/jam-stack'}>Learn JAMStack</a>
    <br/>
    <a href={'/resources/developer/'}>Developer Resources</a>
    <br/>
    <br/>
    <h2 class='sidebarWidget'>Social</h2>
    <a href={'/contact/'}><img src={mailIcon} width='20px' height='20px' /> Contact Me</a>
    <br/>
    <a href={'https://twitter.com/compileswift'} target='_blank' rel='noopener noreferrer'><img src={twitterIcon} width='20px' height='20px' /> Twitter</a>
    <br/>
    <a href={'https://www.linkedin.com/in/peterwitham'} target='_blank' rel='noopener noreferrer'><img src={linkedInIcon} width='20px' height='20px' /> LinkedIN</a>
    <br/>
    <a href={'https://github.com/GrfxGuru'} target='_blank' rel='noopener noreferrer'><img src={githubIcon} width='20px' height='20px' /> GitHub</a>
    <br/>
    <a href={'https://youtube.com/grfxg'} target='_blank' rel='noopener noreferrer'><img src={youtubeIcon} width='20px' height='20px' /> YouTube</a>
    <br/>
    <a href={'https://twitch.tv/grfxg'} target='_blank' rel='noopener noreferrer'><img src={twitchIcon} width='20px' height='20px' /> Twitch.tv</a>
    <br/>
    <a href={'https://dev.to/peterwitham'} target='_blank' rel='noopener noreferrer'><img src={devToIcon} width='20px' height='20px' /> Dev.to</a>
    <br/>
    <br/>
    <BuyMeACoffee/>
    <StickerMule/>
  </div>
)

export default Sidebar
