import logo from './logo.svg';
import React from "react"
import './App.css';
import Card from './comp/Card.js'


function App() {


const [questionData,setquestionData] = React.useState([]) 




React.useEffect(callApi, [])


function callApi() {
  fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple&encode=url3986")
   .then(res => res.json())
   .then(data => setquestionData(data.results))
  }

console.log(questionData)






  function handleClick(e){
      
    callApi()

    console.log(questionData)
      
    }

    
    
   const cardArray=questionData.map((item,index)=>{

    return(
    // <Card questionData={questionData[index]} key={index+1}/>
    <Card questionData={item} key={index+1}/>
    )
   })

   console.log(cardArray)


  return (
    <div className="App">
      {cardArray}

      {/* <Card questionData={questionData[0]}/>
      <Card questionData={questionData[1]}/>
      <Card questionData={questionData[2]}/>
      <Card questionData={questionData[3]}/>
      <Card questionData={questionData[4]}/> */}
      <button onClick={handleClick} >Play Again</button>
    </div>
  );
}

export default App;
