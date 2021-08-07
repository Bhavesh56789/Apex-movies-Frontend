import React, { useState } from "react";
import axios from 'axios';
import "./choice.css";
import Grid from "../../../components/userdata/Grid";
import Language from "../../../components/userdata/Dropdown";
// import { Redirect } from "react-router";

export default function Choice(props) {
  const [language, setLanguage] = useState([]);
  const [Genre, setGenre] = useState([]);
  // console.log(props)
  const change = async gen => {
    await setGenre(gen);
    // console.log(Genre);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    const email = props.location.state.email;
    const data = {
      language: language,
      genres: Genre,
      email: email
    }
    // console.log(props);
    axios.post('http://localhost:5000/sn/choice', data)
      .then(response => {
        // this.setState({ loading: false });
        // <Redirect from="/sn/choice" to='/ln' />
        props.history.push('/ln');
        // console.log(response);
      })
      .catch(error => {
        // this.setState({ loading: false });
        console.log(error, error.message);
      });
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="App1">
        <div className="Languages">
          <h1>Which Languages do you prefer to watch shows and movies in?</h1>
          <Language setLanguage={setLanguage} />
        </div>
        <hr></hr>
        <h1> Which Genres do you like to watch shows and movies in?</h1>
        <h3>Atleast select 3.</h3>

        <Grid setGenre={async (g) => await change(g)} />
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
}
