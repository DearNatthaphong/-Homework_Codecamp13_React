import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//// Lab 1
// ให้สร้างตัวแปรชื่อ fullName เก็บชื่อจริง นามสกุลของตัวเอง
// ให้สร้างตัวแปรชื่อ birthYear เก็บปีที่เกิดของตัวเอง
// ให้ render หน้า web โดยใช้ JSX ดังนี้
// แสดงชื่อ fullName ใน tag <h1>
// แสดงอายุใน tag <p> (ให้เอาปีปัจจุบันลบด้วยปีเกิด)
// const fullName = 'Natthaphong Thongphueng';
// const birthYear = 1984;
// const element = (
//   <div>
//     <h1>Full Name: {fullName}</h1>
//     <p>Age: {2023 - birthYear} years old</p>
//   </div>
// );

//// Lab 2
// ให้สร้างตัวแปรชื่อ height และ weight เก็บข้อมูลส่วนสูงและน้ำหนักตามลำดับ
// ให้สร้างฟังก์ชัน calcBMI เพื่อคำนวณค่า BMI
// ให้ render หน้า web เพื่อแสดงค่า BMI ใน tag <h1>
const height = +prompt('Height (cm) ?');
const weight = +prompt('Weight (kg) ?');
function calcBMI(h, w) {
  const result = w / (h / 100) ** 2;
  return result.toFixed(2);
}
const element = (
  <div>
    <h1>your BMI = {calcBMI(height, weight)}</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
