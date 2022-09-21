import './vapor.css';
import { Navigate, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Authors from './components/Author';
import AllAuthors from './pages/AllAuthor';
import ShowAuthor from './pages/ShowAuthor';
import NewAuthor from './pages/NewAuthor';
import EditAuthor from './pages/EditAuthor';

const App = () => {
  return (
    <div>
      <Nav />
      <div className="container">
        <Routes>
          <Route path={'/'} element={<Navigate to="/authors" />} />
          <Route path={'/authors'} element={<Authors />}>
            <Route index element={<AllAuthors />} />
            <Route path=":id" element={<ShowAuthor />} />
            <Route path="new" element={<NewAuthor />} />
            <Route path=":id/edit" element={<EditAuthor />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;