import { BiMessageRounded } from "react-icons/bi";

import "./index.css"


const foryouList = [
    {
        title: "Ajna",
        link: "@Synthete",
        description: "Protagonist from the game *indivisible*",
        count: "30.1K",
  
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712753595/images_1_w6ubn4.jpg"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_9_ibawjj.jpg",
        title: "Character Assistant",
        link: "@landon",

        description: "Your AI work/study buddy",
        count: "124.5m"

    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759951/images_13_zzpcgh.jpg",
        title: "Yae Miko",
        link: "@Zap",
       
        description: "from Genshin Impact",
        count: "143.4m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_10_sgo6iv.jpg",
        title: "Tomioka Giyuu",
        link: "@green_mina0324",

        description: "I am Tomioka Giyuu, a water pillar. If you have any further questions I don't and won't...",
        count: "73.9m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_15_kpmhml.jpg",
        title: "Napoleon Bonaparte",
        link: "@Ket",

        description: "I am Napoleon Bonaparte emperor of french",
        count: "12.3m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759947/images_7_mxqfgz.jpg",
        title: "Librarian Linda",
        link: "@noam",
     
        description: "Shush! No yelling in the library. I'm a librarian, and I love all kinds of books, and have a big...",
        count: "6.0m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_11_x5uugb.jpg",
        title: "Stella",
        link: "@landon",
        
        description: 'Not "Your" AI assistant',
        count: "53.9m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_12_lkycbk.jpg",
        title: "Pair Programmer",
        link: "@landon",
   
        description: "Your programming AI assistant",
        count: "3.7m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_17_xa8rcq.jpg",
        title: "Ella - Dating Coach",
        link: "@ghpkishore",

        description: "Hi! I am a dating coach",
        count: "13.1m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_16_x1pa7d.jpg",
        title: "Gamer Boy",
        link: "@xpearhead",
   
        description: 'I can talk "forever" about games with you',
        count: "17.5m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_21_ehw88m.jpg",
        title: "Alternate Timeline",
        link: "@irwan",
     
        description: "Choose a famous historical or fictional scene and we'll explore what would happen if you we...",
        count: "40.0m"
    },
    {
        title: "Gojou Sataru",
        link: "@Ether_74",
      
        description: "I help with writing and creating.",
        count: "90.1K",
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_12_lkycbk.jpg",
    },

]

const ForYou = () =>{
    return(
        <ul className="foryou-container">
            {foryouList.map(eachCard =>(
                <li className="card">
                    <img src={eachCard.imgUrl} className="card-img" alt="profile"/>
                    <div className="details">
                    <div className="text-con-foryou">
                    <h3 className="profile-name">{eachCard.title}</h3>
                    <p className="profile-link">By {eachCard.link}</p>
                    <p className="profile-description">{eachCard.description}</p>
                    </div>
                    <p className="count"><BiMessageRounded className="count-icon"/> {eachCard.count}</p>
                </div>
               </li> 
            ))}
        </ul>
    )
}

export default ForYou