import './App.css';
import Stack from './components/Habilities/Stack';
import Header from './components/Header/Header';
import Portfolio from './components/portfolio/Portfolio';
import Contact from "./components/contact/Contact";
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Header></Header>
      <Stack></Stack>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
