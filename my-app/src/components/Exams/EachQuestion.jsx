import { useState } from "react";
import "./EachQuestions..css"

function EachQuestion({question, setAnswerQuestion, number}){

    const [selectedAnswer, setSelectedAnswer] = useState('')

    function handleChange(e){
        setSelectedAnswer(e.target.value)
        setAnswerQuestion(selectedAnswer === question.correctAnswer)
    }
    return (
    <>
    <h3 className="question">{number}. {question.question}</h3>
    <div className="answers"> {question.choices.map((c,i) => (
        <>
        <input onChange={handleChange} className="answer-input" type='radio' name={number} value={c} id ={i+number}/>
        <label className="answer-label" htmlFor={i+number}>{c}</label>
        </>
    ))} </div>
    </>);
}


export default EachQuestion