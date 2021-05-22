import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SearchPage from './pages/SearchPage'
import HomePage from './pages/HomePage'
import ResultPage from './pages/ResultPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/search" exact component={SearchPage}></Route>
        <Route path="/result/:search" component={(props) => <ResultPage {...props} />}></Route>
        <Route path="/result" exact component={ResultPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
