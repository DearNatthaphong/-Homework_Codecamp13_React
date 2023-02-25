import { useState } from 'react'; // import แบบ name อยู่ในโฟเด้อ node_modules

function App() {
  console.log('App excecute');
  // let count = 0;
  // useState return Array ที่มี length เท่ากับ 2 เสมอ => [0, function]
  // element ตัวแรก คือค่า state
  // element ตัวที่สอง คือ ฟังก์ชันที่ใช้ในการ update state
  const state = useState(0); // [currentState, function]
  const [stateDe, fnState] = useState(0); // [currentState, function]
  // convention Best Practice
  const [count, setCount] = useState(0);
  const [carts, setCarts] = useState({});

  const handleClickAdd = () => {
    // Not working
    // count++;
    // console.log(count);
    // state[1](state[0] + 1);

    // count = count+1 // dont update state directly

    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    //ใช้ในกรณีค่า next state ขึ้นอยู่กับค่า state เดิม
    //setCount(callback)
    setCount(function (currentCount) {
      // currentCount = 0
      console.log(count, 1, currentCount);
      return currentCount + 1; // 1
    });
    setCount(function (currentCount) {
      // currentCount = 1
      console.log(count, 2, currentCount);
      return currentCount + 1; // 2
    });
    setCount(function (currentCount) {
      // currentCount = 2
      console.log(count, 3, currentCount);
      return currentCount + 1; // 3
    });
    setCount(function (currentCount) {
      // currentCount = 3
      console.log(count, 4, currentCount);
      return currentCount + 1; //4
    });
    setCount(function (currentCount) {
      // currentCount = 4
      console.log(count, 5, currentCount);
      return currentCount + 1; //5
    });

    console.log(count); //0
  };
  const handleClickSubtract = () => {
    // if (count > 0) {
    // Not working
    // count--;
    // console.log(count);
    // }

    // if (state[0] > 0) {
    //   state[1](state[0] - 1);
    // }

    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div style={{ justifyContent: 'center', display: 'flex', gap: '24px' }}>
      <Test /> {/* Test() ==> <h1>Test</h1> */}
      <button onClick={handleClickAdd}>+</button>
      {/* <span>{state[0]}</span> */}
      <span>{count}</span>
      <button onClick={handleClickSubtract}>-</button>
    </div>
  );
}

function Test() {
  const stateTest = useState(0);
  console.log('Test');
  return <h1 onClick={() => stateTest[1](stateTest[0] + 1)}>Test</h1>;
}

export default App;
