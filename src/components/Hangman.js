import React, {Component} from 'react';
import "./Hangman.css";

class Hangman extends Component {

    render() {
        return (
            <div className='Hangman'>
                <h1>Hangman</h1>                
                <p>guessedWord</p>
                <p>Letter button</p>
            </div>
        )
    }

}

export default Hangman;