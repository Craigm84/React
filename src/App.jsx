import logo from './logo.svg';
import './App.css';
import trainee from './components/Trainee';
import SecondAttempt from './components/SecondAttempt';
import trainer from './components/Trainer'
import Footer from './components/Footer';
import trainers from './data/trainers.json'
import trainees from './data/trainees.json'

function App() {
  console.log("trainers", trainers);
  console.log("trainee", trainees);

  const trainerComponents = [];
  for (const trainer of trainers) {
    console.log("trainers:", trainer);
    trainerComponents.push(
      <trainer name={trainer.name} surname={trainer.surname} age={trainer.age} />
    );
  }

  const traineeComponents = [];
  for (const trainee of trainees) {
    console.log("trainees:", trainee);
    traineeComponents.push(
      <trainee name={trainee.name} surname={trainee.surname} age={trainee.age} />
    )
  }

  return (
    <div>
      <header>React Practice</header>
      <trainee name="Craig" surname="Morris" age="39" />
      <div>
        <h1>React</h1>
        <button>Press Me</button><br></br>
      </div>
      <fieldset>
        <legend>Text Here</legend>
        <input placeholder="Type here"></input>
      </fieldset>
      <article>This is my article</article>
      <p>This is my paragraph</p>
      <img width="15%" src="https://th.bing.com/th?id=OSB.QAOuuBKku_3LGc2Z2Vlf2g--.png&w=60&h=60&c=6&qlt=90&o=6&dpr=1.3&pid=BingSports"></img>
      <br></br>
      <fieldset>
        <table>
          <tr>1
            <td>AAA</td>
            <td>B</td>
            <td>C</td>
            <td>D</td>
            <td>E</td>
            <td>F</td>
          </tr>
          <tr>2
            <td>A</td>
            <td>BBB</td>
            <td>C</td>
            <td>D</td>
            <td>E</td>
            <td>F</td>
          </tr>
          <tr>3
            <td>A</td>
            <td>B</td>
            <td>CCC</td>
            <td>D</td>
            <td>E</td>
            <td>F</td>
          </tr>
        </table>
      </fieldset>

      <trainee name="Ria" surname="Morris" age="39" />
      <SecondAttempt />
      <trainer name="Jordan" surname="Harrison" age="29" />
      <trainer name="Andrew" surname="McCall" age="21" />
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
      -------------------------------------------------------------------
      {trainerComponents}
      {traineeComponents}
    </div>

  );
}

export default App;
