import { useState } from "react";
import CreateQuotes from "./components/CreateQuotes";
import Home from "./components/Home";
import Login from "./components/Login";
import Quotes from "./components/Quotes";
import Register from "./components/Register";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const App = () => {

	const [user,setUser] = useState({})

  return (
    <>
		<Router>
			<nav>
				<Link style={{padding:5}} to="/">Home</Link>
				<Link style={{padding:5}} to="/quotes">Quotes</Link>
				<Link style={{padding:5}} to="/createquotes">CreateQuotes</Link>
				{
					user ?
					<>
						<span>{user.username}</span>
						<button onClick={()=> setUser(null)}>Logout</button>
					</>
					:
					<>
						<Link style={{padding:5}} to="/login">Login</Link>
						<Link style={{padding:5}} to="/register">Register</Link>
					</>
				}

			</nav>
			<Switch>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/register">
					<Register />
				</Route>
				<Route path="/quotes">
					<Quotes />
				</Route>
				<Route path="/createquotes">
					<CreateQuotes />
				</Route>
				<Route path="/">
					{/* <Home loggedIn={loggedIn} /> */}
				</Route>
			</Switch>
		</Router>

		{/* <Route exact path="/">
					<Home />
				</Route> */}
	</>
  )
}

export default App;

//   const [page,setPage] = useState('home')
//   const [user,setUser] = useState(null)

// const content = () => {
// 	switch(page){
// 		case 'home' : return <Home />
// 		case 'login' : return <Login />
// 		case 'register' : return <Register />
// 		case 'quotes' : return <Quotes />
// 		case 'createquotes' : return <CreateQuotes />
// 		default: return <Home />
// 	}
// }

{/* <button onClick={()=> setPage('home')} >Home</button>
		<button onClick={()=> setPage('login')} >Login</button>
		<button onClick={()=> setPage('register')} >Register</button>
		<button onClick={()=> setPage('quotes')} >Quotes</button>
		<button onClick={()=> setPage('createquotes')} >CreateQuotes</button>
		{content()} */}
