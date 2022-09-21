import { Link, useOutletContext } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';


const AllAuthor = () => {
  const { baseUrl, authors } = useOutletContext();
  const {error, setError} = useState([])
  const { author } = useOutletContext();

  const deleteAuthor = (id) => {
    axios.delete(`${baseUrl}/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  };

  return (
    <table className="table table-striped table-hover table-bordered">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th className='text-end'>Descritption</th>
        </tr>
      </thead>
      <tbody>
        {author &&
          author.map((author) => {
            return (
              <tr key={author._id}>
                <td><Link to={`/authors/${author._id}`}>{author.title}</Link></td>
                <td>{author.author}</td>
                <td className='text-end'>
                  <Link
                    to={`/authors/${author._id}/edit`}
                    className="btn btn-warning btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <button onClick={() => deleteAuthor(author._id)} className="btn btn-danger btn-sm" >Delete</button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default AllAuthor;