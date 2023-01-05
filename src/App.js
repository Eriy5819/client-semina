import { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState('');
  const [TahunLahir, setTahunLahir] = useState('');

  const click = () => {
    setNumber(number + 1);
  };

  const handleSubmit = () => {};
  return (
    <>
      <h1>Counter App</h1>
      <p>Nilai counter saat ini {number}</p>
      <Button onClick={click}>Click me</Button>
      <hr />
      <h1>Aplikasi input data diri</h1>
      Name:{' '}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      Tahun lahir:{' '}
      <input
        type="text"
        value={TahunLahir}
        onChange={(e) => TahunLahir(e.target.value)}
      />
      <br />
      <Button onClick={handleSubmit}>Submit</Button>
    </>
  );
}

export default App;
