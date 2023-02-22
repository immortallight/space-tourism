import styled from "styled-components";
export const Headerstyle = styled.header`
padding: 25px;
padding-right: 0;
// position: absolute;
// width: 100%;
// height: 100%;
  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-content: center;
    
  }
  .hr {
    width: 26rem;
    height: 0;
    border-bottom: solid 1px rgba(255, 255, 255, 0.3);
    margin-block: auto;
    margin-left: 9rem;
    z-index: 10;
    position: absolute;
    top: 9%;
  }
  }
  .nav {
     background-color: rgba(255, 255, 255, 0.1);
     
      height: 60px;
      // margin-right: 100px;
      padding-top: 1.5rem;
      width: 51rem;
    ul {
      display: flex;
      justify-content: center;
      align-content: center;
      margin-right: 3rem;

    }

    li {
      list-style-type: none;
      margin-right: 50px;
    }
    a {
      text-decoration: none;
      color: #ffff;
      padding: 0 0 1rem 0;
    }
     a.active{
      border-bottom:  solid 3px #ffff;
    }
    a:hover{
      border-bottom:  solid 3px rgba(255, 255, 255, 0.5);
      
    }
   
  }
`;
