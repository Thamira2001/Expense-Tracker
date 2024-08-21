import React from 'react'
import styled from 'styled-components'

//should take in props to customize diff buttons but use the same component in different instances 
function Button({name, icon, onClick, bg, bPad, color, bRad}) {
  return (
    <ButtonStyled style={{
        background: bg,
        padding: bPad,
        borderRadius: bRad,
        color: color,
    }     
    } onClick={onClick}> 
        {icon}
        {name}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
    online: none;
    font-family: inherit;
    display:flex;
    align-items:center;
    gap: 5rem;
    cursor:pointer;
    transition: all .4s ease-in-out;
`;

export default Button