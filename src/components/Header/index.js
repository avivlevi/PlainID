import React from 'react'

// images
import plainIdLogo from '../../assets/images/plainid-logo-white.png'

// styles
import * as Styled from './styles'


const Header = () => {


    return (
        <Styled.Wrapper>
            <Styled.Logo src={plainIdLogo} alt='Logo' />
            <Styled.HeaderText>
                PlainID - Demo App
            </Styled.HeaderText>
            

        </Styled.Wrapper>
    )
}

export default Header;