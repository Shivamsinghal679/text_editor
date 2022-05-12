import React,{useState} from 'react'

export default function TextForm(props) {

  // const [text, settext] = useState("");


    const fun = () =>{ 
        //console.log("do upper case "+text)
        let newtext = text.toUpperCase();
        settext(newtext);
        props.showalert("Converted to upper case" , "success")
      }
    const fun2 = () =>{ 
      //console.log("do upper case "+text)
      let newtext = text.toLowerCase();
      settext(newtext);
      props.showalert("Converted to lower case" , "success")
  }
    const funclear = () =>{ 
      //console.log("do upper case "+text)
      let newtext = '';
      settext(newtext);
      props.showalert("Clear all" , "success")
  }
    const funrev = () =>{ 
      //console.log("do upper case "+text)
      let newtext = text.split('').reverse().join('');
      settext(newtext);
      props.showalert("Revese" , "success")
  }


    const fun1 = (event) =>{ 
        //console.log("on  changing");
        settext(event.target.value);        
    }

    const[text,settext] = useState("Enter the text here")
  return (
      <>
        <div className="mb-3 " style={{color:props.mode === 'dark' ? 'white': 'black'}}>
        <h1 >{props.heading}</h1>
        
        <textarea className="form-control" id="mybox" value={text}  onChange={fun1} rows="10" style={{backgroundColor: props.mode === 'dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
        <button className="btn btn-primary my-2" onClick={fun} >Convert to Upper Case</button>
        <button className="btn btn-primary mx-2" onClick={fun2} >Convert to lower Case</button>
        <button className="btn btn-primary mx-1" onClick={funclear} >Clear all</button>
        <button className="btn btn-primary mx-1" onClick={funrev} >Reverse Text</button>
        </div>
        <div className="container" style={{color:props.mode === 'dark' ? 'white': 'black'}}>
          <h3>Summary of your Text</h3>
          <p><strong>{text.split(/\s+/).length}</strong> words and <strong>{text.length}</strong> characters and {text.split(".").length} lines</p>
          <p>{0.008*text.split(" ").length} takes Minutes </p>
          <h4> Preview</h4>
          <p>{ text.length > 0 ? text : "Enter the text in the textbox to preview it here" }</p>
        </div>
     </>
  )
}
