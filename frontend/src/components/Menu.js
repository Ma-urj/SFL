import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'

function Menu() {
  return (
    <div>
        <Navbar/>
        <Space />
    </div>
  )
}

export default Menu

const Space = styled.div`
      margin-top: 10vh;
`