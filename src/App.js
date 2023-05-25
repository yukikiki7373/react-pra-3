import { useEffect, useState, useRef } from 'react';
import './App.css';
import FindGitUser from './components/findGitUser';
import CantFindGitUser from './components/cantFindGitUser';

function App() {

  const [username, setUserName] = useState('');
  const [gitUsername, setGitUsername] = useState('');
  const [githubName, setGitName] = useState('');
  const [findedUser, setFindedUser] = useState(undefined);

  // refをtrueで初期化。
  const ref = useRef(true);

  function searchGithub(inputText){
    console.log(`this is username : ${inputText}`)
    setGitUsername(inputText);
    ref.current = false;
  }

  useEffect(()=>{
    if (ref.current){
      console.log("ref is active");
      return
    }
    fetch(`https://api.github.com/users/${gitUsername}`)
    .then(res => {
      if(res.status === 404) {
        setFindedUser(false)
        throw new Error("Not Found");
      }
      return res.json()
    })
    .then(data => {
      console.log(data)
      setGitName(data.name)
      setFindedUser(true)
    })
    .catch(error => {
      console.error(error);
    });
  }, [gitUsername])

  return (
    <>
      <label >
        please type username that you wanaa know about github information:
        <input 
          type="text" 
          name='username' 
          onChange={(event => setUserName(event.target.value))}  
        />  
      </label>
      <button onClick={()=>searchGithub(username)}>search</button>
      <hr />
      {findedUser && <FindGitUser username = {gitUsername} gname = {githubName}/>}
      {findedUser === false && <CantFindGitUser username = {gitUsername}/>}
      {findedUser === undefined && <p></p>}
    </>
  );
}

export default App;
