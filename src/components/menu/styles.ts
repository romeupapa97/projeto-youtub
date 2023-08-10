import styled from "styled-components";
//import { NavLink } from "react-router-dom";

export const Container=styled.div<{openMenu:boolean}>`
 width:${({openMenu})=>openMenu? '250px': '100px'};
 height:calc(100vh - 55px);
 box-sizing: border-box;
 padding: 10px 10px 10px 10px;
 display: flex;
 align-items: center;
 flex-direction: column;
 overflow-y: auto;
 position:sticky;
 top: 55px;
`;

export const MenuItem= styled.div<{openMenu:boolean}>`
 width: 98%;
 min-height:${({openMenu})=>openMenu? '45px': '70px'};;
 border-radius: 10px;
 cursor: pointer;
 padding: 2px 15px;
 box-sizing: border-box;
 display: flex;
 flex-direction: ${({openMenu})=>openMenu? 'row': 'column'};
 align-items: center;
 justify-content: ${({openMenu})=>openMenu? 'none': 'center'};
 span{
  font-weight: ${({openMenu})=>openMenu? '600px': '400px'};
  margin-left:${({openMenu})=>openMenu? '20px': 'none'};
  font-size:${({openMenu})=>openMenu? '16px': '12px'};
 }
  &:hover{
    background-color:#f2f2f2;
  }
`;

export const ButtonIcon=styled.img`
  width:25px;
`;

export const Divider = styled.hr`
  border-top: 1px solid #bbb;
  width: 150px;
`;

//export const Visível=styled.div<{openMenu:boolean}>`
//margin-left:${({openMenu})=>openMenu? 'none': 'none'};

//`;

//export const Invisível=styled.div <{openMenu:boolean}>`
//margin-left:${({openMenu})=>openMenu? '25px': 'none'};
//display:${({openMenu})=>openMenu? '25px': 'none'};
//border-top:${({openMenu})=>openMenu? '1px': 'solid #fff'};
//p{
//  margin-left:${({openMenu})=>openMenu? '20px': 'none'};
//}
//`;
//export const Link=styled(NavLink)`
 // text-decoration:none;
  //width: 90%;
  //color: ${({theme})=>theme.colors.primary};
 // &.active{
  //  span{
  //   font-weight:700;
  //  }
  //  div{
  //    background-color: ${({theme})=>theme.colors.bgColors};
 //   }
 // }

//`;