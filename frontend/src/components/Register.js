import React, { useEffect, useState } from 'react'
import  { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from '../features/axios'

function Register() {
    const navigate = useNavigate();
    const [fname, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [batch, setBatch] = useState("");
    const [position, setPosition] = useState("");
    const [regiCon, setRegiCon] = useState(false);
    const [terms, setTerms] = useState(false);
    const [Articles, setArticles] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(`/players`);

            setArticles(req.data);
            setLoading(true);
        }
        

        fetchData();
    },[]);
    
    const handleSubmit = async (e) => {
        let emailPresent = false;
        for(let i=0; i<Articles.length; i++){
            if(Articles[i]["email"]==email){
                emailPresent = true;
            }
        }
        e.preventDefault();
        if(emailPresent){
            alert("Email already exists")
        }
        else if(!regiCon || !terms){
            alert("Please tick all checkboxes!")
            
        }else if(phone.match(/^[0-9]+$/) == null || phone.length<10 || phone.length>12){
            alert("Please enter a valid number!")
        }else if(fname=="" || phone=="" || email=="" || batch=="" || position==""){
            alert("All details must be filled!")
        }else{
            await axios.post(`/${fname}/${phone}/${email}/${batch}/${position}`);
            navigate("/")
        }
    }

  return (
    <Container>
        {loading?<div>
        <Cont>Register here</Cont>
        <Reg>
            <Imag src = "/images/Pamphlet.png"/>
            <DivHold>
                <div>
                    <Field>Enter your Full Name:
                        <input type="text" value={fname} onChange={(e) => setName(e.target.value)} />
                    </Field>
                    <Field>Enter your Phone Number:
                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    </Field>
                    <Field>Batch:
                        <Sel value={batch} onChange={(e) => setBatch(e.target.value)}>
                            <option></option>
                            <option>2017</option>
                            <option>2018</option>
                            <option>2019</option>
                            <option>2020</option>
                            <option>2021</option>
                            <option>2022</option>
                        </Sel>
                    </Field>
                    <Field>Preferred Position:
                        <Sel value={position} onChange={(e) => setPosition(e.target.value)}>
                            <option></option>
                            <option>Forward</option>
                            <option>Midfield</option>
                            <option>Defence</option>
                            <option>Goalkeeper</option>
                        </Sel>
                    </Field>
                    <Field>Details on how to perform payment are provided <a href="https://forms.gle/XRcVC1tR2H46trNn6" target="_blank">HERE</a> Please follow the instructions and upload an images as required.
                    </Field>
                    <Field>{"Enter your Email:(Enter same email as the one entered in google form)"}
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </Field>
                    <Field>
                        <input type="checkbox" onClick={(e) => setRegiCon(e.target.checked)}/>
                        I understand that I will have to pay ₹50 for registration, and upon entry into a team, an additional ₹450.
                    </Field>
                    <Field>
                        <input type="checkbox" onClick={(e) => setTerms(e.target.checked)}/>
                        I have read and understood the <TermsL to="/t&c">TERMS & CONDITIONS</TermsL> of the tournament and hope to uphold them to the best of my ability. 
                    </Field>
                    <button type="submit" onClick={handleSubmit}>Send Details</button>
                </div>
            </DivHold>
        </Reg>
        </div>:
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

export default Register

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
    &:before{
        background: url("/images/registerImg.jpg") center center / cover 
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

const Cont = styled.h1`
    margin-top: 100px;
    color: white;
    margin-bottom: 50px;
`

const Field = styled.label`
    display: grid;
    align-items: center;
    justify-content: center;
    color: white;
    margin-bottom: 4vh;
    @media (min-width: 767px) {
        width: 40vw;
    }
    a{
        color: red;
    }
`

const Sel = styled.select`
    color: black;
`

const Imag = styled.img`
    @media (max-width: 540px) {
        width: 90vw;
    }
    @media (min-width: 541px) {
        width: 50vw;
    }
    @media (min-width: 1023px) {
        width: 30vw;
    }

`

const Reg = styled.div`
    display: flex;
    justify-content: space-evenly;
    @media (max-width: 767px) {
        flex-direction: column;
    }
    margin-bottom: 10vh;
`

const DivHold = styled.div`
    margin-top: 10vh;
`

const TermsL = styled(Link)`
    color:  red;
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