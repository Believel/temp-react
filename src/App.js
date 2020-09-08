import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import HookApi from './container/HookApi';
import Demo from "./container/demo/dayjs";
export default () => {
  return (
    <React.Fragment>
      <HashRouter>
        <Switch>
          <Route path="/a" component={HookApi} exact/>
          <Route path="/" component={Demo} exact/>
        </Switch>
      </HashRouter>
    </React.Fragment>
  )
}