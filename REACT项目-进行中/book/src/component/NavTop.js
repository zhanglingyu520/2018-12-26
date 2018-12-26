/**
 * Created by WUWEI on 2018/11/13.
 */
import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Icon} from 'antd';

import Transition from 'react-transition-group/Transition';
const duration = 300;
const defaultStyle = {
    transition: `opacity ${duration}ms`,
    opacity: 0,
};
const transitionStyles = {
    entering: { opacity: 0},
    entered:  { opacity: 1},
};

class NavTop extends React.Component{
     constructor(props,context){
         super(props,context);
         this.state={
           in:false
         };
     }
     render(){
         return <header className="headerNavBox">
             {/*首页的导航*/}
             <div className="homeBox">
                 <div className="baseBox">
                     <h1 className="logo">珠峰培训</h1>
                     <Icon className="icon" type="bars" onClick={ev=>{
                         this.setState({in:!this.state.in});
                     }}/>
                 </div>
                 <Transition in={this.state.in} timeout={0}>
                     {state=>{
                         return <ul className="filterBox" style={{
                             ...defaultStyle,
                             ...transitionStyles[state],
                             display:this.state.in?'block':'none'
                         }}>
                             <li>全部课程</li>
                             <li>REACT课程</li>
                             <li>VUE课程</li>
                             <li>小程序课程</li>
                         </ul>
                     }}

                 </Transition>

             </div>

         </header>;
     }
 }
 export default withRouter(connect()(NavTop));