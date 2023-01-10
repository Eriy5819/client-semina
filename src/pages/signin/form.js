import React from 'react';
import { Form } from 'react-bootstrap';
import SButton from '../../components/Button';
import TextInputWithLabel from '../../components/TextInputWithLabel';

export default function SForm({ form, handleChange, isLoading, handleSubmit }) {
  return (
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
  );
}
