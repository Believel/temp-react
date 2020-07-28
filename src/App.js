import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import HookApi from './container/HookApi'
import Demo from './container/Demo'
import Interview from './container/Interview'
import Test from './container/Test'
import Sort from "./container/Sort"

import './App.css';
export default () => {
  return (
    <React.Fragment>
      <HashRouter>
        <Switch>
          <Route path="/" component={HookApi} exact/>
          <Route path="/demo" component={Demo}/>
          <Route path="/interview" component={Interview}/>
          <Route path="/test" component={Test}/>
          <Route path="/sort" component={Sort}/>
        </Switch>
      </HashRouter>
    </React.Fragment>
  )
}