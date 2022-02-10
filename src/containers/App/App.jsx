import PeoplePage from '@containers/PeoplePage';
import HomePage from '@containers/HomePage';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/people" exact>
          People
        </NavLink>

        <Route path="/" exact component={HomePage} />
        <Route path="/people" exact component={PeoplePage} />
      </BrowserRouter>
    </>
  );
};

export default App;
