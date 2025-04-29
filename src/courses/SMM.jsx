import React from "react";
import Course_cost from "../components/SMM/course_cost/course_cost";
import Faq from './../components/SMM/Faq/Faq';
import "./SMM.css"
import Media from "../components/SMM/media/Media";
import RegistrationForm from "../components/SMM/enroll_in/enroll_in";

const SMM = () => {
  

  return (
    <>  
        <div>
          <div className="overlay">
          <h1> <span>SMM</span>  sohasini «Algaritm»da <br/> mutaxassislardan o'rganing</h1>
            <p>Qisqa muddatda kasb o'rganib, daromadga chiqing!</p>
            <button>Ro'yxatdan o'tish</button>
          </div>
          <div className="Smm_Main"></div>
          <div className="marquee-container">
          <div className="marquee-text">
          <p>
          Kelajak kasblarini biz bilan o'rganing!  Kelajak kasblarini biz bilan o'rganing! Kelajak kasblarini biz bilan o'rganing! Kelajak kasblarini biz bilan o'rganing!  Kelajak kasblarini biz bilan o'rganing! Kelajak kasblarini biz bilan o'rganing!  Kelajak kasblarini biz bilan o'rganing!
          </p>
          </div>
          </div>
          <Media/>
          <Course_cost/>
          <RegistrationForm/>
          <Faq/>
        </div>
    </>
   
   
  )
};

export default SMM