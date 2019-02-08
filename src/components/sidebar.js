import React from 'react'
import Aboutbox from './aboutbox'

const Sidebar = () => (
    <div className="sidebar">
        <Aboutbox/>
        <h2>Navigation</h2>
        <a href={'/tags/swift'}>Swift Programming</a><br/>
            {/*<a href={'./tags/jamstack'}>Learn JAMStack</a><br/>
        <a href={'./tags/podcasts'}>Listen to Podcasts</a><br/>
        <a href={'./tags/videos'}>Watch Videos</a><br/>*/}
        <br/>
        <h2>Social</h2>
        <a href={'/contact/'}>Contact Me</a><br/>
        <a href={'https://twitter.com/compileswift'} target='_blank' rel="noopener noreferrer">Twitter</a><br/>
        <a href={'https://www.linkedin.com/in/peterwitham'} target='_blank' rel="noopener noreferrer">LinkedIN</a><br/>
        <a href={'https://github.com/GrfxGuru'} target='_blank' rel="noopener noreferrer">GitHub</a><br/>
    </div>
)

export default Sidebar
