import React from "react"

export default function Card(props){
    
    console.log(props.questionData)
    var q1= "A question is an utterance which typically functions as a request for information"
    var op1 = "Me"
    var op2 = "You"
    var op3 = "Why Not"
    var op4 = "What is it"
   try {
    if((props.questionData.question)!==undefined){
        var q1=decodeURIComponent(decodeURIComponent(props.questionData.question))
        console.log(`Here is ${props.questionData.question}`)
        var op1=decodeURIComponent(decodeURIComponent(props.questionData.correct_answer))
        var op2=decodeURIComponent(decodeURIComponent(props.questionData.incorrect_answers[0]))
        var op3=decodeURIComponent(decodeURIComponent(props.questionData.incorrect_answers[1]))
        var op4=decodeURIComponent(decodeURIComponent(props.questionData.incorrect_answers[2]))
    }
    
   } catch (error) {
    
   } 
  
  const styles = {
    backgroundColor: "red"
  }

   
    return(
       <div className="grid-container">
           <div className="item1">{q1}</div>
           <div style={styles}>{op1}</div>
           <div>{op2}</div>
           <div>{op3}</div>
           <div> {op4}</div>

          


       </div>
    ) 
}