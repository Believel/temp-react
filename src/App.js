import React, {lazy} from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import HookApi from './container/HookApi'
import HeimdallForm from './container/HeimdallForm'
import RecoilDemo from "./container/RecoilDemo";
import Stat from './container/Stat';
import Cart from "./container/cart";
// 懒加载
// const Demo = lazy(() => import(/* webpackChunkName: "demo" */ "./container/demo/dayjs.jsx"))
import Demo from "./container/demo/dayjs.jsx";
export default () => {
  return (
    <React.Fragment>
      <HashRouter>
        <Switch>
          <Route path="/a" component={HookApi} exact/>
          <Route path="/" component={HeimdallForm} exact/>
          <Route path="/demo" component={Demo} exact/>
          <Route path="/recoil" component={RecoilDemo}  exact/>
          <Route path="/stat" component={Stat} exact />
          <Route path="/cart" component={Cart} exact />
        </Switch>
      </HashRouter>
    </React.Fragment>
  )
}