import React from 'react'
import Aboutbox from './aboutbox'
import BuyMeACoffee from './buymeacoffee'

const Sidebar = () => (
    <div className="sidebar">
        <Aboutbox/>
        <h2 class="sidebarWidget">Navigation</h2>
        <a href={'/tags/swift'}>Swift Programming</a><br/>
        <a href={'/tags/podcast'}>Listen to Podcasts</a><br/>
            {/*<a href={'./tags/jamstack'}>Learn JAMStack</a><br/>
        <a href={'./tags/videos'}>Watch Videos</a><br/>*/}
        <br/>
        <h2 class="sidebarWidget">Social</h2>
        <a href={'/contact/'}>Contact Me</a><br/>
        <a href={'https://twitter.com/compileswift'} target='_blank' rel="noopener noreferrer">Twitter</a><br/>
        <a href={'https://www.linkedin.com/in/peterwitham'} target='_blank' rel="noopener noreferrer">LinkedIN</a><br/>
        <a href={'https://github.com/GrfxGuru'} target='_blank' rel="noopener noreferrer">GitHub</a><br/>
        <br/>
        <BuyMeACoffee/>
    </div>
)

export default Sidebar
