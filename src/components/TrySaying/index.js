import "./index.css"

const trysayingList = [
    {
        imgUrl:"https://res.cloudinary.com/dwwunc51b/image/upload/v1712759947/images_27_xzapa1.jpg",
        title:"WhoWouldWin",
        link:"@greg",
        chats:"25.5m",
        likes:"6,949",
        tag1:"Batsman vs. Superman",
        tag2:"Knight vs. Samurai",
        tag3:"Lebron James vs. Michael Jordan"

    },
    {
        imgUrl:"https://res.cloudinary.com/dwwunc51b/image/upload/v1712759948/images_28_onrtup.jpg",
        title:"Elon Musk",
        link:"@elonwhisperer",
        chats:"34.9m",
        likes:"3,316",
        tag1:"Why did you buy twitter?",
        tag2:"What do you think about Jeff Bezos' Blue Origin?",
        tag3:"If you could time travel, when/where would you go?"

    },
    {
        imgUrl:"https://res.cloudinary.com/dwwunc51b/image/upload/v1712759947/images_29_edrdjr.jpg",
        title:"Alternate Timeline",
        link:"@irwan",
        chats:"40.0m",
        likes:"4,578",
        tag1:"What if I invented a portal gun?",
        tag2:"Access to my own personal time machine",
        tag3:"Make me the negotiator for the first alien encounter"

    },
    {
        imgUrl:"https://res.cloudinary.com/dwwunc51b/image/upload/v1712759947/images_30_oexpjb.jpg",
        title:"Debate Champion",
        link:"@AdeptusMechanicus",
        chats:"10.3m",
        likes:"3,524",
        tag1:"Star Wars is overrated",
        tag2:"Pepsi is  better than Coca-Cola",
        tag3:"Cats are better than dogs"

    },
    {
        imgUrl:"https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_9_ibawjj.jpg",
        title:"Character Assistant",
        link:"@landon",
        chats:"124.5m",
        likes:"60.8k",
        tag1:"What type of fish is Dory from Finding Nemo?",
        tag2:"Create an ad campaign for a new video game",
        tag3:"Decide between the Macbook Air and Macbook Pro"

    },
    {
        imgUrl:"https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_18_jochhj.jpg",
        title:"Are-you-feeling-okay",
        link:"@summeriscoming",
        chats:"24.1m",
        likes:"10.1k",
        tag1:"I had a hard time at work today",
        tag2:"How can I be more successful in my profession",
        tag3:"What is a good way to make a big change in life?"

    },
]

const TrySaying = () =>{
    return(
        <ul className="trysaying-container">
            {trysayingList.map(each =>(
                <li className="saying-card">
                    <div className="img-name">
                        <img src={each.imgUrl} className="saying-img" alt="img" />
                        <div className="profile-text">
                            <h3 className="saying-title">{each.title}</h3>
                            <div className="link-count">
                                <p className="dot">•</p>
                                <p className="link">{each.link} </p>
                                <p className="dot">•</p>
                                <p className="link">{each.chats} chats</p>
                                <p className="dot">•</p>
                                <p className="link">{each.likes} likes</p>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="tag-btn">{each.tag1}</button>
                    <button type="button" className="tag-btn">{each.tag1}</button>
                    <button type="button" className="tag-btn">{each.tag1}</button>
                </li>
            ))}
        </ul>
    )
}

export default TrySaying