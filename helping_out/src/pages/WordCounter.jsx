import { useState } from "react"

export const WordCounter = ()=>{

    const [input,setInput] = useState('')
    const [wordCount, setWordCount] = useState(0)
    const [letterCount, setLetterCount] = useState(0)

    const onInputChange = (value)=>{
        const words = (value.match(/\b\w+\b/g) || []).length
        setInput(value)
        setLetterCount(value.replaceAll(' ','').length)
        setWordCount(words)
    }
    return(
        <section className="border-basic bmi-section">
            <h1 >
                Word Counter
            </h1>
            <div>
                <textarea value={input} onChange={(e)=>onInputChange(e.target.value)}  name="sentence" rows="5" cols="100" placeholder="Enter your text here!"></textarea>
            </div>
            <div className="count-display-container">
                <span className="label"> Words:</span>
                <textarea value={wordCount}  name="words" rows="5" disabled autoComplete="off"></textarea>
                <span className="label">Letters:</span>
                <textarea value={letterCount}  name="letters" rows="5" disabled autoComplete="off" ></textarea>
            </div>
            
        </section>
    )
}