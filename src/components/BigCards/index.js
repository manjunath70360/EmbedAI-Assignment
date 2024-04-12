import "./index.css"

const BigCards = () =>{

    return(
        <div className="bigcards-container">
            <div className="big-text-con">
                <p className="big-para">What do you want to do?</p>
                <h3 className="big-head">Epic Challenges await</h3>
            </div>
            <div className="question-cards">
                <div className="q-card">
                   <div><div className="profile-name">
                        <img src="https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_9_ibawjj.jpg" className="big-profile-card" alt="img" />
                        <h3 className="q-name">Puzzle Prodigy</h3>
                    </div>
                    <p className="q-para">Greetings! I'm Puzzle Prodigy,ready to lead you through a maze of mind-boggling puzzles...</p>
                    </div>  <p className="replay">Replay...</p>
                </div>
                <div className="q-card">
                    <div><div className="profile-name">
                        <img src="https://res.cloudinary.com/dwwunc51b/image/upload/v1712811437/images_j1rlzy.jpg" className="big-profile-card" alt="img" />
                        <h3 className="q-name">Escape Room</h3>
                    </div>
                    <p className="q-para">Welcome to your next challenge. Can you escape in time?</p>
                   </div> <p className="replay">Replay...</p>
                </div>
            </div>
        </div>
    )
}

export default BigCards