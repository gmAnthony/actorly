import './App.scss';

const title = 'Actorly Davis';

function App() {
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
        <form />
      </main>
    </div>
  );
}

export default App;
