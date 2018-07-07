# State Mangement Makes easy for React Apps


![React -store](https://raw.githubusercontent.com/saigowthamr/React-Store/master/screenshot.gif)

### text component
```javascript
import React from "react";
import { getState } from "./store";

function Text(props) {
  return (
    <div>
      <h3>Component 2</h3>
      <h1 style={{color:'green'}} >{getState().num}</h1>
    </div>
  );
}

export default Text;
```
### index.js file

```javascript
import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import { subscribe } from './store';

subscribe(()=>render(
  <App />,
  document.getElementById("root")
))

```

### Dispatching actions

```javascript
import React from "react";

import {dispatch} from './store'

function Inc() {
    dispatch({
        type: 'INC'
    })
}

function Dec() {
    dispatch({
        type: 'DEC'
    })
}

const width = { width: '2rem' ,fontSize:'1.2rem'}

export default () => (
  <div>
    <button onClick={Inc} style={width} >+</button>
    <button onClick={Dec}  style={width} >-</button>
  </div>
);

```


### Handling async things
```javascript
import { dispatch, thunk } from "./store";
import axios from "axios";

export const users = () => thunk(
    function (res) {
        dispatch({
            type: "GET_USERS",
            users: res.data
        });
    }, (cb) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => cb(response))
            .catch(err => cb({ err:'Error occurred'}))
    },5000 //delay time
)
```