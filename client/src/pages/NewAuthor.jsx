import { useState } from 'react';
import axios from 'axios';
import { useOutletContext, useNavigate } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';

const NewAuthor = () => {
  const navigate = useNavigate();
  const { baseUrl } = useOutletContext();
  const [errors, setErrors] = useState([]);
  const [errorObject, setErrorObject] = useState({})

  const initialAuthor = {
    title: '',
    writer: '',
    description: '',
  };

  const insertAuthor = (e, author) => {
    e.preventDefault();
    axios
      .post(baseUrl, author)
      .then(() => {
        setErrors([]);
        navigate('/authors');
      })
      .catch((err) => {
        console.log(err);
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        const errorObj = {}
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        for (const key in errorResponse) {
          errorObj[key] = errorResponse[key].message
        }
        setErrorObject(errorObj);
        setErrors(errorArr);
      });
  };

  return (
    <AuthorForm
      formText={'Add Author'}
      submitHandler={insertAuthor}
      initialAuthor={initialAuthor}
      errors={errors}
      errorObject={errorObject}
    />
  );
};

export default NewAuthor;