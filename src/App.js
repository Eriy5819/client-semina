import './App.css';
import { Hello } from './Hello';
import { Title } from './Title';
import Button from './components/Button';

function App() {
  // const Hello = () => 'Hello';
  // function Hello() {
  //   return 'Hello';
  // }
  // const Hello = function () {
  //   return 'Hello';
  // };

  const users = [
    {
      _id: 1,
      name: 'Feriy',
      age: 18,
      status: true,
    },
    {
      _id: 2,
      name: 'Eriy',
      age: 18,
      status: true,
    },
    {
      _id: 3,
      name: 'Ricky',
      age: 16,
      status: false,
    },
  ];

  const isLogin = false;

  return (
    <>
      <h1>Welcome to React</h1>
      <ul>
        <li>Home</li>
        <li>Users</li>
        <li>{isLogin ? 'Sudah login' : 'Login'}</li>
      </ul>
      <h1>
        <Hello />
      </h1>
      <Title name="Eriy" /> <br />
      <Title name="Suratman" /> <br />
      <Title /> <br />
      <Button onClick={() => alert('click save')}>Save</Button>
      <ul>
        {users.map((user, index) => {
          return (
            <>
              {user.status && (
                <li
                  key={index}
                >{`Nama saya ${user.name} dan usia saya adalah ${user.age} tahun`}</li>
              )}
            </>
          );
        })}
      </ul>
    </>
  );
}

export default App;
