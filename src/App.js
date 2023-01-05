import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  const [number, setNumber] = useState(0);
  // const [name, setName] = useState('');
  // const [TahunLahir, setTahunLahir] = useState('');
  // const [usia, setUsia] = useState('');
  const [form, setForm] = useState({
    name: '',
    tahunLahir: '',
    usia: '',
  });

  const click = () => {
    setNumber(number + 1);
  };

  const handleSubmit = () => {
    setForm({ ...form, usia: 2022 - form.tahunLahir });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h1>Counter App</h1>
      <p>Nilai counter saat ini {number}</p>
      <Button onClick={click}>Click me</Button>
      <hr />
      <h1>Aplikasi input data diri</h1>
      Name:{' '}
      <Input
        type='text'
        value={form.name}
        name='name'
        onChange={handleChange}
      />
      <br />
      Tahun lahir:{' '}
      <Input
        type='number'
        value={form.tahunLahir}
        name='tahunLahir'
        onChange={handleChange}
      />
      <br />
      Umur saya : {form.usia}
      <br />
      <Button onClick={handleSubmit}>Submit</Button>
    </>
  );
}

export default App;
