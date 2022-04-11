import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaidIcon from '@mui/icons-material/Paid';
import BalanceIcon from '@mui/icons-material/Balance';

const Widget = ({ type }) => {
    let data;
    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                diff:"20%",
                value:10,
                icon: <PersonOutlineIcon style={{
                    color:"crimson",
                    backgroundColor:"rgba(255,0,0,0.2)"
                }} className='icon' />
            };
            break;

        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "Show all orders",
                diff:"15%",
                value:190,
                icon: <LocalShippingIcon style={{
                    color:"green",
                    backgroundColor:"rgba(0,128,0,0.2)"
                }} className='icon' />
            };
            break;

        case "earning":
            data = {
                title: "EARNING",
                isMoney: true,
                link: "View net earning",
                diff:"37%",
                value:16766,
                icon: <PaidIcon style={{
                    color:"goldenrod",
                    backgroundColor:"rgba(218,165,32,0.2)"
                }} className='icon' />
            };
            break;

        case "balance":
            data = {
                title: "BALANCE",
                isMoney: false,
                link: "Get details",
                diff:"57%",
                value:20,
                icon: <BalanceIcon style={{
                    color:"purple",
                    backgroundColor:"rgba(128,0,128,0.2)"
                }} className='icon' />
            };
            break;
        default:
            break;
    }

    return (
        <div className='widget' >
            <div className='left'>
                <span className='title' >{data.title}</span>
                <span className='counter' >{data.isMoney && "$"}{data.value}</span>
                <span className='link' >{data.link}</span>
            </div>
            <div className='right'>
                <div className='percentage positive ' >
                    <KeyboardArrowUpIcon />
                    {data.diff}
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget