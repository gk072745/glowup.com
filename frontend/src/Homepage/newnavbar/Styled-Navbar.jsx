import styled from "styled-components";

let Nav = styled.nav`
  position: sticky;
  top: 0px;z-index:1;
  #top {
    display: flex;
    align-items: center;
    padding: 17px 2.8vw;
    background-color: white;
    color: #000;
    border-bottom: 1px solid #dfdfdf;
    
    #logo a{
      transform: translateY(-2px);
    }
    div {
      border: 1px solid #999;
      flex-grow: 1;
      display: flex;
      margin: 0 0.5vw 0 1.1vw;
      padding: 10px 0.9vw;
      border-radius: 5px;
      position:relative;
      form {
        flex-grow: 1;
        margin: 0 10px;
        input {
          width: 100%;
          border: none;
          &:focus {
            outline: none;
          }
        }
      }
      article {
        width:99.6%;
        border: 1px solid rgb(204, 204, 204);
        border-top: none;
        background-color: #fff;
        position: absolute;
        top: 41px;
        left: 1px;
        width: 99.8%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        max-height: 300px;
        overflow-y: scroll;
        box-shadow: 1px 1px 6px 1px #b9b9b9;
        visibility: hidden;
        @media(max-width: 550px){
          grid-template-columns: 1fr
        }
      p {
          padding: 7px 14px;
          margin: 0 !important;display:block !important;
          svg {
            margin-right: 9px;
          }
          span{
            position: relative;
            top: -4px;
            font-size: 12px !important;
          }
          &:hover {
              background-color: #e4e5e7;
            }
        }
      }
    }
    #mobile{
    overflow:hidden;
    &:hover {
      overflow:visible;
    }
    div{
      position: absolute;background-color:#fff;
      border: 1px solid rgb(204, 204, 204);
      width:118%;padding-bottom:20px;
      top:180%;
      left:-40px;
      box-shadow: 1px 1px 6px 1px #b9b9b9;
      display:flex;
      flex-direction: column;
      
      img{
        height:45px;
        margin-top:16px;
        width:101%
      }
    }
  }
    p {
      margin: 0 0.7vw;
      font-size: 15px;
      position: relative;
      display: flex;
      align-items: center;
      cursor: pointer;
      &:hover {
        color: #f43397;
      }
      img {
        height: 23px;
        margin-right: 4px;
      }
    }
    #profile{
      overflow:hidden;
        &:hover {
          overflow:visible;
        }
        div{
      position: absolute;background-color:#fff;
      border: 1px solid rgb(204, 204, 204);
      width:218%;padding-bottom:20px;
      top:180%;
      left:-70px;
      box-shadow: 1px 1px 6px 1px #b9b9b9;
      display:flex;
      flex-direction: column;color:black !important;
      h2{
        font-size:20px;
      }
p{
  font-size:12px;margin:6px 0
}
button{
  background-color:#f43397;
  color:white;
  border:none;
  padding:10px 0;
  border-radius:6px;margin:10px 0;letter-spacing:2px;font-weight:500
}
    
        }
    }
    .line {
      color: #b9b9b9;
      transform: scaleY(2.5);
      margin: 0 4px;
    }
    #cart svg {
      margin-right: 14px;
      transform: scale(1.3);
    }
    #cart span {
      position: absolute;
      top: -17px;
      left: 5px;
      width: 27px;
      text-align: center;
      aspect-ratio: 1.3;
      font-size: 14px;
      color: #fff;
      background-color: #f43397;
      z-index: 1;
      border-radius: 50%;
      padding-top: 5px;
    }
  }
  #bottom {
      background-color: white;
      color: #000;
  

      ul {
      padding: 0px 2.7vw;
      border-bottom: 1px solid #dfdfdf;
      display: flex;
      align-items: center;
      list-style: none;
      justify-content:space-evenly;
        
      a{
        text-decoration: none;color:inherit;

      }
     li {
        flex-grow: 1;
        font-size: 15px;
        padding: 15px 2px;
        text-align: center;
        cursor:pointer;  
             
      }
    }
    article {
    border: 1px solid #dfdfdf;
    background-color: white;
    color: rgb(92, 92, 92);
    display: flex;
    margin: 0px 4.8vw;
    border-top:0;
    font-size: 18px;
    
    div {
      padding-bottom:3px;
      padding-right: 5.6vw;
      background-color: #fff;

      // flex-grow: 1;
      p {
        margin: 5px 8px 5px;
        font-size: 15px;
        cursor:pointer;font-weight:500 !important;
        &:hover {
            color:#000;
            transform: scale(1.02);
            transition:transform .25s ease-in-out;
        }
      }
      p:nth-of-type(1) {
        font-weight: bold;
        margin: 1px 5px 1px;
      }
    
      &:nth-of-type(odd) {
      background-color: rgb(249, 249, 249);
    }
  }
  }
 
`;


export { Nav };