import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import ImgCard from "./components/ImgCard";
import { Button } from "./components/StyledWidgets";

function App(props) {
  const [pic, setPic] = useState();
  const [date, setDate] = useState();
  const [title, setTitle] = useState();
  const [expla, setExpla] = useState();
  const [button, setButton] = useState();

  //axios function
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=RlVu0xWKQ2LGh5zKsgeSnpciQJvSxmA4e0OxOBqc"
      )
      .then(response => {
        //console.log(response)
        const imageNasa = response.data.hdurl;
        console.log("Nasa image", imageNasa);
        setPic(imageNasa);

        const dateNasa = response.data.date;
        console.log("Nasa date: ", dateNasa);
        setDate(dateNasa);

        const titleNasa = response.data.title;
        console.log("Nasa title: ", titleNasa);
        setTitle(titleNasa);

        const explanationNasa = response.data.explanation;
        console.log("Nasa explanation: ", explanationNasa);
        setExpla(explanationNasa);

        const buttonNasa = response.data.button;
        console.log("Nasa button: ", buttonNasa);
        setButton(buttonNasa);
      });
  });

  return (
    <div className="App">
      <div className="photoOfDay">
        <ImgCard imgURL={pic} imgTitle={title} explanation={expla} />
        <Button type="primary" Show more info />
      </div>
    </div>
  );
}

export default App;
