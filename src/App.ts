import React, { Component } from 'react'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { createBrowserHistory } from 'history'
import 'antd/dist/antd.less';
import './containers/asset/iconfont.css';
// import DevTools from 'mobx-react-devtools';

const Name = asyncRouter(() => import('name'));

@observer
export default class App extends Component {
 
  render() {
    const langauge = AppState.currentLanguage
    return (
          <Provider {...stores}>
            <div>
              {/* <DevTools /> */}
              <Router history={createBrowserHistory}>
                <Switch>
                  <Route path='/' component={Name}/>
                </Switch>
              </Router>
            </div>
          </Provider>
    )
  }
}
