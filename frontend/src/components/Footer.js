import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Nav>
        <a href="https://instagram.com/sfl2k23?igshid=ZDdkNTZiNTM=" target="_blank">
            <img src="/images/insta.png" />
        </a>
    </Nav>
  )
}

export default Footer

const Nav = styled.nav`
    height: 8vh;
    background: #090b13;
    display: flex;
    align-items: center;
    overflow-x: hidden;
    overflow: hidden;
    width: 100%;
    z-index: 1;
    justify-content: space-around;
    a{
        img{
            width: auto;
            height: 7vh;
        }
    }
`