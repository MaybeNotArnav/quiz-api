import React from "react";
import Question from "./question";
import Options from "./options";

export default function QuizBox(){
    return(
        <div className="main">
        <Question />
        <Options />
        </div>
    )
}