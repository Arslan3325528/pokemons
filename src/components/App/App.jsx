// https://pokeapi.co/
// https://pokeapi.co/api/v2/pokemon

import React, { Component } from "react";

import { PokemonForm } from '@/components/Pokemon/PokemonForm.jsx'; 
import { PokemonInfoAndErrorsStateMachine } from '@/components/Pokemon/PokemonInfoAndErrorsStateMachine.jsx'; 

import { ToastContainer } from 'react-toastify'; //! 01.Підлючення бібліотеки react-toastify
// https://www.npmjs.com/package/react-toasti
// https://fkhadra.github.io/react-toastify/introduction/

import css from "./App.module.css";


export class App extends Component {
  state = {
    pokemonName: "", //! ім'я покемона
  };

  submitForm = (pokemonName) => {
    // console.log("✅Дані з форми PokemonForm:", pokemonName);
    this.setState({
      pokemonName
    });
  };


  render() {
      const {
        pokemonName, //! 🐷 Ім'я покемона
      } = this.state;
  
      console.log("----------------------------------------------");
      console.log("✅🐷 Ім'я покемона:", pokemonName);
      console.log("----------------------------------------------");
    
      return (
        <div className={css.mainContainer} >
          {/* //! Форма для отримання ім'я покемона */}
          <PokemonForm onSubmit={this.submitForm} />

          {/* //! HTTP-запит + Розмітка + Обробка помилок + State Machine + Рефакторинг + React-skeleton (чистий код) */}
          <PokemonInfoAndErrorsStateMachine pokemonName={pokemonName} />
          
          {/* //! 01.Підлючення бібліотеки react-toastify */}
          <ToastContainer autoClose={2000} /> 
        </div>
      );
    };
};
