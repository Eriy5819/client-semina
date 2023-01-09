import { useState } from 'react';
import { Container, Form, Card } from 'react-bootstrap';
import SButton from '../../components/Button';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import axios from 'axios';
import SAlert from '../../components/Alert';
import { useNavigate } from 'react-router-dom';

function PageSignin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [alert, setAlert] = useState({
    status: false,
    message: '',
    type: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        'http://localhost:9000/api/v1/cms/auth/signin',
        {
          email: form.email,
          password: form.password,
        }
      );

      console.log(res.data.data.token);
      setIsLoading(false);
      navigate('/');
    } catch (error) {
      setIsLoading(false);
      console.log(error.response.data.msg);
      setAlert({
        status: true,
        message: error?.response?.data?.msg ?? 'Internal Server Error',
        type: 'danger',
      });
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Container md={12}>
      <div className='m-auto' style={{ width: '50%' }}>
        {alert.status && <SAlert message={alert.message} type={alert.type} />}
      </div>
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

            <SButton
              loading={isLoading}
              disabled={isLoading}
              variant='primary'
              action={handleSubmit}
            >
              Submit
            </SButton>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PageSignin;
