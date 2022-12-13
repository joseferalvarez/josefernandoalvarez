import './App.css';
import Stack from './components/habilities/Stack';
import Header from './components/header/Header';
import Project from './components/portfolio/project';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Stack></Stack>
      <Project></Project>
    </div>
  );
}

export default App;
