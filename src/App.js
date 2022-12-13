import './App.css';
import Stack from './components/habilities/Stack';
import Header from './components/header/Header';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Stack></Stack>
      <Portfolio></Portfolio>
    </div>
  );
}

export default App;
