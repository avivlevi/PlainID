import styled from 'styled-components'

export const Headline = styled.h2`
    color: ${props => props.color || props.theme.darkGrey};
    font-weight: 300;
`;


export const Paragraph = styled.p`
    color: ${props => props.theme.paragraphGrey};
    text-align: ${props => props.txtAlign || 'start'};
    
`;