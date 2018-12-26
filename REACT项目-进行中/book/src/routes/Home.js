/**
 * Created by WUWEI on 2018/11/13.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Switch,Route,Redirect} from 'react-router-dom';
import List from './course/List';
import Info from './course/Info';
import '../static/css/course.less';
 class Home extends React.Component{
     constructor(props){
         super(props);
     }
     render(){
         return <section className="courseBox">
            <Switch>
                <Route path="/course" exact component={List}/>
                <Route path="/course/info" component={Info}/>

            </Switch>
         </section>
     }
 }
 export default Home;