import EachQuestion from "./EachQuestion";
import generalExam from "./questions/generalQuestions";
import Progress from "../Progress";
import load from '../../images/load.png'
import { useState } from "react";



function Exams(){
    const [currentCount, setCurrentCount] = useState(6)
    const currentQuestions = generalExam.slice(0,currentCount)
    
    const [solvedCount, setSolvedCount] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
  
    const handleAnswerSelected = (isCorrect) => {
      setSolvedCount(solvedCount + 1);
      if (isCorrect) {
        setCorrectCount(correctCount + 1);
      }

    };

    function loadMore(){
        setCurrentCount(prev => prev+6)
    }
    return (
        <>
        <div className="exam-container">
            <div className="progress-indicator">
                <Progress count={solvedCount} total={generalExam.length}/> 

            </div>
            <div className="questions">
            {currentQuestions.map((question,idx) => (
                <>
                <EachQuestion question={question} number={idx+1} setAnswerQuestion={handleAnswerSelected}/>
                </>
            ))}
            </div>
        </div>
        { currentQuestions.length != generalExam.length && <button className="load-more-btn" onClick={loadMore} style={{justifyContent: "center",display: 'flex',alignItems: "center",gap: "10px",position: "relative", left:'70px'}}>Load More <img style={{width: "15px"}} src={load}/></button>}
        { currentQuestions.length === generalExam.length && <button className="load-more-btn" style={{position: "relative", left:'480px'}}>Submit</button>}

        </>
    )
}

export default Exams