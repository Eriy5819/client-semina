import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import SButton from '../../components/Button';
import SBreadCrumb from '../../components/Breadcrumb';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../redux/categories/action';
import { accessCategories } from '../../const/access';
import { setNotif } from '../../redux/notif/actions';
import Table from '../../components/TableWithAction';
import SAlert from '../../components/Alert';

export default function PageCategories() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const notif = useSelector((state) => state.notif);
  const categories = useSelector((state) => state.categories);
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
  }, [dispatch]);

  const handleDelete = (id) => {
    //
  };

  return (
    <>
      <Container className='mt-3'>
        <SBreadCrumb textSecond='Categories' />

        {access.tambah && (
          <SButton
            className='mb-3'
            action={() => navigate('/categories/create')}
          >
            Tambah
          </SButton>
        )}

        {notif.status && (
          <SAlert type={notif.typeNotif} message={notif.message} />
        )}

        <Table
          status={categories.status}
          thead={['Nama', 'Aksi']}
          data={categories.data}
          tbody={['name']}
          editUrl={access.edit ? `/categories/edit` : null}
          deleteAction={access.hapus ? (id) => handleDelete(id) : null}
        />
      </Container>
    </>
  );
}
