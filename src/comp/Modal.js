import React from "react"

export default function Modal(props){

    console.log("You are in Console of Modal")

    const displayPropetry= props.modalView ? "screen_visible" : "screen_invisible" 
    
    return(
       <div className={displayPropetry}>
            <div className="">
            <h3>Quizzical</h3>
            <text>Add some description here</text>
            <button onClick={props.handleClickStartQuiz}>Start Quiz</button>
            </div>
        </div>
    )


} 