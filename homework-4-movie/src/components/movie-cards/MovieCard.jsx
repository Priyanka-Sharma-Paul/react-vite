import React from "react";
import styles from "./MovieCard.module.css";

const MovieCard = ({ movies }) => {
  return (
    <div className={styles.movieContainer}>
      {movies.map((movie, index) => (
        <div key={index} className={styles.card}>
          <img
            src={movie.poster}
            alt={`${movie.title} poster`}
            className={styles.poster}
          />
          <div className={styles.details}>
            <h2 className={styles.title}>{movie.title}</h2>
            <p className={styles.meta}>
              {movie.year}, <span>{movie.director}</span>
            </p>
            <p className={styles.duration}>{movie.duration}</p>
            <p className={styles.genres}>{movie.genres.join(", ")}</p>
            <p className={styles.description}>{movie.description}</p>
            <div className={styles.actions}>
              {movie.actions.share && <button>🔗 Share</button>}
              {movie.actions.like && <button>❤️ Like</button>}
              {movie.actions.comment && <button>💬 Comment</button>}
            </div>
          </div>
          <div
            className={styles.background}
            style={{
              backgroundImage: `url(${movie.backgroundImage})`,
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
