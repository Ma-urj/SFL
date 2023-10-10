import React from 'react'
import styled from 'styled-components'

function Home() {
  return (
    <Container>
        <header className="App-header">
              <img src="./images/TransLogo.png" className="App-logo" alt="logo" />
            </header>
    </Container>
  )
}

export default Home

const Container = styled.main`
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
    &:before{
        background: url("/images/bgfootball.jpg") center center / cover 
        no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`