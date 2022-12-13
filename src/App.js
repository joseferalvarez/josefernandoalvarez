import './App.css';
import Stack from './components/habilities/Stack';
import Header from './components/header/Header';
import Portfolio from './components/portfolio/Portfolio';
import Contact from "./components/contact/Contact";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Stack></Stack>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
