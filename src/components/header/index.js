import React from "react";
import {Link} from 'react-router-dom';
import {HeadContainer} from './style'
export class Head extends React.Component{
    constructor(props){
        super(props);
        this.state={
            nav:[{
                title:'豆瓣'
                ,url:'/'
            },{
                title:'读书'
                ,url:'/'
            },{
                title:'电影'
                ,url:'/'
            },{
                title:'音乐'
                ,url:'/'
            },{
                title:'同城'
                ,url:'/'
            },{
                title:'小组'
                ,url:'/'
            },{
                title:'阅读'
                ,url:'/'
            },{
                title:'FM'
                ,url:'/'
            },,{
                title:'时间'
                ,url:'/'
            },,{
                title:'豆品'
                ,url:'/'
            },,{
                title:'更多'
                ,url:'/'
            }]
        }
    }
    render(){
        const nav = this.state.nav;
        return(
            <HeadContainer>
                <div className='global-nav-items'>
                    <ul>
                        {nav.map((item, index) => {
                            return(
                                <Link to={item.url}  key={index}>
                                <li className='global-nav-item'>{item.title}</li>
                                </Link>
                            )
                        })

                        }
                    </ul>
                </div>
                <div className='right'>
                <Link to='/hots'>
                    <div className='top-nav-doubanapp'>下载豆瓣客户端</div>
                </Link>
                <Link to='/hots'>
                    <div className='top-nav-info'>登录/注册</div>
                    </Link>
                </div>
            </HeadContainer>
        );
    }
}