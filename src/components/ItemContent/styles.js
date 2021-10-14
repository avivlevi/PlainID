import styled from "styled-components";

export const OuterWrapper = styled.div`
  grid-area: content;

  padding: 5vw;

  @media only screen and (max-width: 900px) {
      padding: 0;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;

  display: ${props => props.hide ? 'none': 'flex'};
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  text-align: start;
  width: 100%;
  background-color: ${(props) => props.theme.resourceBlue};
  padding: 25px;

  & > * {
    color: white;
  }
`;

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100%;

  background-color: white;
`;
