import React, { useState } from 'react'

let x = 0;
export default function TextField(props) {
    const handleUpCase = () => {
        // console.log('Uppercase was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
        x = x + 1;
    }
    const handlelowCase = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
        x = x + 1;
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const clearText = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text CLeared!", "success");
    }
    const RemoveESpaces= () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success");
    }
    const [text, setText] = useState('');
    let wordStyle = {
        color: 'red'
    }
    return (
        <>
            <div>
                <form>
                    <div className="form-group">
                        <label className='my-2' htmlFor="exampleFormControlTextarea1">{props.heading} </label>
                        <p> we have successfully done <b style={wordStyle}>{x}</b>  converts</p>
                        <textarea className="form-control" value={text} placeholder='Enter the text' onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                    </div>
                </form>
                <button className="btn btn-primary my-2" onClick={handleUpCase}>Convert to uppercase</button>
                <button className="btn btn-primary my-2 mx-2" onClick={handlelowCase}>Convert to lowercase</button>
                <button className="btn btn-primary my-2 mx-2" onClick={clearText} >Clear</button>
                <button className="btn btn-primary my-2 mx-2" onClick={RemoveESpaces} >Remove Extra Spaces</button>
            </div>
            <div className="container">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} Characters</p>
                <p>It will take <b style={wordStyle}>{0.08 * text.length}</b>  seconds to read this content </p>
                <h2>Perview</h2>
                <p>{text}</p>
            </div>

        </>
    )
}


