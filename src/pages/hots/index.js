import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actionCreators  from './../../store/actionCreator';
import {Button, Icon, Carousel, Rate} from 'antd'
import {Head} from './../../components/header';
import {Adversting} from './../../components/ad'
import {HotsContainer
        , NavSecondary
        , MovieWrapperContainer
        , ClassifyContainer} from './style'
class Hots extends Component{
    constructor(props){
        super(props);
        this.state= {
            nav_second:[{
                title:'影讯&购票'
                ,url:'/hots'
            },{
                title:'选电影'
                ,url:'/hots'
            },{
                title:'电视剧'
                ,url:'/hots'
            },{
                title:'排行榜'
                ,url:'/hots'
            },{
                title:'分类'
                ,url:'/hots'
            },{
                title:'影评'
                ,url:'/hots'
            },{
                title:'2018年度榜单'
                ,url:'/hots'
            },{
                title:'2018书影音报告'
                ,url:'/hots'
            }],
            classify_nav: ['热门','最新','豆瓣高分','冷门佳片','华语','欧美','韩国','日本'],
            classify_index: 0,
            currentPage: 1,
            currentPage_tag: 0
        }
    }
    render(){
        const ButtonGroup = Button.Group;        
        const totalCount = this.props.totalCount;
        const classify_index = this.state.classify_index;
        const tagMovies = this.props.tagMovies;
       return(
            <HotsContainer>
                <Head></Head>
                {/* <Example></Example> */}
                {/* <FriendStatus firend={friend}></FriendStatus> */}
                <div className='db-nav-movie'>
                    <div className='nav-wrap'>
                        <div className='nav-primary'>
                        <Link to='/hots'>
                            <div className='nav-logo'>
                                    {/* 豆瓣电影 */}
                            </div>
                        </Link>
                            <div className='nav-search'>
                                <form action='' method='get'>
                                        {/* <legend>搜索</legend> */}
                                    <div className='inp'>
                                      <input className='inp-query' name='search-text' 
                                            size='22' maxLength='60' 
                                            placeholder='搜索电影、电视剧、综艺、影人'
                                            autoComplete='off'></input>
                                    </div>
                                    <div className='inp-btn'>
                                        <input type='submit'></input>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <NavSecondary>
                       <div className='nav-items'>
                            <ul>
                                    {this.state.nav_second.map((item, index) => {
                                        return(
                                        <li key={index}>
                                            <Link to={item.url}>{item.title}</Link>
                                        </li>
                                        );
                                    })
                                    }                           
                                </ul>
                       </div>
                       <Link to='/hots' className='movieannual2018'></Link>
                    </NavSecondary>
                </div>
                <MovieWrapperContainer>
                    <div className='content'>
                        <div className='article'>
                            <div className='screening-hd'>
                                <div className='left'>
                                    <h2>
                                    正在热映
                                    <span>
                                        <a>全部被正在热映>></a>
                                    </span>
                                    <span>
                                        <a>即将上映>></a></span>
                                    </h2>
                                </div>
                                <div className='right'>
                                <div className='slide-tip'>{this.state.currentPage }/ {totalCount}</div>
                                    <div className='slide-control'>
                                    <ButtonGroup>
                                        <Button type="primary" size='small' shape='circle' onClick={this.prev.bind(this)}>
                                            <Icon type="left" />
                                        </Button>
                                        <Button type="primary" size='small' shape='circle' onClick={this.next.bind(this)}>
                                            <Icon type="right" />
                                        </Button>
                                        </ButtonGroup>
                                    </div>
                                </div>
                            </div>
                            <div className='screening-bg'>
                                    <Carousel beforeChange={(current)=>{
                                        this.getCurrentPage(current);
                                    }} autoplay  ref={el => (this.slider = el)}  >
                                    {this.props.hotsMovies.map((moviearr, moviearrIndex) => {
                                            return( 
                                        <div className='slide-box' key={moviearrIndex}> 
                                                                               <div className='slide-item' >                               
                                        {moviearr.map((item,index) => {
                                            return   <ul  key={index}>
                                                    <li className='poster'>
                                                        <Link to={item.alt}>
                                                        <img src={item.images.small} alt='商品图片'/>                                                        
                                                        </Link>                                                   
                                                    </li>
                                                    <li className='title'>
                                                        <Link to={item.alt}>
                                                        {item.title}                                                       
                                                        </Link>
                                                    </li>
                                                    <li className='rating'>
                                                         {item.rating.stars != 0 && <span className='ratebox'><Rate disabled allowHalf defaultValue={parseFloat(item.rating.stars)/10.00} /><span>{Number(item.rating.average).toFixed(1)}</span></span>}
                                                         {item.rating.stars == 0 && `暂无评分`}
                                                    </li>
                                                    <li className='ticket-btn'>
                                                    <Button type='primary'>选座购票</Button>
                                                    </li>
                                                </ul>
                                              })
                                        }  
                                             </div>   
                                               
                                             </div>
                                            )
                                          })
                                        }      
                                                                                     
                                    </Carousel>
                            </div>
                            <Adversting></Adversting>
                            
                            {/* 热门 分类 */}
                            <ClassifyContainer>
                                <div className='classify'>
                                    <div className='classify-hd'>
                                        <ul className='left'>
                                           <li><h2>最近热门电影</h2></li> 
                                            {this.state.classify_nav.map((item, index) => {
                                                return (
                                                    <li key={index} className={ classify_index === index?'active':'normal' }
                                                    onClick={this.handleClickTab.bind(this,index)}>
                                                    {item}</li>
                                                )
                                            })

                                            }
                                        </ul>
                                        <div className='more right'>
                                            <a href='#'>更多>></a>
                                        </div>
                                    </div>    
                                    <div className='classify-bd'>
                                        <Carousel dots beforeChange={(current)=>{
                                                this.getCurrentPage_tag(current)
                                        }} ref={el => (this.slidertag = el)}>
                                            {tagMovies.length> 0? tagMovies.map((movies,index_tag) => {
                                                return(
                                                    <div className='slide-box' key={index_tag}>
                                                <ul>
                                                    {movies.map((item, index) => {
                                                        return <li key={index}>
                                                        <div className='classify-movie-poster'>
                                                            <img src={item.images.small} alt={item.title}></img>
                                                        </div>
                                                        <div className='classify-movie-title-rate'>
                                                            <span className='classify-movie-title'>{item.title}&nbsp;</span>
                                                            <span className='classify-movie-rate'>{Number(item.rating.average).toFixed(1)}</span>
                                                        </div>
                                                    </li>
                                                    })}
                                                </ul>
                                            </div>
                                                )
                                            }):null}                                            
                                        </Carousel>
                                        <div className='slide-control'>
                                            <div className='dotscontrol'>
                                                <ButtonGroup>
                                                    <Button type="primary" size='small' shape='circle' onClick={this.tagPrev.bind(this)}>
                                                        <Icon type="left" />
                                                    </Button>
                                                    {tagMovies.map((item,tag_index)=> {                                                        
                                                        return <div   className={'normal' + ' '+(this.state.currentPage_tag==tag_index?'active':tag_index)}></div>
                                                    })}
                                                    
                                                    {/* <div className={this.state.currentPage_tag==1?'active':'normal'}></div> */}
                                                    <Button type="primary" size='small' shape='circle' onClick={this.tagNext.bind(this)}>
                                                        <Icon type="right" />
                                                    </Button>
                                                </ButtonGroup>
                                            </div>
                                        </div>
                                    </div>    
                                </div>
                            </ClassifyContainer>
                        </div>
                    </div>
                </MovieWrapperContainer>
            </HotsContainer>
        );
    }
    // 正在热播轮播
    next() {
        this.slider.slick.slickNext();
        this.setState({
            currentPage: this.state.currentPage++
        })
    }
    prev() {
        this.slider.slick.slickPrev();
        this.setState({
            currentPage: this.state.currentPage--
        })
    }
    getCurrentPage(current){
        this.setState({
            currentPage: current+1
        })
    }
    // 分类
    tagNext() {
        this.slidertag.slick.slickNext();
        this.setState({
            currentPage_tag: this.state.currentPage++
        })
    }
    tagPrev() {
        this.slidertag.slick.slickPrev();
        this.setState({
            currentPage_tag: this.state.currentPage--
        })
    }
    getCurrentPage_tag(current){
        this.setState({
            currentPage_tag: current
        })
    }
    // 电影分类查询 ，tab切换
    handleClickTab(currentTab){
        console.log(currentTab)
        this.setState({
            classify_index: currentTab
        })
        this.props.getTagMovies(this.state.classify_nav[currentTab]);
    }
    componentDidMount(){
        this.props.getHotsMovies();
        this.props.getTagMovies(this.state.classify_nav[this.state.classify_index]);
    }
}

const mapStateToProps = (state) => {
    return {
        totalCount: state.totalCount,
        hotsMovies:  state.hotsMovies,
        tagMovies: state.tagMovies
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        getHotsMovies(){    
            dispatch(actionCreators.GetHotsMovies())
        },
        getTagMovies(tag){
            dispatch(actionCreators.GetTagMovies(tag))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Hots)