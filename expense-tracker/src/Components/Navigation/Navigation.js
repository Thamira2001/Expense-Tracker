import React from 'react'
import styled from 'styled-components'
import { MenuItems } from '../../utils/MenuItems';
import { signout } from '../../utils/Icons';

export default function Navigation() {
    
    return (
    <NavStyled>
        <div className='user-con'>
            <img src='' alt=''/>
            <div className='text'>
                <h2>Divya</h2>
                <p>Your Money</p>
            </div>
        </div>
        <ul className="menu-items">
                {MenuItems.map((item) => {
                    return <li
                        key={item.id}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            <div className="bottom-nav">
                <li>
                    {signout} Sign Out
                </li>
            </div>
        
    </NavStyled>

    
  )
  
}

const NavStyled = styled.div`

`;
