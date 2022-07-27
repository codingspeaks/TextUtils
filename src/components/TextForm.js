import { toBeEmpty } from '@testing-library/jest-dom/dist/matchers';
import React, {useState} from 'react';


export default function TextForm(props) {
    document.title = "TextUtils - Home";
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        if(text.length == 0){
            props.showAlert("Please enter some text.", "danger");
        }else{
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to Uppercase.", "success");
        }
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        if(text.length == 0){
            props.showAlert("Please enter some text.", "danger");
        }else{
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to Lowercase.", "success");
        }
    }
    const handleClearClick = ()=>{
        if(text.length == 0){
            props.showAlert("Please enter some text.", "danger");
        }else{
            let newText = "";
            setText(newText);
            props.showAlert("Text Cleared.", "success");
        }
    }
    const handleCopy = () => {
        // console.log("I am copy");
        var text = document.getElementById("myBox");
        if(text.value == ''){
            props.showAlert("Please enter some text.", "danger");
        }else{
            text.select();
            text.setSelectionRange(0, 9999);
            navigator.clipboard.writeText(text.value);
            props.showAlert("Text Copied.", "success");
        }
    }
    const handleExtraSpaces = () => {
        if(text.length == 0){
            props.showAlert("Please enter some text.", "danger");
        }else{
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
            props.showAlert("Extra spaces removed.", "success");
        }
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }

    function countWords(str) {
        const arr = str.split(" ");
        return arr.filter(word => word !== "").length;
    }

    const [text, setText] = useState(''); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode==='light'?'#042743':'white'}}> 
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#aba4a4', color: props.mode==='light'?'#042743':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='light'?'#042743':'white'}}>
            <h2>Your text summary</h2>
            {/* <p>{//text.length > 0 ? text.trim().split(" ").length : 0} words and {text.length} characters</p> */}
            <p>{countWords(text)} words and {text.length} characters</p>
            <p>{0.008 *  text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
