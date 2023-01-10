import { useState } from 'react';
import { Container, Card } from 'react-bootstrap';

import axios from 'axios';
import SAlert from '../../components/Alert';
import { useNavigate } from 'react-router-dom';
import { config } from '../../configs';
import SForm from './form';

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
        `${config.api_host_dev}/cms/auth/signin`,
        form
        // email: form.email,
        // password: form.password,
      );

      localStorage.setItem('token', res.data.data.token);
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
          <SForm
            form={form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PageSignin;
