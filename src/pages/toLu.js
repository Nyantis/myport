import { useState } from "react";
import styled from "styled-components"
import {TiChevronLeft, TiChevronRight} from "react-icons/ti"
import minecraft from "../assets/minicraft.png"

export default function ToGabi(){
    const [message, setMessage] = useState(0)

    const allMessages = [
        "Para Lu",
        "olá meu amor",
        "botei os coraçõezinhos do minecraft por sua causa",
        "estou com muitas saudades",
        "e espero que seu dia com Vic esteja muito bom",
        "eu sei que isso esta longe de ser uma surpresa perfeita",
        "ou que esse dia dos namorados seja o ideal",
        "mas saiba que eu te amo muito",
        "mesmo que do nada pareça q vc quer tacar pedra em mim  (▀̿̿Ĺ̯̿▀̿ ̿)",
        "mas acontece, quem mandou eu gostar de mulher? ( ͡~ ͜ʖ ͡°)",
        "saiba que eu entendo e vou estar sempre do seu lado (๑˃̵ᴗ˂̵)ﻭ",
        "e também sei que não deve ser facil aguentar minha desatenção e lerdeza",
        "mas estou pondo aqui meu coração <3",
        "Mor eu te amo muito",
        "ja te contei varias vezes mas repito",
        "foi por sua causa que não acabei com minha própria vida",
        "por muito tempo eu vivi apaticamente, eu era frio",
        "fingia emoções, praticamente um ator e parte disso foi da vida que tive",
        "inclusive com minha familia e do modo que tudo ocorreu",
        "mas você me fez sentir o amor, algo que eu não sentia desde quando criança",
        "e eu sou muito grato por tudo isso, para toda a vida",
        "obrigado por ter me feito sentir as coisas novamente",
        "obrigado por não desistir de mim",
        "obrigado por me ajudar a crescer como namorado e pessoa",
        "obrigado por estar na minha vida quando nada mais fazia sentido",
        "obrigado por conseguir me amar do jeito que sou",
        "eu te amo muito e espero que você entenda isso",
        "e...",
        "gostaria de renovar nosso namoro/casamento por mais um ano? (pra vida toda é melhor) (◉ω◉)",
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
font-family: 'Comfortaa', cursive;
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