import { useEffect, useState } from 'react';
import axios from 'axios';
import { useOutletContext, useNavigate, useParams } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';


const EditAuthor = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { baseUrl } = useOutletContext();
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseUrl}/${id}`)
      .then((res) => {
        setAuthor(res.data);
        console.log(res.data)
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, [id, baseUrl]);

  const updateAuthor = (e, author) => {
    e.preventDefault();
    axios
      .put(`${baseUrl}/${id}`, author)
      .then(() => navigate('/authors'))
      .catch((err) => console.log(err));
  };

  return (
    author && <AuthorForm formText={'Edit author'} submitHandler={updateAuthor} initialAuthor={author} errors={[]} errorObject={{}}/>
  );
};

export default EditAuthor;