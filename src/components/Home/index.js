import {Component} from 'react'

import ForYou from "../ForYou"
import TryThese from '../Trythese';
import Featured from "../Featured"
import Tabs from "../Tabs"
import TrySaying from "../TrySaying"
import ChatBox from '../ChatBox';
import CreateBox from "../CreateBox"
import BigCards from '../BigCards';


import { FaPlus } from "react-icons/fa6";
import { PiCompassFill } from "react-icons/pi";
import { HiPlusSm } from "react-icons/hi";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

import "./index.css"


const chatProfileList = [
  {
    imgUrl:"https://res.cloudinary.com/dwwunc51b/image/upload/v1712759951/images_13_zzpcgh.jpg",
    title:"Gojo Satoru",
    link:"@serafinya",
    id:0
    
},
{    imgUrl:"https://res.cloudinary.com/dwwunc51b/image/upload/v1712759948/images_4_pstvz5.jpg",
     title:"Creative Helper",
    link:"@Zuizlke",
    id:1

},
{
    imgUrl:"https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_10_sgo6iv.jpg",
    title:"Anirudh",
    link:"@green_mina0324",
    id:2
},
{
    imgUrl:"https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_15_kpmhml.jpg",
    title:"Arjuna",
    link:"@Ket",
   id:3
},
{
    imgUrl:"https://res.cloudinary.com/dwwunc51b/image/upload/v1712759947/images_7_mxqfgz.jpg",
    title:"HyperGlot",
    link:"@xpearhead",
   id:4
},
]

class Home extends Component{
  state = {activeChat:'', activeButton:'Discover', isSidebarActive:true}

  onClickCharacter = (char) =>{
    this.setState({activeChat:char,activeButton:'Chats'})
  }


  handleButtonClick = (button) => {
      this.setState({activeButton:button, activeChat:''});
    };

    onClickToggleSideBar = ()=>{
      this.setState(prevState =>({isSidebarActive:!prevState.isSidebarActive}))
    }

  renderContent = ()=> (
      <div className='sp'> 
           <p className='welcome'>Welcome back,</p>
          <div className='search-section'>
          <h2 className='user'>Manjunath</h2>
          <div className='search-container'>
            <IoSearchOutline />
            <input type='search' className='search-bar' placeholder='Search for Characters'/>
            </div>
          </div>
          <BigCards />
          <h3 className='side-header'>For you</h3>
          <ForYou />
          <h3 className='side-header'>Try these</h3>
          <TryThese />
          <h3 className='side-header'>Featured</h3>
          <Featured />
          <Tabs />
          <h3 className='side-header'>TrySaying</h3>
          <TrySaying />
          </div>
    )
  
 

renderSideBar = () =>{
  const {activeChat, activeButton} = this.state
  return(
   <div className='side-bar-container'>
          <div className='top'>
          <div className='title-con'>
          <h2 className='name'>character.ai</h2>
          <MdOutlineKeyboardDoubleArrowLeft onClick={this.onClickToggleSideBar} className='icon'/>
          </div>
          <button type='button' className='create' onClick={() => this.handleButtonClick('Create')}><FaPlus className='plus-icon icon'/> Create</button>
          <button type='button' onClick={() => this.handleButtonClick('Discover')} className={activeButton === 'Discover' ? 'active-discover' : 'nonactive-discover'}><PiCompassFill className='disc-icon icon' /> Discover</button>
          <h3 className='chat'>Chats</h3>

          {activeButton==="Create" && 
                <button type='button' className="create-btn">
                <div className='no-img'/>
                <h2 className='char-name'>New Character...</h2>
                </button>}

          <p className='today'>Today</p>
          <div className='character-list-containers'>
            {
              chatProfileList.map(each =>(
               
                <button type='button' key={each.id} className={activeChat === each.id ? 'active-character-name' : 'nonactive-character-name'} onClick={() => this.onClickCharacter(each.id)}>
                <img src={each.imgUrl} className='char-img' alt="char" />
                <h2 className='char-name'>{each.title}</h2>
                </button>
             
              ))
            }
          </div>

          </div>
          
         <div className='bottom'> 
         <hr/>
         <button type='button' className='try-btn'>Try c.ai<HiPlusSm size={16} color='orange' /></button>
          <div className='character-arrow'>
              <div className='character-name'>
              <img src="https://res.cloudinary.com/dwwunc51b/image/upload/v1712908691/profile_pic_orolkr.png" className='char-img' alt="char" />
              <h2 className='char-name'>Manjunath</h2>
              </div>
              <MdKeyboardArrowDown className='icon'/>
            </div>
        </div>
    </div>
  )
}

  render(){
    const {activeChat, activeButton, isSidebarActive} = this.state
    return(
      <div className='app-container'>
         
         {!isSidebarActive && <div className='side-ham-container'><GiHamburgerMenu size={20} onClick={this.onClickToggleSideBar} className='ham-icon'/>   </div>}
       
          {isSidebarActive && this.renderSideBar()}
          
        <div className={isSidebarActive ?  'content-container-ham-active':'content-container'}>
         {activeButton === 'Discover' && this.renderContent()}
         {activeButton === 'Create' && <CreateBox />}
         {activeButton === 'Chats' && <ChatBox activeChat={activeChat}/>}
        </div>
      </div>
    )
  }
}

export default Home