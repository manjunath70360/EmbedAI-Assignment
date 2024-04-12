import { IoReload } from "react-icons/io5";
import { BiSolidSend } from "react-icons/bi";

import "./index.css"

const chatProfileList = [
    {
      imgUrl:"https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_9_ibawjj.jpg",
      title:"Gojo Satoru",
      link:"@serafinya",
      id:"GojoSatoru"
      
  },
  {
      imgUrl:"https://res.cloudinary.com/dwwunc51b/image/upload/v1712759951/images_13_zzpcgh.jpg",
      title:"Creative Helper",
      link:"@Zuizlke",
      id:"CreativeHelper"
  
  },
  {
      imgUrl:"https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_10_sgo6iv.jpg",
      title:"Anirudh Viswanathan",
      link:"@green_mina0324",
      id:"Anirudh"
  },
  {
      imgUrl:"https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_15_kpmhml.jpg",
      title:"Arjuna",
      link:"@Ket",
     id:'Arjuna'
  },
  {
      imgUrl:"https://res.cloudinary.com/dwwunc51b/image/upload/v1712759947/images_7_mxqfgz.jpg",
      title:"HyperGlot",
      link:"@xpearhead",
     id:'HyperGlot'
  },
  ]

const ChatBox = (props) =>{
    const {activeChat} = props

    const chatProfile = chatProfileList[activeChat]

   
    return(
        <div className="chat-container">
            <div className="profile">
                <img src={chatProfile.imgUrl} className="profile-img" alt="profile"/>
                <div className="profile-text">
                    <h3 className="chat-name">{chatProfile.title}</h3>
                    <p className="chat-link">{chatProfile.link}</p>
                </div>
            </div>
            <div className="chat-content">
                <img src={chatProfile.imgUrl} className="chat-img" alt="img" />
                <h3 className="chat-name">{chatProfile.title}</h3>
                <p className="chat-para">Willkommen, blenvenue, welcome - I'm {chatProfile.title}, and I'm fluent in many languages, and will help you practice the one(s) you're learning. I can also translate anything you don't understand.</p>
                <p className="chat-link">By {chatProfile.link}</p>

                <div className="chats-container">
                    <div className="chat-from">
                        <img src={chatProfile.imgUrl} className="chats-img" alt="img"/>
                        <div className="chats-text">
                            <div className="title-ai">
                                <h3 className="chats-name">{chatProfile.title}</h3>
                                <p className="chats-company">c.ai</p>
                            </div>
                            <p className="chats">Willkommen, blenvenue, welcome - I'm {chatProfile.title}, and I'm fluent in many languages, and will help you practice the one(s) you're learning. I can also translate anything you don't understand.</p>
                        </div>
                    </div>

                    <div className="chat-you">
                        <div className="chats-text">
                            <div className="title-ai">
                                <h3 className="chats-name">Manjunath</h3>
                                
                            </div>
                            <p className="chats">hello</p>
                        </div>
                        <img src="https://res.cloudinary.com/dwwunc51b/image/upload/v1712908691/profile_pic_orolkr.png" className="chats-img" alt="img"/>
                    </div>

                    <div className="chat-from">
                        <img src={chatProfile.imgUrl} className="chats-img" alt="img"/>
                        <div className="chats-text">
                            <div className="title-ai">
                                <h3 className="chats-name">{chatProfile.title}</h3>
                                <p className="chats-company">c.ai</p>
                            </div>
                            <p className="chats">Hallo! Hast du etwas zu ubersetzen order zu fragen?</p>
                        </div>
                    </div>

                    <div className="chat-from">
                        <img src={chatProfile.imgUrl} className="chats-img" alt="img"/>
                        <div className="chats-text">
                            <div className="title-ai">
                                <h3 className="chats-name">{chatProfile.title}</h3>
                                <p className="chats-company">c.ai</p>
                            </div>
                            <p className="chats">Welche Sprache lernst du denn gerade?</p>
                            <IoReload size={13}/>
                        </div>
                    </div>
                    <div className="input-bar">
                        <input type="text" className="input" placeholder={`Message ${chatProfile.title}...`} />
                        <button type="button" className="send-btn"><BiSolidSend size={18}/></button>
                    </div>
                <p className="p">Remember: Everything Characters say is made</p>
                </div>
            </div>

        </div>
    )
}

export default ChatBox