import logo from './logo.svg';
import './App.css';
import { Route, Switch,  Router } from 'react-router-dom';
import history from './Utility/history';
import HomePage from './Pages/Home';
import EditTablePage from './Pages/EditTable';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/edit/:id" component={EditTablePage} />
      </Switch>
    </Router>
  );
}

export default App;
