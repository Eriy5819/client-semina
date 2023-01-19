import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Table, Spinner } from 'react-bootstrap';
import SButton from '../../components/Button';
import SBreadCrumb from '../../components/Breadcrumb';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../redux/categories/action';
import { accessCategories } from '../../const/access';

export default function PageCategories() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [access, setAccess] = useState({
    tambah: false,
    hapus: false,
    edit: false,
  });

  const checkAccess = () => {
    let { role } = localStorage.getItem('auth')
      ? JSON.parse(localStorage.getItem('auth'))
      : {};

    const access = { tambah: false, hapus: false, edit: false };
    Object.keys(accessCategories).forEach(function (key, index) {
      if (accessCategories[key].indexOf(role) >= 0) {
        access[key] = true;
      }
    });
    setAccess(access);
  };

  useEffect(() => {
    checkAccess();
  }, []);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <>
      <Container className='mt-3'>
        <SBreadCrumb textSecond='Categories' />

        {access.tambah && (
          <SButton action={() => navigate('/categories/create')}>
            Tambah
          </SButton>
        )}
        {/* <Table className='mt-3' striped bordered hover variant='dark'>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={data.length + 1} style={{ textAlign: 'center' }}>
                  <div className='flex item-center justify-center'>
                    <Spinner />
                  </div>
                </td>
              </tr>
            ) : (
              data.map((data, index) => (
                <tr key={index}>
                  <td>{(index += 1)}</td>
                  <td>{data.name}</td>
                  <td>Otto</td>
                </tr>
              ))
            )}
          </tbody>
        </Table> */}
      </Container>
    </>
  );
}
