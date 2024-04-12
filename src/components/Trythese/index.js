import "./index.css"

const trytheseListHorizontal = [

    {
        imgUrl:"https://res.cloudinary.com/dwwunc51b/image/upload/v1712734725/images_krn8ki.jpg",
        title:'Practice a new language',
        discription:"with HyperGlot"
    },

    {
        imgUrl:"https://res.cloudinary.com/dwwunc51b/image/upload/v1712759948/images_3_ljgyfe.jpg",
        title:'Practice Interviewing',
        discription:"with interviewer"
    },
 
    {
        imgUrl:"https://res.cloudinary.com/dwwunc51b/image/upload/v1712759948/images_5_ypiy9h.jpg",
        title:'Brainstrom Ideas',
        discription:"with Brainstromer"
    },

    {
        imgUrl:"https://res.cloudinary.com/dwwunc51b/image/upload/v1712759947/images_7_mxqfgz.jpg",
        title:'Get book recommendations',
        discription:"with Librarian Linda"
    },
  
    
    
]

const trytheseListVertical = [

  
    {
        imgUrl:"https://res.cloudinary.com/dwwunc51b/image/upload/v1712811437/images_j1rlzy.jpg",
        title:'Plan a trip',
        discription:"with Trip Planner"
    },
   
    {
        imgUrl:"https://res.cloudinary.com/dwwunc51b/image/upload/v1712759948/images_4_pstvz5.jpg",
        title:'Write a story',
        discription:"with Creative Helper"
    },
  
    {
        imgUrl:"https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_14_t2mcww.jpg",
        title:'Play a game',
        discription:"with Text Adventure Game"
    },

    {
        imgUrl:"https://res.cloudinary.com/dwwunc51b/image/upload/v1712759947/images_8_y0zea5.jpg",
        title:'Help me make a decision',
        discription:"with DescisionHelper"
    },
    
    
]

const TryThese = () =>{
    return(
        <div className="trythese-container">
        <ul className="trythese-container-list">
            {trytheseListHorizontal.map(eachCard=>(
                <li className="cards-trythese">
                    <img src={eachCard.imgUrl} className="trythese-img" alt="img"/>
                    <div className="text-con-trythese">
                        <h3 className="title-trythese">{eachCard.title}</h3>
                        <p className="disc-trythese">{eachCard.discription}</p>
                    </div>
                </li>
            ))}
        </ul>
        <ul className="trythese-container-list">
            {trytheseListVertical.map(eachCard=>(
                <li className="cards-trythese">
                    <img src={eachCard.imgUrl} className="trythese-img" alt="img"/>
                    <div className="text-con-trythese">
                        <h3 className="title-trythese">{eachCard.title}</h3>
                        <p className="disc-trythese">{eachCard.discription}</p>
                    </div>
                </li>
            ))}
        </ul>
        </div>
    )
}

export default TryThese