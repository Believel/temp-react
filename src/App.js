import React, {lazy} from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import HookApi from './container/HookApi'
import HeimdallForm from './container/HeimdallForm'
// 懒加载
const Demo = lazy(() => import(/* webpackChunkName: "demo" */ "./container/demo/dayjs.jsx"))
export default () => {
  return (
    <React.Fragment>
      <HashRouter>
        <Switch>
          <Route path="/a" component={HookApi} exact/>
          <Route path="/" component={HeimdallForm} exact/>
          <Route path="/demo" component={Demo} exact/>
        </Switch>
      </HashRouter>
    </React.Fragment>
  )
}