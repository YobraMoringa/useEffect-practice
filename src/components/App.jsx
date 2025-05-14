import UserList from "../components/UserList"
import { useState, useEffect } from "react";
import { displayNameInPopUp } from "./Search";


function App() {
  const [users, setUsers] = useState([]);



  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/`)
      .then(response => response.json())
      .then(data => {
        setUsers(data)
      })
  }, [clicked])

  return (
    <>
      <UserList users={users} />
    </>
  )
}

export default App

// Todos
// 1. Implement a function that will handle getting a random user when the Button **Get Random User** is clicked.
//  - This can be achieved by tracking the url in state and updating the parameter using the numbers between 1 and 10
// 2. When the search param is clicked, render the single user card, otherwise, render the entire users list
// 3. Use the url as the dependency inside the useEffect hook, such that it loads everytime the URL changes.
// 4. Add a button **Get All Users** that when clicked will fetch all the 10 users and display them.