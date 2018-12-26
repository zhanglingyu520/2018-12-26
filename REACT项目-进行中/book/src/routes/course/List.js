/**
 * Created by WUWEI on 2018/12/16.
 */
import React from 'react';
import {connect} from 'react-redux';
import { Carousel,Icon,Button} from 'antd';
import {Link} from 'react-router-dom';
import action from '../../store/actions/index';
class List extends React.Component{
     constructor(props,context){
         super(props,context);
     }
     async componentDidMount(){
         let {queryBanner,bannerData}=this.props;
         if(!bannerData || bannerData.length==0){
             await queryBanner();
         }

     }
     render(){
         let {bannerData}=this.props;
         return <div className="listBox">
             {/*轮播图*/}
             {bannerData&&bannerData.length!==0? <Carousel autoplay>
                 {bannerData.map((item,index)=>{
                     let {title,url}=item;
                     return <div key={index}>
                         <img src={url} alt={title}/>
                     </div>
                 })}
             </Carousel>:''}

              {/*数据列表*/}
             <div className="courseList">
                 <h2><Icon type="menu-fold"/>全部课程</h2>
                 <ul>
                     <li>
                         <Link to={{
                            pathname:'/course/info',
                             search:'?courseId=1'
                         }}>
                            <h3>REACT全栈开发课程第186课时</h3>
                            <div className="content">
                                <div className="pic">
                                    <img src="" alt=""/>
                                </div>
                                <div className="desc">
                                    <p>课程的描述</p>
                                    <p>时间：1小时</p>
                                </div>
                            </div>
                         </Link>
                     </li>

                     <li>
                         <Link to={{
                             pathname:'/course/info',
                             search:'?courseId=1'
                         }}>
                             <h3>REACT全栈开发课程第186课时</h3>
                             <div className="content">
                                 <div className="pic">
                                     <img src="" alt=""/>
                                 </div>
                                 <div className="desc">
                                     <p>课程的描述</p>
                                     <p>时间：1小时</p>
                                 </div>
                             </div>
                         </Link>
                     </li>
                 </ul>
                 <Button type='dashed'>加载更多数据</Button>
             </div>
         </div>
     }
 }
 export default connect(state=>({...state.course}),action.course)(List);