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
  const [error, setError] = useState('');

  const click = () => {
    setNumber(number + 1);
  };

  const handleSubmit = () => {
    if (form.name === '') {
      setError('nama tidak boleh kosong');
    } else if (form.tahunLahir === '') {
      setError('tanggal lahir tidak boleh kosong');
    } else {
      setForm({ ...form, usia: 2022 - form.tahunLahir });
    }
  };

  const handleChange = (e) => {
    setError('');
    if (e.target.name === 'name') {
      if (e.target.value.length < 3) {
        setError('Minimal 3 karakter');
      }
    }
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
      <Input type='number' value={form.tahunLahir} onChange={handleChange} />
      <br />
      Umur saya : {form.usia}
      <br />
      <Button onClick={handleSubmit}>Submit</Button>
      <br />
      <p style={{ color: 'red' }}>{error}</p>
    </>
  );
}

export default App;
