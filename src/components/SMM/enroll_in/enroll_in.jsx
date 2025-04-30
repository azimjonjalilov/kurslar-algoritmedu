import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './enrolin.css';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegistrationForm = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [branch, setBranch] = useState('Toshkent');
  const [course, setCourse] = useState('SMM');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agreed) {
      toast.warning("Shaxsiy ma'lumotlarga rozilik belgilang!");
      return;
    }

    const formData = { name: fullName, phone, branch, course };

    try {
      await fetch('https://script.google.com/macros/s/AKfycbwZS_0PLPFSShKeqLTNj6-r_sLw8uYWe1bDjk6rZptlarzCUfEDHwFDWQX2ce6OXxqW/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      toast.success('Ro‘yxatdan o‘tish muvaffaqiyatli yuborildi!');
      setFullName('');
      setPhone('');
      setBranch('Toshkent');
      setCourse('SMM');
      setAgreed(false);
    } catch (error) {
      console.error('Xatolik:', error);
      toast.error('Xatolik yuz berdi. Qaytadan urinib ko‘ring.');
    }
  };

  return (
    <>
      <form className="registration-form" onSubmit={handleSubmit}>
      <h2>Zamonaviy kasblargacha<br />1 qadam qoldi</h2>
      <p>SMM Pro kursi uchun hoziroq ro'yxatdan o'ting!</p>

      <input
        type="text"
        placeholder="Ism-familyangiz"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />

      <PhoneInput
        country={'uz'}
        value={phone}
        onChange={setPhone}
        inputProps={{ required: true }}
        containerClass="phone-container"
        inputClass="phone-input"
        buttonClass="phone-button"
      />

      <select value={branch} onChange={(e) => setBranch(e.target.value)} required>
        <option value="Toshkent">Toshkent</option>
        <option value="Samarqand">Samarqand</option>
        <option value="Buxoro">Buxoro</option>
      </select>

      <select value={course} onChange={(e) => setCourse(e.target.value)} required>
        <option value="SMM">SMM</option>
        <option value="Dizayn">Dizayn</option>
        <option value="Frontend">Frontend</option>
      </select>

      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={agreed}
          onChange={() => setAgreed(!agreed)}
          required
        />
        &nbsp;Shaxsiy ma'lumotlarni <a href="#">qayta ishlanishiga</a> roziman
      </label>

      <button type="submit">RO'YXATDAN O'TISH</button>
    
      </form>
      
    </>
  );
};

export default RegistrationForm;
