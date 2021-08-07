import React, { useState } from "react";
import "./Grid.css";
import Card1 from "./Card1";
import Genres from "../../assets/Genre";
import Genres2 from "../../assets/Genre2";
import Genres3 from "../../assets/Genre3";


function Grid(props) {
  const [genre, setgenre] = useState([]);
  const changehandler = async gen => {
    let g = genre;
    var genIndex = genre.indexOf(gen);
    if (genIndex === -1) {
      g.push(gen);
      await setgenre(g);
      props.setGenre(g);
    }
    else {
      g.splice(genIndex, 1);
      await setgenre(g);
      props.setGenre(g);
    }

  }
  return (
    <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-8">{Genres.map((props) => <Card1 id={props.id} key={props.id} title={props.title} changehandler={changehandler} />)}</div>
      <div className="col-lg-4 col-md-6 col-sm-8">{Genres2.map((props) => <Card1 id={props.id} key={props.id} title={props.title} changehandler={changehandler} />)}</div>
      <div className="col-lg-4 col-md-6 col-sm-8">{Genres3.map((props) => <Card1 id={props.id} key={props.id} title={props.title} changehandler={changehandler} />)}</div>
    </div>
  );
}

export default Grid;
