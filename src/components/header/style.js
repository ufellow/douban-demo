import styled from 'styled-components' 
export const HeadContainer = styled.div`
height: 28px;
background-color: #545652;
min-width: 950px;
display: flex;
flex-direction: row;
justify-content: space-between;
a{
    color: #d5d5d5;
}
a:hover{
    color: #fff;
}
.global-nav-items{
    height: 100%;
    ul{
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        li{
            width: 48px;
            text-align: center;
            line-height: 28px;
        }
    }
}
.right{
    display: flex;
    flex-direction: row;
    height: 100%;
    line-height:28px;
    .top-nav-info, .top-nav-doubanapp{
        margin-right: 28px;
    }
}
`;