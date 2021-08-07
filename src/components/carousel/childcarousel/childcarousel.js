import axios from 'axios';
import React, { Component } from 'react';
import './childcarousel.css';
import { withRouter } from 'react-router-dom';
import LoadingSpinner from '../../UI Elements/LoadingSpinner';

class ChildCarousel extends Component {
  state = {
    hover: false,
    users: '',
    genres: null,
    movies: null,
    loading: false

  }
  componentDidMount() {
    axios.get('http://localhost:5000/main', {
      headers: { authorization: "bearer " + this.props.token }
    }).then(async (response) => {
      await this.setState({ users: this.props.user, genres: response.data.genres, movies: response.data.movies, loading: true });
      console.log(this.state);
    }).catch((err) => console.log(err));
  }
  render() {
    let slider;
    if (!this.state.loading) {
      slider = (<div style={{ margin: 'auto', width: 'fit-content' }}><LoadingSpinner /></div>)
    } else {

      slider = (
        <div style={{ paddingBottom: '30px', marginTop: '40px' }} className="scroll ml-2 mt-0">
          {this.state.genres.map(gen => (
            <React.Fragment>
              <h3 className="text-danger mx-4 mt-4 p-lg-2" style={{ backgroundColor: 'black' }}>{gen}</h3>
              <div style={{ overflow: 'scroll hidden' }} className="scroll ml-4 mr-4" key={gen + ""}>
                <table className="mb-2">
                  <tr key={gen + ""}>
                    {
                      this.state.movies[this.state.genres.indexOf(gen)].map(con => (
                        <td style={{ paddingRight: '15px' }} key={con._id + "" + this.state.genres.indexOf(gen)} >
                          <div style={{ backgroundImage: `url(${con.poster})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', width: '180px', height: '260px' }} key={con._id + "" + this.state.genres.indexOf(gen)}
                            onMouseEnter={() => document.getElementById(con._id + "" + this.state.genres.indexOf(gen)).style.display = 'block'}
                            onMouseLeave={() => document.getElementById(con._id + "" + this.state.genres.indexOf(gen)).style.display = 'none'}>
                            <span key={con._id + "" + this.state.genres.indexOf(gen)} id={con._id + "" + this.state.genres.indexOf(gen)} onClick={() => this.props.history.push(`/main/${con._id}`)} className="desc">{con.title}</span>
                          </div>
                        </td>))}
                  </tr>
                </table>
              </div ></React.Fragment>))
          }</div>)
    }

    return (
      <React.Fragment>
        {slider}
      </React.Fragment>

    );
  }
}


export default withRouter(ChildCarousel);