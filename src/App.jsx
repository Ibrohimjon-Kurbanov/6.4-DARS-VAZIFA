import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import roundImg from "./assets/images/round-image.png";
import telegram from "./assets/images/telegram.png";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState(null);
  const [fData, setfData] = useState(null);
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(false);
  const [socialsLink, setSocialsLink] = useState("");
  function openModal() {
    setModal(true);
  }
  function closeModal() {
    setModal(false);
  }
  function validate(formData) {
    const formObj = {};
    for (const [key, value] of formData.entries()) {
      formObj[key] = value;
    }
    if (formObj.companyName.length <= 4) {
      alert("Kompaniya nomi eng kamida 4 ta belgidan iborat bo'lishi kerak");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formObj.email)) {
      alert("To'g'ri email kiriting");
      return false;
    }
    if (!/^\+998\d{9}$/.test(formObj.phoneNumber.trim())) {
      alert(
        "Telefon raqam +998 bilan boshlanishi va 9 ta raqamdan iborat bo'lishi kerak"
      );
      return false;
    }
    if (!formObj.country) {
      alert("Davlat tanlang");
      return false;
    }
    if (!formObj.city) {
      alert("Shahar tanlang");
      return false;
    }
    if (formObj.address.length < 5) {
      alert("Yashash joyi kamida 5 belgidan iborat bo'lishi kerak");
      return false;
    }
    if (formObj.workerNumbers <= 0) {
      alert("Hodimlar sonini kiriting");
      return false;
    }
    if (formObj.comment.length < 15) {
      alert("Izoh kamida 10 ta belgidan iborat bo'lishi kerak");
      return false;
    }
    if (!/^https?:\/\//i.test(socialsLink)) {
      alert("Iltimos, haqiqiy Link manzilini kiriting.");
      openModal();
      return false;
    }
    return true;
  }

  return (
    <>
      <Header />
      <section className="form-section">
        <div className="container">
          <div className="form__wrapper">
            <h1 className="form__title">Kompaniya ma’lumotlari</h1>
            <p className="form__desc">
              Kompaniya haqidagi ma’lumotlarni kiriting
            </p>
            <div className="download-wrap">
              <img className="form-img" src={url || roundImg} alt="No image" />
              <label className="download-text" htmlFor="download">
                Yuklash
                <input
                  onChange={(e) => {
                    const urlImage = URL.createObjectURL(e.target.files[0]);
                    setUrl(urlImage);
                    setfData((prev) => {
                      return { ...prev, urlImage };
                    });
                  }}
                  className="download-input"
                  type="file"
                  id="download"
                />
              </label>
            </div>
            <form
              id="form"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const isValid = validate(formData);
                if (!isValid) {
                  return;
                }
                let result = {};
                for (const [key, value] of formData.entries()) {
                  result[key] = value;
                }
                const newUser = {
                  ...fData,
                  socialsLink: socialsLink,
                  ...result,
                };

                setUsers((prev) => [...prev, newUser]);
                setUrl(null);
                setfData({});
                e.target.reset();
              }}
            >
              <div className="input-box">
                <h4>
                  Kompaniya nomi <span>*</span>
                </h4>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Kompaniya nomi"
                />
              </div>
              <div className="input-box">
                <h4>
                  Email <span>*</span>
                </h4>
                <input type="email" name="email" placeholder="Email" />
              </div>
              <div className="input-box">
                <h4>
                  Telefon raqam <span>*</span>
                </h4>
                <input type="tel" name="phoneNumber" placeholder="UZ +998" />
              </div>
              <div className="socials">
                <button onClick={openModal} type="button">
                  <img src={telegram} alt="" />
                </button>
              </div>
              <div className="select">
                <div className="select-box">
                  <h4>
                    Davlat <span>*</span>
                  </h4>
                  <div className="arrow">
                    <select id="country" name="country">
                      <option value="">Davlat</option>
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="Russia">Russia</option>
                      <option value="Turkey">Turkey</option>
                      <option value="USA">USA</option>
                    </select>
                  </div>
                </div>
                <div className="select-box">
                  <h4>
                    Shahar <span>*</span>
                  </h4>
                  <div className="arrow">
                    <select id="city" name="city">
                      <option value="">Shahar</option>
                      <option value="Farg'ona">Farg'ona</option>
                      <option value="Moskva">Moskva</option>
                      <option value="Istanbul">Istanbul</option>
                      <option value="New york">New york</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="input-box">
                <h4>
                  Yashash joyi <span>*</span>
                </h4>
                <input type="text" name="address" placeholder="Joy" />
              </div>
              <div className="input-box">
                <h4>
                  Hodimlar soni <span>*</span>
                </h4>
                <input
                  type="number"
                  name="workerNumbers"
                  placeholder="Hodimlar soni"
                />
              </div>
              <div className="comment">
                <h4>
                  Izoh <span>*</span>
                </h4>
                <textarea
                  id="comment"
                  name="comment"
                  placeholder="Kompaniya haqida izoh qoldiring"
                ></textarea>
              </div>
              <div className="buttons">
                <button disabled className="btn-back">
                  ORTGA
                </button>
                <button type="submit" className="btn-next">
                  KEYINGISI
                </button>
              </div>

              {modal && (
                <div onClick={closeModal} className="myModal">
                  <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <button onClick={closeModal} type="button">
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                    <div className="clearfix"></div>
                    <div className="modal-form">
                      <h2 className="modal-title">Link manzilini kiriting:</h2>
                      <input
                        value={socialsLink}
                        type="text"
                        name="socialsLink"
                        placeholder="https://t.me/username"
                        onChange={(e) => setSocialsLink(e.target.value)}
                      />
                      <button
                        onClick={closeModal}
                        className="save"
                        type="button"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="card__wrapper">
          {users.length === 0 && <p>Ma'lumot mavjud emas</p>}
          {users.map((user, index) => (
            <Card key={index} data={user} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
