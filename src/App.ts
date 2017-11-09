import React, { Component } from 'react'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Spin } from 'antd';
import { Provider, observer } from 'mobx-react'
import { createBrowserHistory } from 'history'
import stores from './app/generate/stores'
import AppState from './app/iam/stores/globalStores/AppState';
import axios from 'Axios';
import 'antd/dist/antd.less';

import asyncLocaleProvider from './util/asyncLocaleProvider'
import asyncRouter from './util/asyncRouter';
import './containers/asset/iconfont.css';
// import DevTools from 'mobx-react-devtools';

const Masters = asyncRouter(() => import('Masters'));

@observer
export default class App extends Component {
  componentWillMount() {
    this.handleAuth();
  }

  handleAuth = () => {
    let token = HAP.getAccessToken(window.location.hash);
    if (token) {
      HAP.setAccessToken(token, 60 * 60);
    }
    axios.get('/uaa/v1/users/querySelf').then(response => {
      const user = response;
      if (user.name) {
        AppState.setAuthenticated(true);
        if ("en_US" === user.language) {
          AppState.changeLanguageTo('en');
        } else {
          AppState.changeLanguageTo('zh');
        }
        AppState.setCurrentUser(user);
      }
    });

  };

  render() {
    const langauge = AppState.currentLanguage
    const IntlProviderAsync = asyncLocaleProvider(langauge, () => import(`./containers/locale/${langauge}`), () => import(`react-intl/locale-data/${langauge}`))
    return (
      AppState.isAuth ?
        <IntlProviderAsync>
          <Provider {...stores}>
            <div>
              {/* <DevTools /> */}
              <Router history={createBrowserHistory}>
                <Switch>
                  <Route path='/' component={Masters}/>
                </Switch>
              </Router>
            </div>
          </Provider>
        </IntlProviderAsync> : (<Spin
        style={{
          marginTop: 300,
          display: 'inherit',
          marginLeft: '50%',
          marginRight: 'auto',
        }}/>)
    )
  }
}
