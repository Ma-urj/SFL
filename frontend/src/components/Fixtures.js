import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from '../features/axios'

function Fixtures() {
    let [Articles, setArticles] = useState([]);
    const [Logos, setLogos] = useState();
    const [Matches, setMatch] = useState();
    const [loading, setLoading] = useState(false);
    const [date, setDate] = useState("")
    let dates = [];

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(`/matchdet`);
            const req2 = await axios.get('/logos');

            setMatch(req.data);
            setLogos(req2.data);
            setLoading(true);
        }
        

        fetchData();
    },[]);

    const handleSubmit = (() => {
        if(date==""){
            setArticles([])
        }else{
            Articles = [];
            for(let i=0; i<Matches.length; i++){
                if(Matches[i]['date'].includes(date)){
                    Articles.push(Matches[i]);
                }
            }
            setArticles(Articles)
        }
    });

  return (
    <Container>
         {loading ? <div>
                <Sel>
                    <select value={date} onChange={(e) => setDate(e.target.value)}>
                        <option></option>
                        {Matches.map(article => {
                            if(!(dates.includes(article['date'])) ){
                                dates.push(article['date']);
                                return(
                                    <option>{article['date']}</option>
                                )
                            }
                        })}
                    </select>
                    <button type="submit" onClick={handleSubmit}>Find Fixtures</button>
                </Sel>
                <CardContainer className="cards">
                    {Articles.map(article =>{
                            let teamalogo = "/images/TransLogo.png";
                            let teamblogo = "/images/TransLogo.png";
                            let winner = "/images/TransLogo.png";
                            Logos.map(logo => {
                                if(logo["tname"] == article['teamaname']){
                                    teamalogo = `/images/tlogos/${logo["logo"]}`
                                }
                                if(logo["tname"] == article['teambname']){
                                    teamblogo = `/images/tlogos/${logo['logo']}`
                                }
                                if(!article["timescore"].toLowerCase().includes("pm")){
                                    let gamescore = article["timescore"].split(" - ");
                                    if(gamescore[0]>gamescore[1]){
                                        winner = teamalogo;
                                    }else if(gamescore[0]<gamescore[1]){
                                        winner = teamblogo
                                    }
                                }
                            })
                            return(
                                <Card>
                                    <TextContainer>
                                        <h1>
                                            {`${article['matchname']}`}
                                        </h1>
                                        <Match>
                                            <div>
                                                <LogoImg src={teamalogo} />
                                                <div>
                                                    <h2>
                                                        {`${article['teamaname']}`}
                                                    </h2>
                                                </div>
                                            </div>
                                            <Score>
                                                <MidImg src={winner} />
                                                {`${article['timescore']}`}
                                            </Score>
                                            <div>
                                                <LogoImg src={teamblogo} />
                                                <h2>
                                                    {`${article['teambname']}`}
                                                </h2>
                                            </div>
                                        </Match>
                                        <h3>
                                            {`${article['date']}`}
                                        </h3>
                                    </TextContainer>
                                </Card>
                            )
                        }
                    )}
                </CardContainer> 
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

export default Fixtures

const MidImg = styled.img`
    max-width: 10vw;
`

const LogoImg = styled.img`
    max-width: 20vw;
    margin-right: 5%;
    margin-top: 5vh;
    border-radius: 30px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;
`

const Container = styled.main`
    min-height: calc(100vh);
    position: relative;
    overflow-x: hidden;
    color: white;
    &:before{
        background: url("/images/matchImg.jpeg") center center / cover 
        no-repeat fixed;
        @supports (-webkit-touch-callout: none) {
            background: linear-gradient(335deg, rgba(123,104,238,1) 0%, rgba(0,255,255,1) 100%) center center / cover 
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
`

const Card = styled.div`
    text-decoration: none;
    color: white;
    border-top: 1px solid;
    border-bottom: 5px solid;
    width: 80vw;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    @media (max-width: 1150px){
        flex-direction: column;
        height: 70%;
    }
`
const Score = styled.h1`
    font-size: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 1150px){
        font-size: 1em;
    }
`

const CardContainer=styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin-bottom: 20vh;
    grid-row-gap: 15px;
    margin-top: 15px;
    align-items: center;
    justify-content: center;
`

const TextContainer=styled.div`
    .hsub{
        color: white;
    }
    p{
        color: white;
    }
    h2{
        color: white;
        background: black;
        @media (max-width: 1150px){
            font-size: 1em;
        }
    }
    margin-bottom: 5vh;
    width: 80vw;
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

const Sel = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;

      select{
          margin-top: 3vh;
          margin-bottom: 3vh;
          padding: 3vh;
          background: #090b13;
          color: white;
          decorations: none;
      }
      button{
        padding: 1vh;
        border-radius: 20%;
        background: #090b13;
        color: white;
      }
`

const Match = styled.div`
      display: grid;
      width: 80vw;
      align-items: center;
      width: 80vw;
      grid-template-columns: auto auto auto;
      div{
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      h2{
        display: grid;
      }
`