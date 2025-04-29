import "./skill.css"
import React from "react";
import Sag from "/src/assets/_SAG.png"
import Asaxiy from "/src/assets/Asaxiy.png"
import Carrefour from "/src/assets/Carrefour.png"
import yoshlar from "/src/assets/Yoshlar_ishlari_agen.png"
import ishonch from "/src/assets/ISHONCH_LOGO-green.png"
import korzinka from "/src/assets/Korzinkauz.png"
import mediaPark from "/src/assets/Media_Park.png"
import Sevimli from "/src/assets/Sevimli_TV.png"
import Xon from "/src/assets/Xon_Saroy.png"
import factor from "/src/assets/MFaktor.png"

const Skills = () => {
  const skills = [
    {
      number: "01",
      text: "Kichik bizneslar uchun SMM strategiya, kontent rejalar tuzish va realizatsiya qilish",
    },
    {
      number: "02",
      text: "Bozor tadqiqotlarini amalga oshirish, raqobatchilar va iste'molchilarni ishlaydigan metodlar bilan tahlil qilish",
    },
    {
      number: "03",
      text: "Smartfon orqali boshlang'ich darajadagi videokontentlar yasay olish, telefon orqali syomka va montaj qilish",
    },
    {
    number: "04",
    text: "Bozor tadqiqotlarini amalga oshirish, raqobatchilar va iste'molchilarni ishlaydigan metodlar bilan tahlil qilish",
    },
    {
    number: "05",
    text: "Smartfon orqali boshlang'ich darajadagi videokontentlar yasay olish, telefon orqali syomka va montaj qilish",
    },
  ];

  return (
    <div className="skills">
      <h2 className="skills-title">
        Sohani o'rganib <span className="highlight">qanday ko'nikmalarga</span> <br/> ega bo'lasiz?
      </h2>

      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-wrapper">
            <div className="skill-number">{skill.number}</div>
            <div className="skill-text">{skill.text}</div>
            </div>
          </div>
        ))}
      </div>

      
      <div className="students_result">
      <h2>Marketing yo'nalishidagi bitiruvchilarimizning <span>shga <br/> kirishi</span> ko'rsatkichi</h2>
      <p>2023-yil yanvar oyidan 2023-yil dekabr oyiga qadar olingan statistika</p>
        <div className="course_duration">
            <div className="duration_card">
                <h2>4 oy</h2>
                <p>Davomiyligi</p>
            </div>
            <div className="duration_card">
                  <h2>3 kun</h2>
                  <p>Haftada</p>

            </div>
            <div className="duration_card">
                <h2>2 soat</h2>
                <p>Dars soati</p>
            </div>
        </div>
        <h2 className="students_salary">Bitiruvchilarning o‘rtacha oylik daromadlari</h2>
        <div className="course_duration">
            <div className="duration_card">
                <h2>87$</h2>
                <p>eng past maosh</p>
            </div>
            <div className="duration_card">
                  <h2>301$</h2>
                  <p>o‘rtacha maosh</p>

            </div>
            <div className="duration_card">
                <h2>1300$</h2>
                <p>eng yuqori maosh</p>
            </div>
        </div>
        <div className="Companys">
          <h2>Bitiruvchilarimiz ishlayotgan kompaniyalar</h2>
          <div className="company_logos">
              <img src={Sag} alt="company"/>
              <img src={Asaxiy} alt="company"/>
              <img src={Carrefour} alt="company"/>
              <img src={yoshlar} alt="company"/>
              <img src={ishonch} alt="company"/>
              <img src={korzinka} alt="company"/>
              <img src={mediaPark} alt="company"/>
              <img src={Sevimli} alt="company"/>
              <img src={Xon} alt="company"/>
              <img src={factor} alt="company"/>
          </div>
        </div>
      </div>
        
    </div>
  );
};

export default Skills;
