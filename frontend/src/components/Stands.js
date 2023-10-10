import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from '../features/axios'

function Stands() {
    const [Articles, setArticles] = useState();
    const [Logos, setLogos] = useState();
    const [loading, setLoading] = useState(false);
    let groups = ["A", "B"];

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(`/stands`);
            const req2 = await axios.get('/logos');

            setArticles(req.data);
            setLogos(req2.data);
            setLoading(true);
        }
        

        fetchData();
    },[]);

  return (
    <Container>
        {loading ? <div>
                {groups.map(group =>{
                    return(
                        <div>
                            <TBCont>
                                <h1>Group {group}</h1>
                                <ScoreTB>
                                    <thead>
                                        <tr>
                                            <th>
                                                Team Name
                                            </th>
                                            <th>
                                                Played
                                            </th>
                                            <th>
                                                Wins
                                            </th>
                                            <th>
                                                Draws
                                            </th>
                                            <th>
                                                Loss
                                            </th>
                                            <th>
                                                GF
                                            </th>
                                            <th>
                                                GA
                                            </th>
                                            <th>
                                                GD
                                            </th>
                                            <th>
                                                Points
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Articles.map(article =>{
                                            if(article['group']==group){
                                                return(
                                                    Logos.map(logo => {
                                                        if(article['tname']==logo['tname']){
                                                            return(
                                                                <tr>
                                                                    <td>{article['tname']}</td>
                                                                    <td>{article['played']}</td>
                                                                    <td>{article['wins']}</td>
                                                                    <td>{article['draws']}</td>
                                                                    <td>{article['loss']}</td>
                                                                    <td>{article['gc']}</td>
                                                                    <td>{article['ga']}</td>
                                                                    <td>{article['gd']}</td>
                                                                    <td>{article['points']}</td>
                                                                </tr>
                                                            )
                                                        }
                                                    })
                                                )
                                            }
                                        })}
                                    </tbody>
                                </ScoreTB>
                            </TBCont>
                        </div>
                    )
                })}
            </div>
                : 
                <div>
                    <LoadingImage>
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                    </LoadingImage>
                </div>
                }
    </Container>
  )
}

export default Stands

const Container = styled.main`
    min-height: calc(100vh);
    position: relative;
    overflow-x: hidden;
    color: white;
    &:before{
        background: url("/images/home-background.png") center center / cover 
        no-repeat fixed;
        @supports (-webkit-touch-callout: none) {
            background: linear-gradient(335deg, rgba(216,191,216,1) 0%, rgba(128,0,0,1) 100%) center center / cover 
            no-repeat scroll;
        }
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
    button{
        margin-top: 2vh;
        margin-bottom: 4vh;
        background: #090b13;
        color: white;
        border-radius: 20%;
        font-size: 2vh;
        padding: 1vh;
    }
`

const LoadingImage = styled.div`
    height: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .wave {
        width: 5px;
        height: 100px;
        background: linear-gradient(45deg, cyan, #fff);
        margin: 10px;
        animation: wave 1s linear infinite;
        border-radius: 20px;
      }
      .wave:nth-child(2) {
        animation-delay: 0.1s;
      }
      .wave:nth-child(3) {
        animation-delay: 0.2s;
      }
      .wave:nth-child(4) {
        animation-delay: 0.3s;
      }
      .wave:nth-child(5) {
        animation-delay: 0.4s;
      }
      .wave:nth-child(6) {
        animation-delay: 0.5s;
      }
      .wave:nth-child(7) {
        animation-delay: 0.6s;
      }
      .wave:nth-child(8) {
        animation-delay: 0.7s;
      }
      .wave:nth-child(9) {
        animation-delay: 0.8s;
      }
      .wave:nth-child(10) {
        animation-delay: 0.9s;
      }
      
      @keyframes wave {
        0% {
          transform: scale(0);
        }
        50% {
          transform: scale(1);
        }
        100% {
          transform: scale(0);
        }
      }
`

const ScoreTB = styled.table`
    border-collapse: collapse;
    width: 95vw;
    align-items: center;
    justify-content: center;
`

const TBCont = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 95vw;
    gap: 10px;
    padding: 1rem;
    @media (max-width: 1150px){
        padding: 0.1rem;
    }
    th,td {
        border: 1px solid #ffffff;
        text-align: left;
        padding: 8px;
        font-size: 1em;
        
        @media (max-width: 1150px){
            font-size: 0.001em;
        }
    }
    th {
        background-color: white;
        color: black;
        border: 5px solid;
      }
`