import logo from './logo.svg';
import React from "react"
import './App.css';
import Question from './comp/Question.js'
import Modal from './comp/Modal';
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'



function App() {

  const [modalView, setModalView] = React.useState(true)
  const [questionView, setquestionView] = React.useState(false)
  const [questionData,setquestionData] = React.useState() 

  
  function callApi() {
    fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple&encode=url3986")
     .then(res => res.json())
     .then(data => setquestionData(data.results))
    }
      

  function handleClickStartQuiz(){
    setModalView(prev=>!prev)
    setquestionView(prev=>!prev)
    callApi()
    
   

  }


console.log(questionData)

  return (
    <div key={nanoid()} className="App">
    {questionData!==undefined && <Question key={nanoid()} questionData ={questionData} questionView={questionView} />}  
{modalView!==false && <Modal key={nanoid()}  handleClickStartQuiz={handleClickStartQuiz} modalView={modalView} />
}    
</div>
  );
}

export default App;
