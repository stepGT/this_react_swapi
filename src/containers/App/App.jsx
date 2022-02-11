import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import routesConfig from '../../routes/routesConfig';

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
        <Switch>
          {routesConfig.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
