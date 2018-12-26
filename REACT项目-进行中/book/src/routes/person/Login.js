/**
 * Created by WUWEI on 2018/11/20.
 */
import React from 'react';
import {connect} from 'react-redux';
import { Form, Icon, Input, Button, Checkbox,Modal } from 'antd';
import {Link} from 'react-router-dom';
import md5 from 'blueimp-md5';
import  {login} from '../../api/person';
import action from '../../store/actions/index';
const FormItem = Form.Item;

function loginFail(){
    const modal=Modal.error({
        title:'登陆失败',
        content:'请扫后重新尝试'
    });
    setTimeout(()=>{modal.destroy()},1000)
}
class Login extends React.Component{
     constructor(props,context){
         super(props,context);
     }
    handleSubmit=ev=>{
        ev.preventDefault();
        this.props.form.validateFields(async (err,values)=>{
            if(!err){
                //console.log(`Received values of form`, values);
                let {userName,userPass}=values;
                userPass=md5(userPass);
               let result=await login({
                    name:userName,
                    password:userPass
                });
                if(parseFloat(result.code) === 0){
                    this.props.queryBaseInfo();
                    this.props.history.go(-1);
                    return;
                }
                loginFail();
            }
        })
    };
     render(){
         const { getFieldDecorator } = this.props.form;
         return <div className="personLoginBox">
         <Form onSubmit={this.handleSubmit} className="login-form">
                 <FormItem>
                     {getFieldDecorator('userName', {
                         rules: [{ required: true, message: 'Please input your username!' }],
                     })(
                         <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                     )}
                 </FormItem>
                 <FormItem>
                     {getFieldDecorator('password', {
                         rules: [{ required: true, message: 'Please input your Password!' }],
                     })(
                         <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                     )}
                 </FormItem>
                 <FormItem>
                     <Button type="primary" htmlType="submit" className="login-form-button">
                         Log in
                     </Button>
                     Or <Link to="/person/register">register now!</Link>
                 </FormItem>
             </Form>
         </div>
     }
 }
 export default Form.create()(connect(null,action.person)(Login));