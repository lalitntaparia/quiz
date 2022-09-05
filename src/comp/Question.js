import React from "react"
import { nanoid } from 'nanoid'

export default function Question(props){

const displayPropetry= props.questionView ? "screen_visible" : "screen_invisible" 

  function handleClickStartQuiz(e){
      
      
    }

  console.log(`You are in Console of Question  ${props.questionData[0].question}`)
  const styles = {
    backgroundColor: "red"
  }
  
  const questionArray= props.questionData
 
  const qlist= questionArray.map((item,index)=>
  
                {

                var q1 =decodeURIComponent(decodeURIComponent(item.question))

                
                var op1 =decodeURIComponent(decodeURIComponent(item.incorrect_answers[0]))
                var op2= decodeURIComponent(decodeURIComponent(item.incorrect_answers[1]))
                var op3= decodeURIComponent(decodeURIComponent(item.incorrect_answers[2]))
                var op4= decodeURIComponent(decodeURIComponent(item.correct_answer))
                
                // Randomize option in the display
                var arr =[op1,op2,op3,op4]
                function shuffleArray(array) {
                  for (var i = array.length - 1; i > 0; i--) {
                  
                      // Generate random number
                      var j = Math.floor(Math.random() * (i + 1));
                                  
                      var temp = array[i];
                      array[i] = array[j];
                      array[j] = temp;
                  }
                      
                  return array;
              }

              const newArray=shuffleArray(arr)

              
            // create dynamic div for html
              const options= newArray.map(item=>{
                return(
                <div key={nanoid()}>{item}</div>
                )

              })



                  // below here returning question and option  for qlist
                return(
                  <div className="grid-container">
                    <div className="item1" key={nanoid()}>{q1}</div>
                    {options}
                    
                  </div>
                
                )
              }
              )
  
  


function handleCheckAnswer(){


  
}              

  // Below return is for Question component

return(
      <div className={displayPropetry}>
      {qlist}
      <button onClick={handleCheckAnswer} >Check Answers</button>
      </div>
    ) 
}