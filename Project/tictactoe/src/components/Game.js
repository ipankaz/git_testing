import React from 'react'
import Board from './Board'

export default class Game extends React.Component{
    constructor(){
        super()
        this.state = {
            xIsNext: true,
            stepNumber : 0,
            history : [
                {squares : Array(9).fill(null)}
            ]
        }
    }

    somefunction = ()=>{
        return 5;
    }

    render(){
        const result = this.somefunction()
        return(
            <div className="game">
                <div className="game-board">
                <Board value={result} />
                </div>
            </div>
        )
    }
}