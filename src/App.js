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

function App() {



  return (
    <div>
      <header>React Practice</header>
      <fieldset><h1 style={{ background: "green", color: "red" }}>React</h1>
      </fieldset>
      <article>This is my article</article>
      <p>This is my paragraph</p>
      {/* <Counter />
      <br />
      <fieldset><Everton /></fieldset>
      <Input />
      <SecondAttempt />
      <Footer />
      <Button />
      <List /> */}
      <KingSolution />
    </div>

  );
}

export default App;
