import React, {Component} from 'react';
import "./Hangman.css";

class Hangman extends Component {

    constructor(props){
        super(props);
        this.state = { nWrong:0, guessed: new Set(), answer:"apple"};
        //this.handleGuess = this.handleGuess.bind(this);
    }

    /**
     guessedWord : return current state of word :
     ex : return " a p p _ _ " for "apple" (if a and p have been guessed)
    */
    guessedWord() {
        return this.state.answer
            .split("")
            .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"))
    }

    /**
     * generateButtons : return an array of letter rendered has buttons
     */
    generateButtons() {
        return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
            <button
                value={ltr}
                onClick={()=>{}}
                disabled={this.state.guessed.has(ltr)}
            >
                {ltr}
            </button>
        ))
    }

    render() {
        return (
            <div className='Hangman'>
                <h1>Hangman</h1>                
                <p className='Hangman-word'>{this.guessedWord()}</p>
                <p className='Hangman-btns'>{this.generateButtons()}</p>
            </div>
        )
    }

}

export default Hangman;