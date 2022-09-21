import { useOutletContext, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ShowAuthor = () => {
  const { id } = useParams();
  const { baseUrl } = useOutletContext();
  const [author, setauthor] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseUrl}/${id}`)
      .then((res) => setauthor(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="card">
      <h5 className="card-header">author Details</h5>
      {author && (
        <div className="card-body">
          <h5 className="card-title">Title: {author.title}</h5>
          <h6>Author: {author.writer}</h6>
          <p>Description: {author.description}</p>
        </div>
      )}
    </div>
  );
};

export default ShowAuthor;