import React from 'react';
import { getState, dispatch} from './store'


class Todo extends React.Component {

    OnAddHandler = () => {
        if (this.input.value)
            dispatch({
                type: 'ADD_TODO',
                text: this.input.value
            })
        this.input.value = ''
    }

    componentDidMount() {

       }

    componentWillMount() {

    }

    render() {
        return (
            <div>
                <input placeholder="Some Text" ref={node => {
                    this.input = node
                }}
                />
                <button onClick={this.OnAddHandler} >Add Todo</button>
                <ul>
                    {getState().todos.map((tod) =>
                        <li key={Math.random()}>{tod}</li>
                    )}
                </ul>

            </div>
        )

    }
}


export default Todo;