import axios from 'axios';
import React, { Component } from 'react';
import './moviepage.css';
import { withRouter } from 'react-router-dom';

class Moviepage extends Component {
  state = {
    users: '',
    movie: null,
    loading: false

  }
  componentDidMount() {
    let id = this.props.match.params.id;
    axios.get('http://localhost:5000/main/' + id, {
      headers: { authorization: "bearer " + this.props.token }
    }).then(async (response) => {
      await this.setState({ users: this.props.user, movie: response.data.movie, loading: true });
      console.log(this.state);
    }).catch((err) => console.log(err));
  }
  handleSubmit = event => {
    event.preventDefault();
    let id = this.props.match.params.id;
    console.log(id);
    axios.post('http://localhost:5000/main/' + id, {}, {
      headers: { authorization: "bearer " + this.props.token }
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    let movie;
    if (!this.state.loading) {
      movie = (<h3>Loading...</h3>)
    } else {
      movie = this.state.movie;
      movie = (
        <div id="home" class="header-bg" style={{ backgroundImage: `url(${movie.poster})`, backgroundRepeat: 'no-repeat' }}>
          <div class="header-layer">
            <div class="header-top">
              <div class="container">


                <div class="clearfix"> </div>
                <div class="head-info">
                  <h1 id="Title">{movie.title}</h1>
                  <p id="avg_rating">IMDb 6.5</p>
                  <p id="runtime">124 min</p>
                  <p id="release-year">{movie.release_date}</p>

                  <div class="rate">
                    <input type="radio" id="star5" name="rate" value="5" />
                    <label for="star5" title="text"></label>
                    <input type="radio" id="star4" name="rate" value="4" />
                    <label for="star4" title="text"></label>
                    <input type="radio" id="star3" name="rate" value="3" />
                    <label for="star3" title="text"></label>
                    <input type="radio" id="star2" name="rate" value="2" />
                    <label for="star2" title="text"></label>
                    <input type="radio" id="star1" name="rate" value="1" />
                    <label for="star1" title="text"></label>
                  </div>
                  <p id="Overview">{movie.overview}</p>

                  <p id="starring">Starring&emsp;&emsp;&emsp;&emsp;Morgan Freeman</p>
                  <p id="Genre">Genres&emsp;&emsp;&emsp;&emsp;{movie.genres} </p>
                  <p id="Languages">Audio Languages&emsp;&emsp;&emsp;&emsp;               {movie.spoken_languages}</p>


                  <div class="botton" >
                    <button onClick={this.handleSubmit}>
                      Watch now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div style={{ paddingBottom: '30px' }} className="scroll ml-2 mt-3">
        {movie}
      </div>

    );
  }
}



export default withRouter(Moviepage);