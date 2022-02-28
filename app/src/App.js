import './App.scss';
import { useRef } from 'react';
// import { ActorSearch } from './components/ActorSearch';
import { ActorSearch2 } from './components/ActorSearch2';
import { ActorGraph } from './components/ActorGraph';
import Button from '@mui/material/Button';

const title = 'Actorly Davis';

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
  const inputEl = useRef(null);

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
          <ActorSearch2 inputValue={inputEl}/>
          <Button type="submit" variant="contained" color="primary">
            Actorize
          </Button>
        </form>
        <div id='actor-graph' />
        <ActorGraph data={gData} />
      </main>
    </div>
  );
}

export default App;
