import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'

const SwiftUI = () => (
  <Layout>
    <Background>
      <Title>Learn SwiftUI</Title>
      <SubText>Build an app from scratch</SubText>
      <DescriptionBox>
        <DetailsText>This on going video course shows each step to building an iPad application using SwiftUI.
          Along the way we will use different technologies to learn what we need to know to complete the features.</DetailsText>
      </DescriptionBox>
      <a href="https://youtu.be/BAnkMenCq2o" target="_blank"><PreviewButton>Preview Video on YouTube</PreviewButton></a>
      <DescriptionBox>
        <DetailsText>I value your privacy and the investments you make in your career. This course is on Patreon.com,
        a trusted online source that enables you to cancel your subscription at any time.
        </DetailsText>
      </DescriptionBox>
      <DescriptionBox>
        <DetailsText>All you need to do is click the "Details on Patreon" button below and select the "Swift Subscriber"
          level to get access to this courses current and future materials. You also get an invite to my Slack group where
          you get direct access to me to ask questions and discuss with others.
        </DetailsText>
      </DescriptionBox>
      <a href="https://www.patreon.com/pwcom"><SubscribeButton>Details on Patreon</SubscribeButton></a>
    </Background>
  </Layout>
)

export default SwiftUI

const Background = styled.div`
  background-color: rgb(82, 0, 1);
  height: 98vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.div`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 30px;
  margin-top: 80px;
`

const SubText = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 50px;
`
const DetailsText = styled.div`
  font-size: 20px;
`

const DescriptionBox = styled.div`
  width: 500px;
  margin-bottom: 20px;
`

const SubscribeButton = styled.div`
  color: white;
  margin-top: 20px;
  padding-top: 6px;
  width: 300px;
  height: 50px;
  font-weight: bold;
  font-size: 22px;
  background-color: red;
  text-align: center;
  border-radius: 10px;
`

const PreviewButton = styled.div`
  color: white;
  margin-top: 10px;
  margin-bottom: 20px;
  padding-top: 6px;
  width: 250px;
  height: 40px;
  font-weight: bold;
  font-size: 18px;
  background-color: rgb(100, 40, 40);
  text-align: center;
  border-radius: 10px;
`