import styled, { createGlobalStyle } from 'styled-components'

export const Wrapper = styled.div``

export const Content = styled.div`
  flex: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

export const GlobalStyle = createGlobalStyle`
  html {
      font-family: 'Futura';
      font-size: 15px;
      min-height: 100%;
      height: 100%;
      color: #575756;
      background: #1E1D1C;
      body{
          background: url('https://www.handytec.mobi/images/backgrounds/imagen_home-01.png');
          background-size:contain;
          background-position: 0 0;
          background-repeat: no-repeat;
          min-height: 100%;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          *, ::after, ::before{
            box-sizing: border-box;
          }
          margin: 0;
          #root{
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }
        } 
  }
  `
