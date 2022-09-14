import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { deleteUsers, getAllUsers, postUsers } from './api/users.api';
import { Users } from './interfaces/users.interface';

const App = (): JSX.Element => {
  const [allUsers, setAllUsers] = useState<Array<Users>>([]);
  const [changeEffect, setChangeEffect] = useState<boolean>(false);

  useEffect(() => {
    getAllUsers().then((res: any) => {
      setAllUsers(res);
    })
      .catch(err => {
        console.log(err)
      })
  }, [changeEffect])

  const addUser = (event: any) => {
    // event.preventDefault();
    postUsers({
      userName: event.target.form[0].value,
    })
      .then(res => {
        setChangeEffect(!changeEffect);
      })
  }

  const removeUser = (value: any) => {
    deleteUsers(value)
      .then(res => {
        setChangeEffect(!changeEffect);
      })
  }

  return (
    <>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
          <label>
            Name : &nbsp;
            <input type="text" name="name" />
          </label>
          &ensp;
          <input type="submit" value="Submit" onClick={addUser} />
        </form>
        {allUsers.map(result =>
          <p key={result.id} onClick={() => removeUser(result.id)}>{result.userName}</p>
        )}
      </div>
    </>
  );
}

export default App;
