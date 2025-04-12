import React from 'react';
import RedditDisplay from './components/RedditDisplay';

function App() {
  return (
    <div className="App">
      <header className="bg-blue-600 text-white text-center py-6">
        <h1 className="text-3xl font-semibold">ContenTerra</h1>
      </header>
      <main>
        <RedditDisplay />
      </main>
    </div>
  );
}

export default App;
