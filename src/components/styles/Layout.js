import styled from "styled-components";

export const MainGrid = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;

  grid-template-columns: minmax(${(props) => props.theme.sidebarWidth}, 0.2fr) auto;
  grid-template-rows: ${(props) => props.theme.headerHeight} auto;
  text-align: center;
  grid-template-areas:
    "header header"
    "sidebar content";

  @media only screen and (max-width: 800px) {
      grid-template-columns: 1fr;
      grid-template-rows: ${(props) => props.theme.headerHeight} auto auto;

      grid-template-areas:
        "header"
        "sidebar"
        "content";

  }
`;

export const Spacer = styled.div`
  margin: ${(props) => props.margin || "unset"};
  padding: ${(props) => props.padding || "unset"};
`;
export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  gap: ${(props) => props.gap || "unset"};
  padding: ${(props) => props.padding || 0};
  margin: ${(props) => props.margin || 0};
`;
