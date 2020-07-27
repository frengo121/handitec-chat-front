import React, { useState, useEffect } from 'react'
import { Row, Col } from 'styled-bootstrap-grid'
import Layout from '../../layouts'

import io from 'socket.io-client'

import Config from '../../config'

import {
  WrapperChat,
  StyledContainer,
  StyledCol,
  StyledRow,
  StyledInput,
  Wrapper,
} from './style'

// import logo from '../../assets/images/logo.svg'
const socket = io(Config.api)

const Home = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    socket.on('message', (message) => {
      console.log('nuevo mensaje de event', message)
      retrieveNewMessages(message)
    })
  }, [])

  const retrieveNewMessages = (message) => {
    setMessages((oldArray) => [...oldArray, message])
  }

  const handleSubmit = (event) => {
    const body = event.target.value
    if (event.keyCode == 13 && body) {
      const message = {
        body,
        from: 'me',
      }
      setMessages([...messages, message])
      socket.emit('message', body)
      event.target.value = ''
    }
  }

  console.log('messages', messages)

  return (
    <Layout className="App">
      <StyledContainer>
        <StyledRow>
          <StyledCol lg={8} lgOffset={2}>
            <Wrapper>
              <WrapperChat>
                {messages.map((message, index) => {
                  return (
                    <p key={index}>
                      {message.from}: {message.body}
                    </p>
                  )
                })}
              </WrapperChat>
              <StyledInput
                type="text"
                placeholder="Inserta message"
                onKeyUp={handleSubmit}
              />
            </Wrapper>
          </StyledCol>
        </StyledRow>
      </StyledContainer>
    </Layout>
  )
}

export default Home
