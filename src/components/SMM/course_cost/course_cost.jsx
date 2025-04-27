import './course.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Course_cost() {
  AOS.init();
  AOS.init({
    delay: 1,
    duration: 1000,
  });

  return (
    <div className="kurs-container">
      <h2 className="kurs-title">Kurs narxi</h2>

      <div className="kurs-filial">
        <h4>Toshkent filiali uchun</h4>
        <div className="kurs-cards">
          <div className="kurs-card" data-aos="zoom-in-right">
            <h5>Oynama-oy to‘lov</h5>
            <h2>2 000 000 so‘m</h2>
            <p>Oynama-oy to‘lov narxi: 2 000 000 so‘m, 4 oy uchun 8 000 000 so‘m</p>
            <button>Ro‘yxatdan o‘tish</button>
          </div>
          <div className="kurs-card" data-aos="zoom-in-right">
            <h5>Ikkiga bo‘lib to‘lov</h5>
            <h2>3 700 000 so‘m</h2>
            <p>Ikkiga bo‘lib to‘lov qilinsa: 3 700 000 so‘mdan, umumiy 7 400 000 so‘m</p>
            <button>Ro‘yxatdan o‘tish</button>
          </div>
          <div className="kurs-card" data-aos="zoom-in-right">
            <h5>Bittada umumiy to‘lov</h5>
            <h2>7 000 000 so‘m</h2>
            <p>Bittada umumiy to‘lov qilinsa: 1 000 000 so‘m tejaladi</p>
            <button>Ro‘yxatdan o‘tish</button>
          </div>
        </div>
      </div>

      <div className="kurs-filial">
        <h4>Viloyatlardagi filiallarda</h4>
        <div className="kurs-cards">
          <div className="kurs-card" data-aos="zoom-in-right">
            <h5>Oynama-oy to‘lov</h5>
            <h2>1 250 000 so‘m</h2>
            <p>Oynama-oy to‘lov narxi: 1 250 000 so‘m, 4 oy uchun 5 000 000 so‘m</p>
            <button>Ro‘yxatdan o‘tish</button>
          </div>
          <div className="kurs-card" data-aos="zoom-in-right">
            <h5>Ikkiga bo‘lib to‘lov</h5>
            <h2>2 400 000 so‘m</h2>
            <p>Ikkiga bo‘lib to‘lov qilinsa: 2 400 000 so‘mdan, umumiy 4 800 000 so‘m</p>
            <button>Ro‘yxatdan o‘tish</button>
          </div>
          <div className="kurs-card" data-aos="zoom-in-right">
            <h5>Bittada umumiy to‘lov</h5>
            <h2>4 500 000 so‘m</h2>
            <p>Bittada umumiy to‘lov qilinsa: 500 000 so‘m tejaladi</p>
            <button>Ro‘yxatdan o‘tish</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course_cost;
