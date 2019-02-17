import React from 'react'
import Layout from '../components/Layout'
import {Cat} from 'react-kawaii'

const NotFoundPage = () => (
  <Layout>
      <br/><br/>
    <div className="error-message">
        <Cat size={320} mood="sad" color="#596881"/>
      <h1>NOT FOUND</h1><br/>
      <p>Ooops! that doesn&#39;t exist...</p><br/>
        <a href={"/"}>Click here to visit the home page
        </a>
    </div>
  </Layout>
)

export default NotFoundPage
