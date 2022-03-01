import './App.scss';
import { useState } from 'react';
// import { ActorSearch } from './components/ActorSearch';
import { ActorSearch2 } from './components/ActorSearch2';
import { ActorGraph } from './components/ActorGraph';
import Button from '@mui/material/Button';


const title = 'Actorly Davis';
const API_KEY = process.env.REACT_APP_API_KEY_V3;
console.log(API_KEY)
const N = 300;
const gData = {
  nodes: [...Array(N).keys()].map(i => ({ id: i })),
  links: [...Array(N).keys()]
    .filter(id => id)
    .map(id => ({
      source: id,
      target: Math.round(Math.random() * (id-1))
    }))
  }
  
function App() {
  const [actors, setActors] = useState([]);

  const handleSearch = () => {
    const searchTerms = actors.map(actor => actor.name);
    console.log(searchTerms)
  }

  return (
    <div className="App">
      <header className="App-header">
        {title}
      </header>
      <main className="main-container" role="main">
        <h2>See which movies actors have in common.</h2>
        <ul className="steps-list">
          <li>Step 1: Search for actors</li>
          <li>Step 2: That's it.</li>
        </ul>
        <form>
          {/* <ActorSearch inputValue={inputEl}/> */}
          <ActorSearch2 searchTerm={setActors}/>
          <Button type="submit" variant="contained" color="primary" onClick={handleSearch}>
            Actorize
          </Button>
        </form>
        {/* <button onClick={handleSearch}>Focus</button> */}
        <div id='actor-graph' />
        <ActorGraph data={gData} />
      </main>
    </div>
  );
}

export default App;
