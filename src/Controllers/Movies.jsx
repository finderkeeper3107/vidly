import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
class Movies extends Component {
  state = {
    movies: getMovies()
  };
  render() {
    const { length: moviesCount } = this.state.movies;
    if (moviesCount === 0) return <p> There are no movies in the database.</p>;

    return (
      <div>
        <p>showing {moviesCount} movies in the database.</p>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDeleteButton(movie)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  handleDeleteButton = movie => {
    const mvs = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: mvs });
  };
}

export default Movies;
