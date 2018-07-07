import Hold from "./index";
import { reducer } from './reducers'; //import your reducer

let state;

const getState = () => state;

const dispatch = action => {
  state = reducer(action, state);
  console.log(state);
  if (Hold) {
    Hold();
  }
};

dispatch({});

const reducers = () => reducer;

reducers(); //getting the reducers

function Async(cb, request) {
  request(cb);
}

//helps to do async things
const thunk = function(cb, request, delay) {
  if (delay) {
    return setTimeout(() => {
      Async(cb, request);
    }, delay);
  }
  Async(cb, request);
};

export { getState, dispatch, thunk};
