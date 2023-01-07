import { useState } from 'react';
import { Container, Form, Card } from 'react-bootstrap';
import SButton from '../../components/Button';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import axios from 'axios';

function PageSignin() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:9000/v1/cms/auth/signin', {
        email: form.email,
        password: form.password,
      });

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    // console.log('e.target.name');
    // console.log(e.target.name);
    // console.log('e.target.value');
    // console.log(e.target.value);
    setForm({ ...form, [e.target.name]: [e.target.value] });
  };
  return (
    <Container md={12}>
      <Card style={{ width: '50%' }} className='m-auto mt-5'>
        <Card.Body>
          <Card.Title className='text-center'>Form Singin</Card.Title>
          <Form>
            <TextInputWithLabel
              label='Email address'
              name='email'
              value={form.email}
              type='email'
              placeholder='Enter email'
              onChange={handleChange}
            />

            <TextInputWithLabel
              label='Password'
              name='password'
              value={form.password}
              type='password'
              placeholder='Password'
              onChange={handleChange}
            />

            <SButton variant='primary' action={handleSubmit}>
              Submit
            </SButton>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PageSignin;
