import "./media.css"

import CountUp from 'react-countup';
import data from "./Media.json";
import { useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Skills from "../skills/skill";

AOS.init();
AOS.init({
  delay: 0,
  duration: 1500,
});
    
    const Savollar = [
        {
        savol: "1-bo'lim. Marketing va ijtimoiy tarmoqlarga kirish",
        javob: [
            "Marketing kirish (marketing, yo’nalishlari, vazifalari, xatolar, biznesdagi o’rni, kitoblar, kuzatadigan sahifalar, qayerda ishlashi mumkin, social dilemma, terminlar)",
            "SMM (nega SMM, qanday muammolarni hal qilish mumkin, maqsadlar, imkoniyatlari)",
            "Hard skillar: Google workspaces, Canva, Prezi, Taplink, Onelink, MyUrls",
            "Ijtimoiy tarmoqlar va ularning imkoniyatlari (Ij.tar. afzalliklari, o’ziga xosliklari, algoritmlari, formatlari, segmentlari, qaysi biznes uchun mosligi)",
            "Telegram (botlar, tgstat, funksiyalari)",
            "Instagram",
            "Tiktok, Youtube",
            "Raqobatchilarni tahlil qilish",
            "Maqsadli auditoriya",
            "SMM strategiya tuzish",
            "2 ta workshop | amaliy dars"
        ]
        },
        {
        savol: "2-bo'lim. Kontent tayyorlash va amaliy ko'nikmalar",
        javob: [
            "Stories, reels management (content yaratish, fon, trend, kumirlar, benchmark",
            "Mobil operator: syomka qilish",
            "Mobil montaj",
            "Content creator: food foto, personaj foto, mobil fotograf",
            "Mobil kamera oldida so’zlash, notiqlik",
            "Kontent management",
            "Ilhomlanish, g’oya olish",
            "Kontent plan",
            "Nativ reklama",
            "5 ta workshop | amaliy dars",
        ]
        },
        {
        savol: "3- bo'lim. Ijodiy qism: reklama, boshqaruv va kasbiy ko'nikma",
        javob: [
            "Bloger va influencerlar bilan ishlash",
            "PR, nativ reklama",
            "Targeting",
            "Soft skills",
            "Community management",
            "Sotuvni tizimlashtirish uchun zarur ko’nikma va bilimlar",
            "Loyiha boshqaruvi & Koordinatorlik (PM, event management)",
            "Video loyihalar bilan ishlash",
            "Brifing",
            "Shaxsiy brend, brending",
            "Sohaviy rivojlanish uchun zarur bilim va ko’nikmalar",
            "Ish topish, muvaffaqiyatli ishga kirish bo’yicha bilimlar",
            "5 ta workshop | amaliy dars",
        ]
        }
    
    ];

    const requirements = [
      {
        id:1,
        icon: "🖥️",
        title: "Intel Core i3 (7-avlod)",
        subtitle: "Protsessor",
      },
      {
        id:2,
        icon: "💾",
        title: "4 GB",
        subtitle: "Tezkor xotira (RAM)",
      },
      {
        id:3,
        icon: "🛠️",
        title: "Windows 10, 64 razryadli",
        subtitle: "Operatsion sistema",
      },
      {
        id:4,
        icon: "💽",
        title: "SSD 128 GB yoki HDD 512 GB",
        subtitle: "Asosiy xotira",
      },
    ];

function Media(){
    const [openIndex, setOpenIndex] = useState(null);
  
    const btn = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
    return(
        <div className="Media">
            <div className="course_duration">
                <div className="duration_card">
                   <h2><CountUp end={4} duration={2} enableScrollSpy scrollSpyOnce /> oy</h2> 

                    <p>Davomiyligi</p>
                </div>
                <div className="duration_card">
                    <h2><CountUp end={3} duration={2} enableScrollSpy scrollSpyOnce /> kun</h2>
                      <p>Haftada</p>

                </div>
                <div className="duration_card">
                    <h2><CountUp end={2} duration={2} enableScrollSpy scrollSpyOnce /> soat</h2>

                    <p>Dars soati</p>
                </div>
            </div>
             <div className="graduates_wrapper">
                <h2>Kurs bitiruvchilari bilan suhbat</h2>
                <div className="video_wrapper">
                    <video controls width="500" height={300}>
                        <source src="path/to/your-video.mp4" type="video/mp4" />
                        Sizning brauzeringiz video tag'ini qo'llab-quvvatlamaydi.
                    </video>
                    <video controls width="500" height={300}>
                        <source src="path/to/your-video.mp4" type="video/mp4" />
                        Sizning brauzeringiz video tag'ini qo'llab-quvvatlamaydi.
                    </video>
                </div>
            </div>
            <div className="SmmCourse_forwho">
            <h2>SMM kursi kimlar uchun?</h2>
            <div className="cards_wrapper">
                {data.map((item) => (
                <div key={item.id} className="card_who" data-aos="fade-up">
                    <div className="circle">{item.id}</div>
                    <div className="cardwho_texts">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    </div>
                </div>
                ))}
            </div>
            <div className="marquee-container">
            <div className="marquee-text">
                <p>
                Kelajak kasblarini biz bilan o'rganing!  Kelajak kasblarini biz bilan o'rganing! Kelajak kasblarini biz bilan o'rganing! Kelajak kasblarini biz bilan o'rganing!  Kelajak kasblarini biz bilan o'rganing! Kelajak kasblarini biz bilan o'rganing!  Kelajak kasblarini biz bilan o'rganing!
                </p>
            </div>
            </div>
            <div className="Course_lesson">
            <div className="faq-container" data-aos="fade-up">
            <h2 className="faq-title">Ko‘p so‘raladigan savollar</h2>
            <div className="faq-list">
                {Savollar.map((item, index) => (
                <div 
                    key={index}
                    className={`faq-item ${openIndex === index ? 'open' : ''}`}
                >
                    <div className="faq-savol" onClick={() => btn(index)}>
                    <p>{item.savol}</p>
                    <span>{openIndex === index ? '×' : '+'}</span>
                    </div>
                    {openIndex === index && (
                    <div className="faq-javob">
                        <ul >
                        {item.javob.map((javobItem, i) => (
                            <li key={i}>{javobItem}</li>
                        ))}
                        </ul>
                    </div>
                    )}
                </div>
                ))}
            </div>
            
            </div>

            </div>

            </div>
            <div className="requirements">
            <h2 className="requirements-title">
                Kurs uchun <span className="highlight">minimum</span> talab qilinadigan{" "}
                <span className="highlight">noutbuk</span>
            </h2>


            <div className="requirements-list">
            
                {requirements.map((item) => (
                    
                    <div key={item.id} className="requirement-item">
                        <div className="requirement-icon">{item.icon}</div>
                        <div>
                        <h2 className="requirement-title">{item.title}</h2>
                        <div className="requirement-subtitle">{item.subtitle}</div>
                        </div>
                    </div>

                    
                    
                ))}

            </div>

            </div>
            <Skills/> 
        </div>
    )
}
export default Media