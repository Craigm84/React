import logo from './logo.svg';
import './App.css';
import Trainee from './components/Trainee';

function App() {
  return (
    <div>
      <Trainee />
      <h1>React</h1>
      <div>
        <button>Press Me</button><br></br>
      </div>
      <input placeholder="type here"></input>
      <article>This is my article</article>
      <p>This is my paragraph</p>
      <img src="https://th.bing.com/th?id=OSB.QAOuuBKku_3LGc2Z2Vlf2g--.png&w=60&h=60&c=6&qlt=90&o=6&dpr=1.3&pid=BingSports"></img>
      <br></br>
      <label>Table</label>
      <thead>
        <tbody>
          <tr>1
            <td>A</td>
            <td>B</td>
            <td>C</td>
            <td>D</td>
            <td>E</td>
            <td>F</td>
          </tr>
          <tr>2
            <td>A</td>
            <td>B</td>
            <td>C</td>
            <td>D</td>
            <td>E</td>
            <td>F</td>
          </tr>
          <tr>3
            <td>A</td>
            <td>B</td>
            <td>C</td>
            <td>D</td>
            <td>E</td>
            <td>F</td>
          </tr>
        </tbody>
      </thead>

    </div>

  );
}

export default App;
