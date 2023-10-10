import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from '../features/axios'

function Players() {
    let [Articles, setArticles] = useState();
    const [Players, setPlayers] = useState();
    const [Logos, setLogos] = useState();
    const [loading, setLoading] = useState(false);
    const [fname, setName] = useState("");
    const [pteam, setTeam] = useState("");
    const [pbatch, setBatch] = useState("");
    let names = [];

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(`/players`);
            const req2 = await axios.get('/logos');

            setArticles(req.data);
            setPlayers(req.data);
            setLogos(req2.data);
            setLoading(true);
        }
        

        fetchData();
    },[]);
    const handleSubmit = (() => {
        if(fname===""){
            Articles = Players;
            setArticles(Articles)
        }else{
            Articles = [];
            for(let i=0; i<Players.length; i++){
                if(Players[i]['name'].toLowerCase().includes(fname.toLowerCase())){
                    Articles.push(Players[i]);
                }
            }
            if(Articles.length===0){
                for(let i=0; i<Players.length; i++){
                    Articles.push(Players[i]);
                }
            }
            setArticles(Articles)
        }
    });

    const handleTeamSubmit = (() => {
        if(pteam===""){
            Articles = Players;
            setArticles(Articles)
        }else{
            Articles = [];
            for(let i=0; i<Players.length; i++){
                if(Players[i]['team'].includes(pteam)){
                    Articles.push(Players[i]);
                }
            }
            setArticles(Articles)
        }
    });

    const handleBatchSubmit = (() => {
        if(pbatch===""){
            Articles = Players;
            setArticles(Articles)
        }else{
            Articles = [];
            for(let i=0; i<Players.length; i++){
                if(Players[i]['batch'].includes(pbatch)){
                    Articles.push(Players[i]);
                }
            }
            setArticles(Articles)
        }
    });

  return (
    <Container>
            {loading ? <div>
                <TopDiv>
                        <PlayerNum><h1>Number of Players</h1><h1>{Articles.length}</h1></PlayerNum>
                    <div>
                        <Sel>
                            <input type="text" value={fname} onChange={(e) => {setName(e.target.value)}} />
                            <button type="submit" onClick={handleSubmit}>Find by Name</button>
                        </Sel>
                        <Bat>
                            <Sel>
                                <select value={pbatch} onChange={(e) => setBatch(e.target.value)}>
                                    <option></option>
                                    {Players.map(article => {
                                        if(!(names.includes(article['batch'])) ){
                                            names.push(article['batch']);
                                            return(
                                                <option>{article['batch']}</option>
                                            )
                                        }
                                    })}
                                </select>
                                <button type="submit" onClick={handleBatchSubmit}>Find by Batch</button>
                            </Sel>
                            <Sel>
                                <select value={pteam} onChange={(e) => setTeam(e.target.value)}>
                                    <option></option>
                                    {Players.map(article => {
                                        if(!(names.includes(article['team'])) ){
                                            names.push(article['team']);
                                            names.sort();
                                            return(
                                                <option>{article['team']}</option>
                                            )
                                        }
                                    })}
                                </select>
                                <button type="submit" onClick={handleTeamSubmit}>Find by Team</button>
                            </Sel>
                        </Bat>
                    </div>
                </TopDiv>
                <CardContainer className="cards">
                    {Articles.map(article =>{
                        return(
                            Logos.map(logo => {
                                if(article['team']===logo['tname']){
                                    return(
                                        <Card style={{
                                            background: `center / contain url(/images/tlogos/${logo['logo']}) no-repeat`
                                        }}>
                                            <img src={`/images/playerimgs/${article['photo']}`}/>
                                            <TextContainer>
                                                <h1>
                                                    Name: {`${article['name']}`}
                                                </h1>
                                                <h2>
                                                    Batch: {`${article['batch']}`}
                                                </h2>
                                                <h2>
                                                    Position: {`${article['position']}`}
                                                </h2>
                                                <h2>
                                                    Team: {`${article['team']}`}
                                                </h2>
                                            </TextContainer>
                                        </Card>
                                    )
                                }
                            })
                        )
                    })}
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

export default Players

const TopDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media (max-width: 539px){
        flex-direction: column;
    }
`

const PlayerNum = styled.div`
    display: flex;
    flex-direction: column;
`
const Bat = styled.div`
    display: flex;
`

const Container = styled.main`
    min-height: calc(100vh);
    position: relative;
    overflow-x: hidden;
    color: white;
    &:before{
        background: url("/images/playersImg.jpeg") center center / cover 
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

const Card = styled.div`
    text-decoration: none;
    color: white;
    border: 1px solid;
    border-radius: 100px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3vh;
    img{
        max-width: 30%;
        margin-right: 5%;
        margin-top: 5vh;
        border-radius: 30px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;
        @media (max-width: 539px){
            max-width: 50vw;
        }
        margin-bottom: 3vh;
    }
    @media (max-width: 1150px){
        flex-direction: column;
        height: 70%;
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
      input{
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
        font-size: 1em;
      }
`

const CardContainer=styled.div`
    padding: 10px;
    margin-bottom: 20vh;
    margin-top: 15px;
    grid-template-columns: repeat(1, 1fr);
`

const TextContainer=styled.div`
    .hsub{
        color: white;
        background: black;
    }
    p{
        color: white;
        background: black;
    }
    h2{
        color: white;
        background: black;
    }
    h1{
        color: white;
        background: black;
    }
    margin-bottom: 5vh;
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



const Field = styled.label`
      margin-top: 10vh
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    input{
        margin-left: 3vw;
        background: #090b13;
        border-radius: 10%;
        color: white;
        font-size: 2vh;
        padding: 1vh;
    }
`