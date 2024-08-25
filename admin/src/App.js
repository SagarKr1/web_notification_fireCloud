import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [text, setText] = React.useState({
    "title": "",
    "body": "",
    "token": ""
  });

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setText({
      ...text,
      [name]: value
    })
  }

  const submitHandler = async () => {
    console.log(text);
    const url = "http://localhost:8000/api/send";
    const body = {
      "title": text.title,
      "body": text.body,
      "deviceToken": "f4cSOzupbZToc_nPlwH_SN:APA91bE74DWiA2RufKmr6Maudb_9F_R3h2GPdzzfawk6fjI1vnhYPdD8cOYi74cWr6AKYFaiubVT_-YqUx14TjKf7-ywy25whuWIzbdHRkcqgP6SqLUGfmmfWXsN_QqZxWSBQwfqtvnv"
    }
    const response = await axios.post(url, body);
    console.log(response);

  }
  return (
    <div className="App">
      <h1>Admin</h1>
      <div>
        <input type='text' name='title' value={text.title} placeholder='enter title' onChange={handlerChange}></input>
        <input type='text' name='body' value={text.body} placeholder='enter body' onChange={handlerChange}></input>
        <input type='text' name='token' value={text.token} placeholder='enter token' onChange={handlerChange}></input>
      </div>
      <div onClick={submitHandler} style={{ border: "1px solid black", width: 130, margin: "auto" }}>Submit</div>
    </div>
  );
}

export default App;
