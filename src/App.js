import logo from './logo.svg';
import './App.css';
import SecondAttempt from './components/SecondAttempt';
import Footer from './components/Footer';
import King from './components/King'
import KingSolution from './components/KingSolution';
import kings from './kings.json';
import Button from './components/Button';
import List from './components/list'
import Everton from './components/image';
import Input from './components/input';
import Counter from './components/Counter';
import CatFacts from './components/Catfacts';
import APIking from './components/APIking';
import Pokemon from './components/Poke';
import PostRequest from './components/Post';


function App() {


  return (
    <div>
      <PostRequest />
      {/* <Pokemon/> */}
      <header>React Practice</header>
      <fieldset><h1 style={{ background: "darkcyan", color: "chartreuse" }}>React</h1>
      </fieldset>
      {/* <article>This is my article</article>
      <CatFacts />
      <p>This is my paragraph</p>
      <Counter />
      <br />
      <fieldset><Everton /></fieldset>
      <Input />
      <SecondAttempt />
      <Footer />
      <Button />
      <List />
      <KingSolution /> 
      <APIking/> */}
    </div>

  );
}

export default App;
