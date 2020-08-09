import React from 'react';
import { connect } from 'react-redux'


const Counter = (props) => {


    const increment = () => {
        props.dispatch({ type: "INCREMENT" })
    };

    const decrement = () => {
        props.dispatch({ type: "DECREMENT" })
    };

    const reset = () => {
        props.dispatch({ type: "RESET" })
    };




    return (<div>

        <h1>Counter</h1>
        <button onClick={() => increment()}>+</button>
        <button onClick={() => decrement()}>-</button>
        <span>{props.count}</span>
        <button onClick={() => reset()}>Reset</button>
    </div>);
}


const mapStateToProps = state => {
    return {
        count: state.count
    }
}




export default connect(mapStateToProps)(Counter);