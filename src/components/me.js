import styled from "styled-components"
import eu from "../assets/eu.png"

export default function Me(){
    return (
    <MeStyle>
        <img alt="" src={eu} />
    </MeStyle>)
}

const MeStyle = styled.div`
img{
    width: 20vw;
    height: auto;
  }
`;