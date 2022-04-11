import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';
const SideBar = () => {
    return (
        <div className='sidebar' >
            <div className='top' >
                <span className='logo' >admin</span>

            </div>

            <hr />

            <div className='center' >
                <ul>
                    <p className='title' >MAIN</p>
                    <li>
                        <DashboardIcon className='icon' />
                        <span>Dashboard</span>
                    </li>
                    <p className='title' >LISTS</p>
                    <li>
                        <SupervisedUserCircleIcon className='icon' />
                        <span>User</span>
                    </li>
                    <li>
                        <ProductionQuantityLimitsIcon className='icon' />
                        <span>Product</span>
                    </li>
                    <li>
                        <CreditCardIcon className='icon' />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className='icon' />
                        <span>Delivery</span>
                    </li>

                    <li>
                        <NotificationsNoneIcon className='icon' />
                        <span>Notifications</span>
                    </li>
                    <p className='title' >SERVICE</p>
                    <li>
                        <MonitorHeartIcon className='icon' />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyIcon className='icon' />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className='icon' />
                        <span>Settings</span>
                    </li>
                    <p className='title' >USER</p>
                    <li>
                        <ManageAccountsIcon className='icon' />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className='icon' />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>

            <div className='bottom' >
                <div className='colorOption' ></div>
                <div className='colorOption' ></div>
                <div className='colorOption' ></div>
            </div>
        </div>
    )
}

export default SideBar