import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';

const NavBar = () => {
  return (
    <div className='navbar' >
        <div className="wrapper" >
            <div className='search' >
              <input placeholder="Search..."  type='text'  />
              <SearchIcon />
            </div>

            <div className='items' >
              <div className='item' >
                <LanguageIcon className='icon' />
                  <span>English</span>
              </div>
              
              <div className='item'>
                <SettingsBrightnessIcon className='icon' />
              </div>

              <div className='item'>
                <FullscreenIcon className='icon' />
              </div>

              <div className='item'>
                <NotificationsNoneIcon className='icon' />
                <div className='new-message' >
                  1
                </div>
              </div>

              <div className='item'>
                <ChatBubbleOutlineIcon className='icon' />
                <div className='new-message' >
                  15
                </div>
              </div>

              <div className='item'>
                <ListAltIcon className='icon' />
              </div>

              <div className='item'>
                <img src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/277588916_3188762228113720_8092166614349806916_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=e1Sey6FgQysAX9j0Aoc&_nc_ht=scontent.fsgn5-12.fna&oh=00_AT9MYzHTihniKYdEBQ5F88_96dphOYq4QZssTMQrWyMd7g&oe=62599079" alt="" className='avatar' />
              </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar