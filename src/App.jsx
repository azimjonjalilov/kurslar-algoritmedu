import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import SMM from "./courses/SMM.jsx";
// import Home from './pages/home/Home';


const App = () => {
	return(
		<>
		<Routes>
			<Route path="/" element={<SMM />} />

			{/* <Route path="*" element={<NotFound/>}/>  */}
		</Routes>
	</>
	)
	
};

export default App;
