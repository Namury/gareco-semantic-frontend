import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SearchPage from './pages/SearchPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact >
          <SearchPage></SearchPage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
