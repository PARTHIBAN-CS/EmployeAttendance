import Routes from './router'
import {BrowserRouter as HashRouter, Switch ,Route } from 'react-router-dom';

import './App.css';

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

const initialUserState = {
  firstname:"",
  lastname:"",
  gender:"",
  phoneno:"",
  mail:"",
  password:"",
}

const userReducer = (state=initialUserState,action: { type: string; state: {rollno: any; firstname: any; lastname: any;gender: any; phoneno: any; mail: any; password: any }; })=>{


  // if(action.type==="SET_NAME"){
  //   return {...state,firstName:"karan",lastName:"c",rollNo:"19",gender:"Male",phoneNo:"8012261027"}
  // }
      
  
  if(action.type==="SET_LASTNAME"){

    
    return{state,rollno:action.state.rollno,firstname:action.state.firstname,lastname:action.state.lastname,gender:action.state.gender,phoneno:action.state.phoneno,mail:action.state.mail,password:action.state.password,}
  }
  //   return {state, user: action.state}
  // }

  return state
}

const reducers = combineReducers({
  user:userReducer
})

const store = createStore(reducers)


store.subscribe(()=>{
  console.log(store.getState(),"$$$$");
})

function App() {
  return (
    <div>
      <HashRouter>
      <div className="App">
      <Provider store={store}>
        <Switch>
          {
            Routes.map((item, index) => {
              return <Route key={'route_' + index}
              path={item.path}
              component={item.component}
              exact={item.exact || false}
              />
            })
          }
        </Switch>
        </Provider>
      </div>
      </HashRouter>
    </div>
  );
}
export default App;