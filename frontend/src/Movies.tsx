import data from './MovieData.json';
import React from 'react';

const MovieData = data.MovieData;

function MovieList() {
  return (
    <React.Fragment>
      <div className="p-5">
        <div>
          <h3 className="text-center">Joel Hilton's Movie Collection</h3>
        </div>
        <br />
        <div>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Title</th>
                <th>Year</th>
                <th>Director</th>
                <th>Rating</th>
                <th>Category</th>
                <th>Edited</th>
              </tr>
            </thead>
            <tbody>
              {MovieData.map((m) => (
                <tr>
                  <td>{m.Title}</td>
                  <td>{m.Year}</td>
                  <td>{m.Director}</td>
                  <td>{m.Rating}</td>
                  <td>{m.Category}</td>
                  <td>{m.Edited}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MovieList;
