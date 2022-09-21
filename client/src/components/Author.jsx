import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Authors = () => {
  const baseUrl = 'http://localhost:8000/api/authors';
  const [ author, setAuthors] = useState([]);
  useEffect(() => {
    axios.get(baseUrl)
      .then(res => setAuthors(res.data))
      .catch(err => console.log(err));
  });

  return (
    <fieldset>
      <legend>Authors</legend>
      <Outlet context={{ author, setAuthors, baseUrl }} />
    </fieldset>
  )
}

export default Authors;