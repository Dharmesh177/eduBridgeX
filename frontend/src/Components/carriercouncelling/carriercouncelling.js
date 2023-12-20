import React from 'react'
import { useState } from 'react'

export default function CarrierCouncelling() {
    // Store the questions
    const questions = [
        'Questions 1',
        'Questions 2',
        'Questions 3',
        'Questions 4',
        'Questions 5',
    ]

    // Store the answers
    const answers = new Array(questions.length)
    const [ans, setAns] = useState()

    // Function the handle the value of text box
    const [textboxvalue,  setTextboxvalue] = useState('')
    function handleTextboxValue(event){
        setTextboxvalue(event.target.value)
        console.log("value is: ", textboxvalue)
    }

    // State to store question number
    const [qno, setQno] = useState(0)

    // Function to handle NEXT BUTTON
    function handleNext() {
        if(textboxvalue == ''){
            alert('Please write answer!')
        }else{
            
        }
        if (qno + 1 < questions.length) {
            setQno(qno + 1);
            setTextboxvalue('')
        }
    }

    // Function to handle PREVIOUS BUTTON
    function hamndlePrevious() {
        console.log("Array Length is: ", questions.length)
        if (qno - 1 >= 0) {
            setQno(qno - 1)
        }
    }

    // Function to handle submit button
    function handleSubmit(){
        console.log("Handle submit pressed")
    }

    return (
        <div className='flex flex-col justify-center'>
            {/* Page heading */}
            <div className='text-[4rem] font-bold'>
                Career Compass
            </div>

            {/* Question-answer Container */}
            <div className='mt-36 flex justify-center p-4'>
                <div className='p-3 border max-w-[80%] bg-slate-100 border-black rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
                    {/* Question Container*/}
                    <div>
                        <div className='font-bold text-lg text-start'>Question: </div>

                        <div className='text-md flex justify-start text-start mt-1'>
                            {questions[qno]}
                            {/* Amidst the vibrant tapestry of city life, a solitary street musician serenades the passing crowd with melodies that seem to dance with the rhythm of urban energy. Meanwhile, a curious cat perches on a windowsill, gazing at the world below with an air of feline contemplation.
                            Amidst the vibrant tapestry of city life, a solitary street musician serenades the passing crowd with melodies that seem to dance with the rhythm of urban energy. */}
                        </div>
                    </div>

                    {/* Answer container */}
                    <div className='mt-2'>
                        <div className='font-bold text-lg text-start'>Answer: </div>

                        <input
                            id="UserEmail"
                            onChange = {handleTextboxValue}
                            placeholder="Enter your answer"
                            className="peer h-8 w-full border border-black rounded-md py-4 px-2  sm:text-sm"
                        />
                    </div>

                    {/* Button container */}
                    <div className='mt-2 py-2 flex justify-between'>
                        <a onClick={hamndlePrevious} className="flex justify-center align-middle gap-2 rounded border border-indigo-600 bg-indigo-600 px-10 py-2 text-lg font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500" >
                            <div className='flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill='white' height="16" width="14" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
                            </div>
                            Previous
                        </a>

                        <a onClick={handleNext} className="flex justify-center align-middle gap-2 rounded border border-indigo-600 bg-indigo-600 px-10 py-2 text-lg font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500" >
                            Next
                            <div className='flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill='white' height="16" width="14" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                            </div>

                        </a>
                    </div>

                    {/* Submit button container */}
                    <div className={`mt-2 py-2 flex justify-center`}>
                        <a onClick={handleSubmit} className="flex justify-center align-middle gap-2 rounded border border-indigo-600 bg-indigo-600 px-10 py-2 text-lg font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500" >
                            Submit
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}