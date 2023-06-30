import { useRef, useState } from "react";
const SimpleInput = (props) => {
  const nameInputRef= useRef()
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameValid, setEnteredNameValid]=useState(true)
  const inputHandler = event => {
    setEnteredName(event.target.value)
  }
    const formSubmitHandler = event => {
      event.preventDefault();
      if(enteredName.trim()===''){
        setEnteredNameValid(false)
        return;
      }
      setEnteredNameValid(true)
      console.log(enteredName)
      const enteredValue=nameInputRef.current.value 
      console.log(enteredValue)
      setEnteredName('')
  }
  
  
  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' onChange={inputHandler} value={enteredName}/>
        {!enteredNameValid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
