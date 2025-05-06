import React from "react";
import "./Home.css"
import mygif from "/src/assets//arrow_white.gif"

const Home = () => {
	return (
	<div className="Home">
		<div className="overlay">
          <h1> <span>SMM</span>  sohasini «Algoritm»da <br/> mutaxassislardan o'rganing</h1>
            <p>Qisqa muddatda kasb o'rganib, daromadga chiqing!</p>
            <img src={mygif} alt="anamated_arrow" className="arrow" />
           {/* onClick={handleScroll}  */}
          </div>
          <div className="Smm_Main"></div>
	</div>
	)
};

export default Home;
