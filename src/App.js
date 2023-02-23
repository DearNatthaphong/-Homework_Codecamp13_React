import logo from './logo.svg';
import './App.css';

// Lab 1
// inline CSS
// const m5 = {
//   margin: '5px'
// };
// const inputStyle = {
//   border: 'none',
//   width: '2rem',
//   textAlign: 'center'
// };
// function App() {
//   return (
//     <div>
//       {/* 1.Inline CSS */}
//       <h1>Lab 1 Inline CSS</h1>
//       <button style={m5}>+</button>
//       <input style={inputStyle} value="0" />
//       <button style={m5}>-</button>
//       <button style={m5}>Reset</button>

//       {/* 2.External CSS */}
//       <h1>Lab 1 External CSS</h1>
//       <button className="m-5">+</button>
//       <input value="0" className="styles"></input>
//       <button className="m-5">-</button>
//       <button className="m-5">Reset</button>
//     </div>
//   );
// }

// Lab 2
// Inline CSS
const mb20 = {
  marginBottom: '20px'
};
const delStyle = {
  margin: '10px',
  color: 'green'
};
const btnStyle = {
  margin: '5px'
};
const bStyle = {
  margin: '10px'
};

function App() {
  return (
    <div>
      {/* 1.Inline CSS */}
      <h1>Lab 2 Inline CSS</h1>
      <div style={mb20}>
        <button>Add</button>
      </div>
      <div>
        <del style={delStyle}>Task 1 </del>
        <button style={btnStyle}>Edit</button>
        <button style={btnStyle}>Del</button>
      </div>
      <div>
        <b style={bStyle}>Task 2</b>
        <button style={btnStyle}>Edit</button>
        <button style={btnStyle}>Del</button>
      </div>

      {/* 2.External CSS */}
      <h1>Lab 2 External CSS</h1>
      <div className="mb-20">
        <button>Add</button>
      </div>
      <div>
        <del className="del">Task 1 </del>
        <button className="btn">Edit</button>
        <button className="btn">Del</button>
      </div>
      <div>
        <b className="b">Task 2</b>
        <button className="btn">Edit</button>
        <button className="btn">Del</button>
      </div>
    </div>
  );
}

export default App;
