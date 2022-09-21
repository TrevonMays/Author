import { useState } from 'react';

const AuthorForm = (props) => {
  const { submitHandler, initialAuthor, formText, errors, errorObject } = props;
  const [formState, setFormState] = useState(initialAuthor);

  const changeHandler = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {errors &&
        errors.map((error, idx) => {
          return <p key={idx}>{error}</p>;
        })}
      <div className="card">
        <h5 className="card-header">{formText}</h5>
        <div className="card-body">
          <form onSubmit={(e) => submitHandler(e, formState)}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title:
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="form-control form-control-sm"
                value={formState.title}
                onChange={changeHandler}
              />
              {errorObject.title ? (
                <span className="form-text text-danger">
                  {errorObject.title}
                </span>
              ) : (
                ''
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="author" className="form-label">
                Author:
              </label>
              <input
                type="text"
                name="writer"
                id="writer"
                className="form-control form-control-sm"
                value={formState.writer}
                onChange={changeHandler}
              />
              {errorObject.author ? (
                <span className="form-text text-danger">
                  {errorObject.author}
                </span>
              ) : (
                ''
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description:
              </label>
              <textarea
                className="form-control"
                name="description"
                id="description"
                value={formState.description}
                onChange={changeHandler}
              ></textarea>
              {errorObject.description ? (
                <span className="form-text text-danger">
                  {errorObject.description}
                </span>
              ) : (
                ''
              )}
            </div>
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary btn-sm">{formText}</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AuthorForm;