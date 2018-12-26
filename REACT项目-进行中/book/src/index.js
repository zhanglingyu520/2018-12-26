/**
 * Created by WUWEI on 2018/11/9.
 */
import React from 'react';
import {render} from 'react-dom';
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom';

/*REDUX STORE*/
import {Provider} from 'react-redux';
import store from './store/index';

/*ANTD*/
import {LocaleProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

/*IMPORT CSS*/
 import './static/css/reset.min.css';
import './static/css/common.less';

/*IMPORT COMPONENT*/
import NavTop from './component/NavTop';
import NavButtom from './component/NavBottom';
import Home from './routes/Home';
import Mycourse from './routes/Mycourse';
import Person from './routes/Person';
/*RENDER*/
render(<Provider store={store}>
     <HashRouter>
         <LocaleProvider locale={zh_CN}>
              <div>
                  {/*HHEADER*/}
                   <NavTop></NavTop>
                  {/*MAIN=>ROUTE*/}
                  <main className="container">
                      <Switch>
                         {/* <Route path="/" exact component={Home}></Route>*/}
                          <Route path="/course"  component={Home}></Route>
                          <Route path="/mycourse" component={Mycourse}></Route>
                          <Route path="/person" component={Person}></Route>
                          <Redirect  to="/course" />
                      </Switch>
                  </main>

                  {/*footer*/}
                  <NavButtom></NavButtom>
              </div>
         </LocaleProvider>
     </HashRouter>
</Provider>,document.querySelector('#root'));