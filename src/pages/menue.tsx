import React from 'react';
import { withStyles } from '@material-ui/core/styles';


import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Router from 'next/router';


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

function isSeverity(sev:string[]){

  return sev.find((item:any)=>+item.statusSeverity!==10 );;
}
function isNight(list:any){
  return list.find((item:any)=>item.name.toUpperCase() ==='NIGHT')
}
export  const CustomizedMenus=(props:any)=> {

  const {listItems = [], title=''} = props || {};

  return (
    <li>
      {title}
      <ul>
        { listItems && listItems.map((item:any)=>{
          const status = isSeverity(item.lineStatuses);
           return   <a onClick={()=>{
            Router.push({
              pathname: '/section/status',
              query: { status: status ?  status.reason : 'NON-DISRUPTED' }
          })
           }}><li>
           
             <span> {item.name || ''}</span>
            {status && <span> - DISRUPTION</span> }
            
            {isNight(item.serviceTypes) && <span> - NIGHT</span>}

            </li>
            </a>
        })}
      </ul>
    </li>

  );
}
