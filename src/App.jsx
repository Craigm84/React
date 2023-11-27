import logo from './logo.svg';
import './App.css';
import Trainee from './components/Trainee';
import SecondAttempt from './components/SecondAttempt';
import Trainer from './components/Trainer';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Trainee name="Craig" surname="Morris" age="39" />
      <h1>React</h1>
      <div>
        <button>Press Me</button><br></br>
      </div>
      <input placeholder="Type here"></input>
      <article>This is my article</article>
      <p>This is my paragraph</p>
      <img width="15%" src="https://th.bing.com/th?id=OSB.QAOuuBKku_3LGc2Z2Vlf2g--.png&w=60&h=60&c=6&qlt=90&o=6&dpr=1.3&pid=BingSports"></img>
      <br></br>
      <thead>Practice Table</thead>
      <tbody>
        <td>1
          <tr>AAA</tr>
          <tr>B</tr>
          <tr>C</tr>
          <tr>D</tr>
          <tr>E</tr>
          <tr>F</tr>
        </td>
        <td>2
          <tr>A</tr>
          <tr>BBB</tr>
          <tr>C</tr>
          <tr>D</tr>
          <tr>E</tr>
          <tr>F</tr>
        </td>
        <td>3
          <tr>A</tr>
          <tr>B</tr>
          <tr>CCC</tr>
          <tr>D</tr>
          <tr>E</tr>
          <tr>F</tr>
        </td>
      </tbody>
      <tfoot>Bottom of Table</tfoot>

      <Trainee name="Ria" surname="Morris" age="39" />
      <SecondAttempt />
      <Trainer name="Jordan" surname="Harrison" age="29" />
      <Trainer name="Andrew" surname="McCall" age="21" />
      <ol>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
      </ol>
      <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
      </ul>
      <Footer />
     </div>

  );
}

export default App;
