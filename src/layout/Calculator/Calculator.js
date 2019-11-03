import React from 'react';
import Screen from './Screen/Screen';
import Keypad from './Keypad/Keypad';

class calculator extends React.Component{
    state = {
        equation: '',
        result: 0
    }

    render(){
        return(
            <main className="calculator">
                <Screen equation={this.state.equation} 
                result= {this.state.result}/>
                <Keypad/>
            </main>
        );
    }
}

export default calculator;