import React, {Component} from 'react';
import "./Hangman.css";

import img0 from "../0.jpg";
import img1 from "../1.jpg";
import img2 from "../2.jpg";
import img3 from "../3.jpg";
import img4 from "../4.jpg";
import img5 from "../5.jpg";
import img6 from "../6.jpg";

class Hangman extends Component {

    static defaultProps = {
        maxWrong: 6,
        images: [img0, img1, img2, img3, img4, img5, img6]
    };

    constructor(props){
        super(props);
        this.state = { nWrong:0, guessed: new Set(), answer:"apple"};
        this.handleGuess = this.handleGuess.bind(this);
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
     * HandleGuess: handle a guessed letter:
     * - add to guessed letters
     * - if not in answer, increase number-wrong guesses
     */
    handleGuess(e){
        let ltr = e.target.value;
        this.setState(st => ({
            guessed: st.guessed.add(ltr),
            nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
        }));
    }

    /**
     * generateButtons : return an array of letter rendered has buttons
     */
    generateButtons() {
        return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
            <button
                key={ltr}
                value={ltr}
                onClick={this.handleGuess}
                disabled={this.state.guessed.has(ltr)}
            >
                {ltr}
            </button>
        ))
    }

    render() {
        let gameOver = this.state.wrong >= this.props.maxWrong;
        return (
            <div className='Hangman'>
                <h1>Hangman</h1>
                <img src={this.props.images[this.state.nWrong]} />
                <p>Guessed wrong : {this.state.nWrong}</p>               
                <p className='Hangman-word'>{!gameOver ? this.guessedWord() : this.state.answer}</p>
                <p className='Hangman-btns'>
                    {!gameOver 
                    ? this.generateButtons() 
                    : `You lose !`}
                </p>
            </div>
        )
    }

}

export default Hangman;