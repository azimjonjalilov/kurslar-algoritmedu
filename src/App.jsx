import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import SMM from "./courses/SMM.jsx";
// import Home from './pages/home/Home';
import Header from './components/header/Header';


const App = () => {
	return(
		<>
		<Header/>
		<Routes>
			<Route path="/" element={<SMM />} />

			{/* <Route path="*" element={<NotFound/>}/>  */}
		</Routes>
	</>
	)
	
};

export default App;
