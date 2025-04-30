import React, { useEffect } from 'react';
import './course.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Course_cost({ setOpen }) {
  useEffect(() => {
    AOS.init({ delay: 1, duration: 1000 });
  }, []);

  const data = [
    {
      title: "Toshkent filiali uchun",
      cards: [
        {
          title: "Oynama-oy to‘lov",
          price: "2 000 000 so‘m",
          desc: "Oynama-oy to‘lov narxi: 2 000 000 so‘m, 4 oy uchun 8 000 000 so‘m"
        },
        {
          title: "Ikkiga bo‘lib to‘lov",
          price: "3 700 000 so‘m",
          desc: "Ikkiga bo‘lib to‘lov qilinsa: 3 700 000 so‘mdan, umumiy 7 400 000 so‘m"
        },
        {
          title: "Bittada umumiy to‘lov",
          price: "7 000 000 so‘m",
          desc: "Bittada umumiy to‘lov qilinsa: 1 000 000 so‘m tejaladi"
        },
      ],
    },
    {
      title: "Viloyatlardagi filiallarda",
      cards: [
        {
          title: "Oynama-oy to‘lov",
          price: "1 250 000 so‘m",
          desc: "Oynama-oy to‘lov narxi: 1 250 000 so‘m, 4 oy uchun 5 000 000 so‘m"
        },
        {
          title: "Ikkiga bo‘lib to‘lov",
          price: "2 400 000 so‘m",
          desc: "Ikkiga bo‘lib to‘lov qilinsa: 2 400 000 so‘mdan, umumiy 4 800 000 so‘m"
        },
        {
          title: "Bittada umumiy to‘lov",
          price: "4 500 000 so‘m",
          desc: "Bittada umumiy to‘lov qilinsa: 500 000 so‘m tejaladi"
        },
      ],
    },
  ];

  return (
    <div className="kurs-container">
      <h2 className="kurs-title">Kurs narxi</h2>

      {data.map((filial, index) => (
        <div className="kurs-filial" key={index}>
          <h4>{filial.title}</h4>
          <div className="kurs-cards">
            {filial.cards.map((card, i) => (
              <div className="kurs-card" data-aos="zoom-in-right" key={i}>
                <h5>{card.title}</h5>
                <h2>{card.price}</h2>
                <p>{card.desc}</p>
                <button onClick={() => setOpen(true)}>Ro‘yxatdan o‘tish</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Course_cost;
