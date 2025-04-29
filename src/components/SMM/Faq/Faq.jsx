import './Faq.css';
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();
AOS.init({
  delay: 0,
  duration: 1000,
});

const Savolar = [
  {
    Savol: "SMM Pro kursi bitiruvchilariga ish taklif qilinadimi?",
    javob: "Ha, SMM Pro kursi bitiruvchilarga ish taklif etiladi."
  },
  {
    Savol: "SMM Pro kursida target darslari ham o'rgatilinadimi?",
    javob: "Albatta, kursda target reklamalar ham o'rgatiladi."
  },
  {
    Savol: "\"Najot Ta'lim\" imtihon bilan qabul qilinadimi?",
    javob: "Ba'zi kurslar imtihon asosida qabul qiladi, ba'zilari esa suhbat asosida."
  },
  {
    Savol: "\"Najot Ta'lim\" qayerda joylashgan?",
    javob: "Toshkent shahrida, Chilonzor tumanida joylashgan."
  },
  {
    Savol: "\"Najot Ta'lim\"da qanday kurslar bor?",
    javob: "Dasturlash, dizayn, SMM, marketing va boshqa ko'plab kurslar mavjud."
  },
  {
    Savol: "Til kurslari bormi?",
    javob: "Ha, ingliz tili va boshqa til kurslari ham mavjud."
  },
  {
    Savol: "\"Najot Ta'lim\" ish bilan ta'minlaydimi?",
    javob: "Ha, bitiruvchilar uchun ish bilan ta'minlash imkoniyatlari yaratilgan."
  },
  {
    Savol: "Yosh chegarasi qanday?",
    javob: "Odatda 14 yoshdan yuqorilar uchun mo'ljallangan."
  },
  {
    Savol: "Kimlarga grant ajratiladi?",
    javob: "Imtihonlarda yaxshi natija ko'rsatganlarga grantlar beriladi."
  }
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const btn = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='big-container'>
      <div className="marquee-container">
        <div className="marquee-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className="faq-container" data-aos="fade-up">
        <h2 className="faq-title">Ko‘p so‘raladigan savollar</h2>
        <div className="faq-list">
          {Savolar.map((item, index) => (
            <div 
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <div className="faq-savol" onClick={() => btn(index)}>
                <p>{item.Savol}</p>
                <span>{openIndex === index ? '×' : '+'}</span>
              </div>
              <div className="faq-javob">
                {item.javob}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="faq-button-container">
        <button className="faq-button">Batafsil</button>
      </div>
    </div>
  );
}

export default Faq;
