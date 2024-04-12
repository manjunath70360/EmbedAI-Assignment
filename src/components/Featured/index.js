import { BiMessageRounded } from "react-icons/bi";


import "./index.css"

const featuredList = [
    {
        imgUrl:"https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_9_ibawjj.jpg",
        title:"Character Assistant",
        link:"@landon",
        discription:"Your AI work/study buddy",
        count:"124.5m"
    },
    {
        imgUrl:"https://res.cloudinary.com/dwwunc51b/image/upload/v1712759951/images_13_zzpcgh.jpg",
        title:"Yae Miko",
        link:"@Zap",
        discription:"from Genshin Impact",
        count:"143.4m"
    },
    {
        imgUrl:"https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_10_sgo6iv.jpg",
        title:"Tomioka Giyuu",
        link:"@green_mina0324",
        discription:"I am Tomioka Giyuu, a water pillar. If you have any further questions I don't and won't...",
        count:"73.9m"
    },
    {
        imgUrl:"https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_15_kpmhml.jpg",
        title:"Napoleon Bonaparte",
        link:"@Ket",
        discription:"I am Napoleon Bonaparte emperor of french",
        count:"12.3m"
    },
    {
        imgUrl:"https://res.cloudinary.com/dwwunc51b/image/upload/v1712759947/images_7_mxqfgz.jpg",
        title:"Librarian Linda",
        link:"@noam",
        discription:"Shush! No yelling in the library. I'm a librarian, and I love all kinds of books, and have a big...",
        count:"6.0m"
    },
    {
        imgUrl:"https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_11_x5uugb.jpg",
        title:"Stella",
        link:"@landon",
        discription:'Not "Your" AI assistant',
        count:"53.9m"
    },
    {
        imgUrl:"https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_12_lkycbk.jpg",
        title:"Pair Programmer",
        link:"@landon",
        discription:"Your programming AI assistant",
        count:"3.7m"
    },
    {
        imgUrl:"https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_17_xa8rcq.jpg",
        title:"Ella - Dating Coach",
        link:"@ghpkishore",
        discription:"Hi! I am a dating coach",
        count:"13.1m"
    },
    {
        imgUrl:"https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_16_x1pa7d.jpg",
        title:"Gamer Boy",
        link:"@xpearhead",
        discription:'I can talk "forever" about games with you',
        count:"17.5m"
    },
    {
        imgUrl:"https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_21_ehw88m.jpg",
        title:"Alternate Timeline",
        link:"@irwan",
        discription:"Choose a famous historical or fictional scene and we'll explore what would happen if you we...",
        count:"40.0m"
    }
]

const Featured = ()=>{
    return(

        <ul className="featured-list">
            {featuredList.map(each =>(
                <li className="featured-card">
                    <img src={each.imgUrl} className="featured-img" alt="img" />
                    <div className="text-featured">
                       <div className="text-con-feature"> <h3 className="feature-title">{each.title}</h3>
                        <p className="feature-link">{each.link}</p>
                        <p className="feature-desc">{each.discription}</p>
                       </div>
                       <p className="feature-count"><BiMessageRounded className="msg-icon"/> {each.count}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Featured