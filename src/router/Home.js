import React from "react";
import axios from "axios";
import Movie from "../components/Movie";




class Home extends React.Component{
  state={
    loading:true
  }
  getMovies=async()=>{
    const Movies = await axios.get('https://yts-proxy.nomadcoders1.now.sh/list_movies.json')
    const {data:{data:{movies}}}=Movies
    this.setState({movies,loading:false})
  }
  componentDidMount(){ 
      this.getMovies();
  }
  render(){
    const {loading,movies}=this.state
    return (
      <section>
        {loading? (
          <div className="Text">
            <h2 className="Text__loading">Loading ... </h2>
          </div>)
          : movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
      </section>
    );
  }
}
export default Home;