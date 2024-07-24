import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { BiPlay } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai"

const apikey = "api_key=51d106c88251f7e5f7eb5e564676ae33"
const apiurl = "https://api.themoviedb.org/3/movie"
const genreurl = "https://api.themoviedb.org/3/genre/movie/list"
const tvurl = "https://api.themoviedb.org/3/discover/tv"
const upcoming = "upcoming"
const toprated = "top_rated";
const popular = "popular"
const imgurl = "https://image.tmdb.org/t/p/original"
/** ************ */
const Card = ({ img }) => {
  return <img className="card" src={img} alt="cover" />;
};

const Row = ({
  title,
  arr = [

  ],
}) => {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div>
        {
          arr.map((item, index) => {
            return (
              <Card key={index} img={`${imgurl}/${item.poster_path}`} />
            )
          })
        }
      </div>
    </div>
  );
};

const Home = () => {
  const [popularMovies, setpopularMovies] = useState([])
  const [tv, settv] = useState([])
  const [upcomingMovies, setupcomingMovies] = useState([])
  const [topratedMovies, settopratedMovies] = useState([])
  const [genre, setgenre] = useState([])

  useEffect(() => {
    const fetchpopular = async () => {
      const { data: { results } } = await axios.get(`${apiurl}/${popular}?${apikey}&page=5`)
      setpopularMovies(results)
    }
    fetchpopular();

    /** Tv */

    const fetchtv = async () => {
      const { data: { results } } = await axios.get(`${tvurl}?${apikey}`)
      settv(results)
    }
    fetchtv();
    /**Upcoming */
    const fetchupcoming = async () => {
      const { data: { results } } = await axios.get(`${apiurl}/${upcoming}?${apikey}`)
      setupcomingMovies(results)
    }
    fetchupcoming();

    /**Top rated */
    const fetchrated = async () => {
      const { data: { results } } = await axios.get(`${apiurl}/${toprated}?${apikey}`)
      settopratedMovies(results)
    }
    fetchrated();

    /** Gener */
    const fetchgenre = async () => {
      // https://api.themoviedb.org/3/genre/movie/list?api_key=51d106c88251f7e5f7eb5e564676ae33
      const { data: { genres } } = await axios.get(`${genreurl}?${apikey}`)
      setgenre(genres)
    }
    fetchgenre();

  }, [])



  return (
    <section className="home">
      <div className="banner" style={{ backgroundImage: popularMovies[6] ? `url(${`${imgurl}/${popularMovies[6].poster_path}`})` : "none()" }}>

        {popularMovies[0] && <h1>{popularMovies[6].original_title}</h1>}
        {popularMovies[0] && <p>{popularMovies[6].overview}</p>}

        <div>
          <button><BiPlay />Play</button>
          <button>My List<AiOutlinePlus /></button>

        </div>
      </div>

      <Row title={"Popular Movies"} arr={popularMovies} />
      <Row title={"Top Rated"} arr={topratedMovies} />
      <Row title={"Tv"} arr={tv} />
      <Row title={"Upcoming Movies"} arr={upcomingMovies} />

      <div className="genreList">
        {genre.map((item) => {
          return (<Link key={item.id} to={`/genre/${item.id}`}>{item.name}</Link>)

        })}
      </div>
    </section>
  );
};

export default Home;
