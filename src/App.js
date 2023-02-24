import logo from './logo.svg';
import './App.css';

function App() {
  const handleChangeCheckbox = (event) => {
    // console.log(event);
    // console.log(event.target.name);
    // console.log(event.target.value);
    // console.log(event.target.checked ? 'tick' : 'untick');

    const { name, value, checked } = event.target;
    console.log(name);
    console.log(value);
    console.log(checked ? 'tick' : 'untick');
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <h1>##### Lab 1 #####</h1>
        <p>
          จงสร้าง tag input เมื่อผู้ใช้พิมพ์ค่าลงใน input ให้
          console.log(ค่าที่ผู้ใช้พิมพ์)
        </p>
        <input
          type="text"
          onChange={function (event) {
            console.log(event.target.value);
          }}
        />
      </div>
      <div>
        <h1>##### Lab 2 #####</h1>
        <p>
          จงสร้าง tag select ซึ่งมีข้อมูลชื่อประเทศในรายการให้เลือก (ให้ลองใส่มา
          5 ประเทศ) เมื่อผู้ใช้เลือกประเทศ ให้ console.log ค่าประเทศที่ถูกเลือก
        </p>
        <select
          name="country"
          id="countries"
          onChange={function (event) {
            console.dir(event.target);
            console.log(event.target.value);
          }}
        >
          <option value="THAILAND">Thailand</option>
          <option value="LAOS">Laos</option>
          <option value="MYANMAR">Myanmar</option>
          <option value="VIETNAM">Vietnam</option>
          <option value="CAMBODIA">Cambodia</option>
        </select>
      </div>
      <div>
        <h1>##### Lab 3 #####</h1>
        <p>
          จงสร้าง checkbox ขึ้นมา 3 อัน ให้แต่ละอันมี name คือ phoneBrand
          เมื่อผู้ใช้ tick หรือ untick checkbox ให้ console.log ค่า name ของ
          checkbox, ค่า value ของ checkbox, checkbox นั้นถูก tick หรือ untick
        </p>
        <input
          type="checkbox"
          name="phoneBrand"
          value="Apple"
          id="apple"
          defaultChecked
          onChange={handleChangeCheckbox}
        />
        <label htmlFor="apple">Apple</label>
        {/* label attribute for เป็น htmlFor  */}
        <br />
        <input
          type="checkbox"
          name="phoneBrand"
          value="Samsung"
          id="samsung"
          defaultChecked
          onChange={handleChangeCheckbox}
        />
        <label htmlFor="samsung">Samsung</label>
        <br />
        <input
          type="checkbox"
          name="phoneBrand"
          value="Xiaomi"
          id="xiaomi"
          defaultChecked
          onChange={handleChangeCheckbox}
        />
        <label htmlFor="xiaomi">Xiaomi</label>
      </div>
      <div>
        <h1>##### Lab 4 #####</h1>
        <p>
          จงสร้างลิงค์ a มีข้อความว่า “Google” , เมื่อผู้ใช้ click link
          ให้ขึ้นคำถามว่า “Leave for https://google.com?”, ถ้าผู้ใช้กด OK ให้
          redirect ไปที่ https://google.com, ถ้าผู้ใช้กด Cancel ให้ยกเลิก
          redirect ไปที่ https://google.com
        </p>
        <a
          href="https://google.com"
          onClick={(event) => {
            event.preventDefault();
            if (window.confirm('Leave for https://google.com?')) {
              window.location.href = 'https://google.com';
              // window.location.assign('https://google.com');
            }
          }}
        >
          Google
        </a>
      </div>
    </div>
  );
}

export default App;
