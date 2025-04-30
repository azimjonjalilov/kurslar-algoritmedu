import React ,{useState, useRef}from "react";
import Course_cost from "../components/SMM/course_cost/course_cost";
import Faq from './../components/SMM/Faq/Faq';
import "./SMM.css"
import Media from "../components/SMM/media/Media";

import RegistrationForm from "../components/SMM/enroll_in/enroll_in";
import myGif from '/src//assets/arrow_white.gif';
import { ToastContainer } from "react-toastify";


const SMM = () => {
  const [open, setOpen]=useState(false)
  const scrollTargetRef = useRef(null);

  const handleScroll = () => {
    scrollTargetRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>  
     
        <div className="container">
          <div className="overlay">
          <h1> <span>SMM</span>  sohasini «Algaritm»da <br/> mutaxassislardan o'rganing</h1>
            <p>Qisqa muddatda kasb o'rganib, daromadga chiqing!</p>
            <button className="register" onClick={()=> setOpen(true)}>Ro'yxatdan o'tish</button>
            <img src={myGif} alt="anamated_arrow" className="arrow" onClick={handleScroll} />
            {open && (
              
            <div className="modal" onClick={() => setOpen(false)}>
              <div className="modal-content" onClick={e => e.stopPropagation()}>
              <span className="close-btn" onClick={()=> setOpen(false)}>✖</span>
                
                <RegistrationForm />
                
              </div>
            </div>
          )}
          </div>
          <div className="Smm_Main"></div>
          <div className="marquee-container" ref={scrollTargetRef}>
          <div className="marquee-text">
          <p>
          Kelajak kasblarini biz bilan o'rganing!  Kelajak kasblarini biz bilan o'rganing! Kelajak kasblarini biz bilan o'rganing! Kelajak kasblarini biz bilan o'rganing!  Kelajak kasblarini biz bilan o'rganing! Kelajak kasblarini biz bilan o'rganing!  Kelajak kasblarini biz bilan o'rganing!
          </p>
          </div>
          </div>
           <Media/>
         <Course_cost setOpen={setOpen}/>
           <RegistrationForm/>
          <Faq setOpen={setOpen}/>
        </div>
        <ToastContainer position="bottom-right" autoClose={3000}/>
        
    </>
   
   
  )
};

export default SMM