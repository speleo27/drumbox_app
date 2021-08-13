import styled from "styled-components";

export default function GridButton ({isPlayed =false, soundPlay,id, handleSampleChange}){

        return (
            <Wrapper isPLayed={isPlayed} onClick={soundPlay}>
                <label onClick={event => event.stopPropagation()} htmlFor={id}>&#127925;</label>
                <input onClick={event => event.stopPropagation()} id={id} type="file" onChange={handleSampleChange} />
            </Wrapper>
        );


}
 const Wrapper = styled.div`

 border-radius:4px;
 background: rgb(131,58,180);
 background: radial-gradient(circle, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
 position: relative;
 overflow: hidden;
 &:: before{
    position:absolute;
    content:"";
    top:0;
    right:0;
    bottom:0;
    left:0;
    z-index:0;
    background: rgb(252,176,69);
    background: radial-gradient(circle, rgba(252,176,69,1) ${(props)=>props.isPlayed? "20%": "0%"}, rgba(131,58,180,1) 50%, rgba(253,29,29,1) 100%);
    opacity: ${(props) =>(props.isPlayed?"1":"0")};
    transition:linear 0.2s;
 }
 &:hover::before{
 opacity:1;
 }
  &:active::before{
 opacity:1;
 background: rgb(252,176,69);
 background: radial-gradient(circle, rgba(252,176,69,1) 20%, rgba(131,58,180,1) 50%, rgba(253,29,29,1) 100%);
 }
 & input{
 display: none;
 }
 & label{
 position: absolute;
 right:12px;
 top:12px;
 font-size:24px;
 
 }
 
 `;