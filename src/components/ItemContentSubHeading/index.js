import React from 'react'
import ReactTooltip from 'react-tooltip';

// images
import questionmark from "../../assets/images/help-12.svg"


// styles
import * as Styled from "./styles";


const ItemContentSubHeading = ({title, tooltipText}) => {
    return (
        <Styled.Wrapper>
            <Styled.Heading>
                {title}
            </Styled.Heading>
            <Styled.QuestionMarkImage data-tip={tooltipText} src={questionmark} alt='question mark' />
            <ReactTooltip />
        </Styled.Wrapper>
    )
}


export default ItemContentSubHeading;