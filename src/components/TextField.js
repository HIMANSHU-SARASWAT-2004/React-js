import React, { useState } from 'react'

export default function TextField(props) {
    const handleUpCase = () => {
        // console.log('Uppercase was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handlelowCase = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    // setText("Himanshu");  // way to change the text
    return (
        <>
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">{props.heading} </label>
                        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                    </div>
                </form>
                <button className="btn btn-primary my-2" onClick={handleUpCase}>Convert to uppercase</button>
                <button className="btn btn-primary my-2 mx-2" onClick={handlelowCase}>Convert to lowercase</button>
            </div>
            <div className="container">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} Characters</p>
                <h2>Perview</h2>
                <p>{text}</p>
            </div>

        </>
    )
}


