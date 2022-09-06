import React from "react"
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'

export default function Question(props){

const displayPropetry= props.questionView ? "screen_visible" : "screen_invisible" 

  const questionArray= props.questionData
  const allData = [{}]

 

   
  const qlist= questionArray.map((item,index)=> {
              // extract question, options and correct answer in the varaible
              var q1 =decodeURIComponent(decodeURIComponent(item.question))
              var op1 =decodeURIComponent(decodeURIComponent(item.incorrect_answers[0]))
              var op2= decodeURIComponent(decodeURIComponent(item.incorrect_answers[1]))
              var op3= decodeURIComponent(decodeURIComponent(item.incorrect_answers[2]))
              var op4= decodeURIComponent(decodeURIComponent(item.correct_answer))

              // create an object which holds option and answersStatus
              var arrobj=[
                        {
                          q:op1,
                          answer :"wrong"
                        },
                        {
                          q:op2,
                          answer :"wrong"
                        },
                        {
                          q:op3,
                          answer : "wrong"
                        },
                        {
                          q:op4,
                          answer :"right"
                        }
                
                      ]
          // Declare Shuffle function  below            
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

          // Randomize options while rendering
          const newArray=shuffleArray(arrobj)
        

            //create dynamic div for options
            const options= newArray.map((item,answer)=>{
              var item=item
              var id= nanoid()
              var ans= item.answer
              return(
              <div id={id} onClick={(e)=>{onstoreAnswer(e,id,ans)}} flag={item.answer} key={id}>{item.q}</div>
              )
             
              

            })

            console.log(`I am arrya with questions ${options}`)


              var qid=nanoid()
                  // below here returning question and option  for qlist
                return(
                  <div className="grid-container">
                    <div id={qid} className="item1" key={qid}>{q1}</div>
                    {options}
                    
                  </div>
                
                )
              }
              )

// // store question id and user's answer              
// const [answer,setAnswer] = React.useState({
//   qid:"",
//   ans:""
// })

function onstoreAnswer(e,id,answer){
      
    console.log(`id is ${id} and it is ${answer}`)
    
    
 
}



function handleCheckAnswer(e){


  
}              




  // Below return is for Question component

return(
      <div key={nanoid()} className={displayPropetry}>
      {qlist}
      <button key={nanoid()} onClick={handleCheckAnswer} >Check Answers</button>
      </div>
    ) 
}