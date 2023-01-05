import './App.css';
import { Hello } from './Hello';
import { Title } from './Title';

function App() {
  // const Hello = () => 'Hello';
  // function Hello() {
  //   return 'Hello';
  // }
  // const Hello = function () {
  //   return 'Hello';
  // };
  return (
    <>
      <h1>Welcome to React</h1>
      <h1>
        <Hello />
      </h1>
      <Title name="Eriy" /> <br />
      <Title name="Suratman" /> <br />
      <Title />
    </>
  );
}

export default App;
