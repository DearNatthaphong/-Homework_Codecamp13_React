import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//// Lab 1
// ให้สร้าง Component ชื่อ Profile
// ใน Component ประกอบด้วย
// tag <h1> แสดงชื่อ John Doe
// tag <h2> แสดงอายุมีค่าเท่ากับ 27
// ให้ render Profile ในหน้า web
// function Profile(props) {
//   return (
//     <div>
//       <h1>Name : {props.name}</h1>
//       <h2>Age : {props.age}</h2>
//     </div>
//   );
// }
// const element = <Profile name="John Doe" age="27" />;

//// Lab 2
// โค้ดในบรรทัดที่มี * ให้ผลลัพธ์เป็นอะไรและเพราะอะไร
// function Car(props) {
//   console.log(props.brand); // * // Honda เพราะ props เป็น obj ที่ key คือ brand, value คือ Honda
//   console.log(props.price); // ** // 1000000 เพราะ props เป็น obj ที่ key คือ price, value คือ 1000000
//   console.log(props.color); // *** // undefined เพราะ props เป็น obj ที่ key คือ color, value คือ undefined
//   return <div>Car</div>;
// }
// ReactDOM.render(
//   <Car brand="Honda" price="1000000" />,
//   document.getElementById('root')
// );
// const element = <Car brand="Honda" price="1000000" />;

//// Lab 3
// ให้สร้าง Component ชื่อ ProductItem
// ใน Component แสดงข้อมูลดังนี้
// tag <h1> แสดงชื่อ product
// tag <h2> แสดง price ของ product
// tag <p> แสดง description ของ product
// ชื่อ price และ description ของ product ถูกส่งมาทาง props
// ให้ render ProductItem ในหน้า web โดยให้ส่งค่า props ทั้งสามเป็นค่าอะไรก็ได้
// function ProductItem(props) {
//   return (
//     <div>
//       <h1>Product : {props.product}</h1>
//       <h2>Price : {props.price}</h2>
//       <p>Description : {props.description}</p>
//     </div>
//   );
// }
// const element = (
//   <ProductItem product="EV Car" price="1000000" description="Electric Vehicle Car" />
// );

//// Lab 4
// จาก Lab ที่แล้วให้ส่ง props เข้าไปได้ค่าเดียว ชื่อ product โดยที่ props ตัวนี้จะมี data type เป็น Object
// ให้แก้ไข Component ProductItem ตาม props ที่เปลี่ยนไป
// ให้ render ProductItem ในหน้า web โดยให้ส่งค่า props ตามเงื่อนไขที่กำหนด
function ProductItem(props) {
  return (
    <div>
      <h1>Product : {props.product.product}</h1>
      <h2>Price : {props.product.price}</h2>
      <p>Description : {props.product.description}</p>
    </div>
  );
}
const element = (
  <ProductItem
    product={{
      product: 'EV Car',
      price: 1000000,
      description: 'Electric Vehicle Car'
    }}
  />
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
