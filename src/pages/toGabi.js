import { useState } from "react";
import styled from "styled-components"
import {TiChevronLeft, TiChevronRight} from "react-icons/ti"
import minecraft from "../assets/minicraft.png"

export default function ToGabi(){
    const [message, setMessage] = useState(0)

    const allMessages = [
        "Para Gabi",
        "Oi meu amor",
        "como você está?",
        "espero que quando estiver lendo isso esteja muito bem",
        "eu provavelmente vou estar morrendo de sono (talvez até dormindo)",
        "não tive uma noite muito boa",
        "mas fiz esse bilhetinho pra te avisar que te amo",
        "e agradecer por ter entrado em minha vida",
        "ser muito compreensivel",
        "e conseguir puxar assunto comigo, uma pessoa ruim de conversa (-_-;)",
        "enfim, agradeço por tudo isso e felicidade para nós todos (ㆁωㆁ*)",
        "que possamos todos ser felizes juntos (≧▽≦)",
        "e que tenhamos uma vida tranquila e feliz",
        "...",
        "oi ( ･ั﹏･ั)",
        "...",
        "kkkkkkkk",
        "...",
        "Quer namorar comigo? (◉ω◉)",
    ]
    const max = allMessages.length -1

    function changeMessage(val){
        if(message === max){
            if(val < 0){
            setMessage(message + val)
            }
        }
        if(message === 0){
            if (val > 0){
            setMessage(message + val)
            }
        }
        if (message > 0 && message < max){
            setMessage(message + val)
        }
    }

    return (
    <ToGabiStyle
    leftBtnOpacity={message > 0 ? 1 : 0}
    rightBtnOpacity={message < max ? 1 : 0}
    >
        <div class="snow"></div>
        <button className="lfbtn" onClick={()=>changeMessage(-1)}><TiChevronLeft/></button>
        <div className="container">
            {allMessages[message]}            
        </div>
        <button className="rgbtn" onClick={()=>changeMessage(1)}><TiChevronRight/></button>
        
    </ToGabiStyle>)
}

const ToGabiStyle = styled.div`
background-color: #FE3253;
font-family: 'Comfortaa', sans-serif;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;

.container{
    z-index: 1000;
    color: white;
    width: 50%;
    height: 50%;
    background: rgb(131,58,180);
    background: linear-gradient(35deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
    border-radius: 30px;
    border: solid 4px #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5vh;
    text-align: center;
    padding: 32px;
}
.lfbtn{
    opacity: ${props => props.leftBtnOpacity};
    transition: all 500ms ease-in;
}
.rgbtn{
    opacity: ${props => props.rightBtnOpacity};
    transition: all 500ms ease-in;
}
button{
    z-index: 1000;
    width: 64px;
    height: 64px;
    background-color: transparent;
    border: none;
    border-radius: 12px;
    
    
    svg{
        height: 50px;
        width: 50px;
        color: white;
    }
}
.snow, .snow:before, .snow:after {
  position: fixed;
  top: -600px;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url(${minecraft});
  background-size: 600px 600px;
  animation: snow 3s linear infinite;
  content: "";
}
.snow:after {
  margin-left: -200px;
  opacity: 0.4;
  animation-duration: 6s;
  animation-direction: reverse;
  filter: blur(3px);
}
.snow:before {
  animation-duration: 9s;
  animation-direction: reverse;
  margin-left: -300px;
  opacity: 0.65;
  filter: blur(1.5px);
}
@keyframes snow {
  to {
    transform: translateY(600px);
  }
}
`;