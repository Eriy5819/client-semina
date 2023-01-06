import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import React from 'react';
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function Home() {
  return <h1>Home</h1>;
}
function Categories() {
  const query = useQuery();
  console.log(query.get('page'));

  return (
    <>
      <h1>Categories</h1>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Categories</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <Link to={'/categories/348239482'}>Seminar</Link>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <Link to={'/categories/1313133'}>Musik</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

function CategoriesDetail() {
  let { id } = useParams();
  console.log('params >>');
  console.log(id);
  return <h1>Categories : {id}</h1>;
}
function About() {
  return <h1>About</h1>;
}
function Login() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Login</h1>
      <button onClick={() => navigate('/')}>Submit</button>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to={'categories'}>Categories</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to={'about'}>About</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to={'login'}>Login</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='categories' element={<Categories />} />
        <Route path='categories/:id' element={<CategoriesDetail />} />
        <Route path='about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
