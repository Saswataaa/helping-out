import { useState } from "react"
import { PiArrowFatLinesDown } from "react-icons/pi"
import { useRef } from "react"


export const BMICalculator = ()=> {

        // const [height,setHeight] = useState(0)
        const height = useRef(null)
        const weight = useRef(null)
        // const [weight, setWeight] = useState(0)
        const [result, setResult] = useState('')

        const onCalculate = ()=>{
            if(
                (isNaN(weight.current.value)||isNaN(height.current.value))||
                (weight.current.value==""||height.current.value=="")
        )
            {
                return setResult(`WRONG INPUT! PLEASE ENTER ONLY NUMERIC VALUES!!`)
            }
            
            const bmi = (weight.current.value/(height.current.value*height.current.value)).toFixed(2)
            let category=''
            if(bmi<18.5)
                category ='underweight'
            else if(bmi >= 18.5 && bmi <=24.9 )
                category = 'normal'
            else if(bmi >= 25 && bmi <=29.9 )
                category = 'overweight'
            else if(bmi >= 30 )
                category = 'obese'
            setResult(`Your BMI is ${bmi}. You bmi result categorizes you as ${category}! `)
        }

    return (
        <section className="border-basic bmi-section">
            <h1 >
                BMI Calculator
            </h1>
            <div className="count-display-container">
                {/* <span className="label"> Weight in kg:</span> */}
                <input ref={weight} name="Weight" type="number"  autoComplete="off" placeholder="Enter your weight in kg"></input>
                <input ref={height} name="Height" type="number"  autoComplete="off" placeholder="Enter your height in metre" ></input>
                {/* <span className="label">Height in metre:</span> */}
                <button onClick={onCalculate}>Calculate</button>
            </div>
            <div>
            <PiArrowFatLinesDown size={128} />
            </div>
            <div className="result">
                <textarea className="result" value={result} name="result" rows="5" cols="100" disabled></textarea>
            </div>
        </section>
    )
}