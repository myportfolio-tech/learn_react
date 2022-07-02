import React, {useState} from 'react';
import Tweet from './tweet';

function App(){

  // const [isRed, setRed] = useState(false);
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1)
  //   setRed(!isRed);

const [users, setUsers] = useState([
  {name: 'Eduardo', message: 'hello', likes:2},
  {name: 'John', message: 'I am John Snow', likes:10},
  {name: 'Juan', message: 'Yo soy Juan Nieves', likes:4},
  {name: 'Maria', message: 'I am the queen of Spain', likes:12}
])  



  return ( 
    <div className='app'>
      {/* <h1 className={isRed ? 'red' : ''}>Change my Color</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1> */}
      {/* <Tweet name="Dev ED" message="This is a message" likes={1}/>
      <Tweet  name="Winter is Coming" message="This is a message" likes={9}/>
      <Tweet  name="Eduardo" message="I'm hungry"/>
      <Tweet  name="Arthur" message="I am king!" likes={24}/>
      <Tweet  name="Mary" message="For I am queen" likes={12}/> */}

      {users.map(user =>(
        <Tweet name={user.name} message={user.message} likes={user.likes}/>
      ))}
    </div>
  )
}

export default App;