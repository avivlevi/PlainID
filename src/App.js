import { ThemeProvider } from "styled-components";

// components
import MainApp from "./components/MainApp";

// styles
import GlobalStyle, { theme } from "./components/styles/GlobalStyle";

// context
import {
  ItemStateProvider,
  ItemReducer,
  ItemState,
} from "./context/ItemContext";

function App() {
  return (
    <ItemStateProvider initialState={ItemState} reducer={ItemReducer}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainApp />
      </ThemeProvider>
    </ItemStateProvider>
  );
}

export default App;
