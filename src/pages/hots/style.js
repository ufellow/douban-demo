import styled from 'styled-components';
export const HotsContainer = styled.div`    
.db-nav-movie{
    position: relative;
    background-color: #f0f3f5;
    margin-bottom: 40px;
    .nav-wrap{
        border-color: #e3ebec;
        border-bottom: 1px solid #e5ebe4;
        .nav-primary{
            width: 1040px;
            margin: 0 auto;
            padding: 10px 0 5px;
            display: flex;
            flex-direction: row;
            align-items: center;
            .nav-logo{
                width: 145px;
                height: 56px;
                background: url(//img3.doubanio.com/dae/accounts/resources/0246c88/movie/assets/lg_movie_a12_2.png) no-repeat 0 12px;
                a{
                    color: #27a;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    line-height: 100em;
                }
            }
            .nav-search{
                flex: 1
                form{
                display:flex;
                    .inp{
                        width: 470px;
                        height: 34px;
                        .inp-query{
                            background: #fff;
                            width: 96%;
                            margin: 0;
                            text-align: left;
                            height: 30px;
                            padding-left: 10px;
                            border: none;
                            border-bottom: solid 1px #c5c5c5;
                            border-top-left-radius: 3px;
                            border-bottom-left-radius: 3px;
                        }     
                        .inp-query:focus{
                            border: none;
                        }           
                    }
                    .inp-btn{
                        width: 37px;
                        height: 34px;
                        margin-left: -10px;
                        input{
                            background: url(//img3.doubanio.com/dae/accounts/resources/0246c88/movie/assets/nav_mv_bg.png?s=1) no-repeat 0 -40px;
                            width: 100%;
                            height: 100%;
                            padding: 35px 0 0 0;
                            color: transparent;
                            cursor: pointer;
                            border: none;
                        }
                    }
                }
               
            }
        }
    }
}
`;
export const NavSecondary =  styled.div`    
    .nav-items{
        width: 1040px;
        margin: 0 auto;
        padding: 9px 0;
        ul{
            padding: 0;
            li{
                display: inline;
                margin-right: 25px;
                a{
                    color: #27a;
                }
                a:hover{
                    background: #27a;
                    color: #fff;
                }
            }
        }
    }
   .movieannual2018{
    position: absolute;
    width: 186px;
    height: 96px;
    top: 10px;
    left: 50%;
    margin-left: 200px;
    background: url(//img3.doubanio.com/dae/accounts/resources/0246c88/movie/assets/annual_2018.png) center/contain no-repeat;
   }
`;

export const MovieWrapperContainer = styled.div`
        width: 1040px;
        margin: 0 auto;
        .content{
            .article{
                width: 675px;
                .screening-hd{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    vertical-align: top;
                    border-bottom: solid 1px #c5c5c5;
                    margin-bottom: 18px;
                    .left{
                        span{
                            font-size:12px;
                            margin-left: 15px;
                            a{
                                color: #27a;
                            }
                            a:hover{
                                background: #27a;
                                color: #fff;
                            }                            
                        }
                    }
                    .right{
                        display: flex;
                        .slide-control{
                            button{
                                border-radius: 50%;
                                height: 18px;
                                width: 18px;
                                text-align: center;
                                line-height: 0px;
                                margin-right: 5px;
                                i{
                                    font-size: 12px;
                                }
                            }
                            margin: 0 0 0 15px;
                        }
                        .slide-tip{

                        }
                    }
                }
                .screening-bg{
                    text-align: center;
                    .ant-carousel .slick-slide {
                        text-align: center;
                        // height: 160px;
                        // line-height: 160px;
                        // background: #364d79;
                        overflow: hidden;
                      }
                      .slick-track{
                      transition: -webkit-transform 500s ease 0s;
                      }
                    .slide-box{
                        .slide-item{
                            display: flex;
                            justify-content: space-between;
                            ul{
                                width: 115px;
                                height: 270px;
                                margin-right: 25px;                                
                                .poster{
                                    width: 115px;
                                    height: 161px;
                                    overflow: hidden;
                                    margin-bottom: 14px;
                                    .detailBox{
                                        border: solid 1px #111;
                                        
                                    }
                                }
                                .poster img{
                                    width: 100%;
                                    height: auto;
                                }
                                .title{
                                    height: 22px;
                                    color: #000;
                                    // width: 96px;
                                    text-align: center;
                                    line-height: 22px;
                                    overflow: hidden;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                }
                                .rating{
                                    font-size: 8px;
                                    margin: 4px auto 2px;
                                    height: 19px;
                                    vertical-align: middile;
                                    text-align: center;
                                    margin-top: 0px;
                                    .ratebox{
                                        display: flex;
                                    }
                                    .ant-rate {
                                        height: 100%;
                                        color:#f99a06;
                                        font-size: 8px;
                                         width: 70px;
                                        margin-right: 0;
                                        li{
                                            margin: 0;
                                        }
                                    }
                                }
                                .ticket-btn{
                                    margin-top: 10px;
                                    width: 100%;
                                    button{
                                        margin: 0 auto;
                                        width: 90px; 
                                        height: 24px;
                                        border: none;
                                    }
                                }
                            }
                           
                        }
                    }
                }
            }
        }
`;

export const ClassifyContainer = styled.div`
        h2{
            margin: 0;
            font-size: 17px;
            color: #111;
        }
    .classify{
        .classify-hd{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            border-bottom: solid 1px #c5c5c5;
            padding: 10px 0;
            .left{
                display: flex;
                align-items: center;
                li{
                    margin-right: 20px;
                    color: #9B9B9B;
                }   
                .normal: hover{
                    background: #27a;
                    color: #fff;
                }            
                .active{
                    color: #111;
                    font-size: 14px;
                }
            }
            .more{
                color: #37a;
            }
        }
        .classify-bd{                       
            .slide-box{
                ul{
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    li{
                        margin-bottom: 10px;
                        .classify-movie-poster{
                            width: 115px;
                            height: 161px;
                            overflow: hidden;
                            // margin-bottom: 8px;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .classify-movie-title-rate{
                            margin: 5px 0 0;
                            height: 44px;
                            width: 115px;
                            overflow: hidden;
                            text-align: center;
                            .classify-movie-rate{
                                color:#f99a06;
                            }
                        }
                    }
                }
            }
            .slide-control{
                .dotscontrol{
                    // 宽度修改
                    width: 68px;
                    margin: 0 auto;
                    .ant-btn-group{
                        display: flex;
                        align-items: center;
                    }
                    button{
                        border-radius: 50%;
                        height: 18px;
                        width: 18px;
                        text-align: center;
                        line-height: 0px;
                        margin-right: 5px;
                        i{
                            font-size: 12px;
                        }
                    }
                    .normal, .active{
                        border-radius: 50%;
                        width: 6px;
                        height: 6px;
                        background: #D8D8D8
                        margin-right: 5px;
                        display: flex;
                    }
                    
                    .active{
                        background: #37a
                    }
                }
              }
        }       
    }       
`;