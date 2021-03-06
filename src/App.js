import React from "react";
import {BrowserRouter,Route } from "react-router-dom";
import "./App.css";
import Breed from './components/breed'
import BreedInfo from "./components/breed_list"
import HomePage from './components/homepage'


const App=()=>{
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path={"/"} component={HomePage}></Route>
        <Route exact path={"/breeds"} component={Breed}></Route>
        <Route exact path={`/breeds/breedinfo/:id`} component={BreedInfo}></Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
