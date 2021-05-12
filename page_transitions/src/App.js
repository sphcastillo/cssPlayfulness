import { 
      Switch, 
      Route, 
      useLocation 
} from 'react-router-dom';
import Home from "./pages/Home";
import Conservation from "./pages/Conservation";
import Explore from "./pages/Explore";
import { AnimatePresence } from 'framer-motion';
import GlobalStyle from './globalStyles';
import styled from 'styled-components';

const Section = styled.section`

  overflow-x: hidden; 

`;

function App() {

  let location = useLocation();

  return (
    
      <Section>
        <GlobalStyle />
        <AnimatePresence exitBeforeEnter>
          <Switch 
            location = {location}
            key = {location.pathname}
          >
              <Route path='/' exact component={Home}></Route>
              <Route path='/conservation' component={Conservation}></Route>
              <Route path='/explore' component={Explore}></Route>
          </Switch>
        </AnimatePresence>
      </Section>

    
  )
}

export default App;
