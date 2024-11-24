import "./index.css";

function Card(props) {
  const {
    urlImage,
    companyName,
    email,
    phoneNumber,
    country,
    city,
    address,
    workerNumbers,
    comment,
    socialsLink,
  } = props.data;
  return (
    <div className="card">
      <div className="card-image">
        <img src={urlImage} alt="some picture" />
      </div>
      <div className="card-info">
        <h3>
          <span>Kompaniya nomi: </span>
          {companyName}
        </h3>
        <h3>
          <span>Email: </span>
          {email}
        </h3>
        <h3>
          <span>Telefon raqam:</span> {phoneNumber}
        </h3>
        <h3>
          <span>Telegram link: </span> {socialsLink}
        </h3>
        <h3>
          <span>Davlat:</span> {country}
        </h3>
        <h3>
          <span>Shahar:</span> {city}
        </h3>
        <h3>
          <span>Yashash joyi:</span>
          {address}
        </h3>
        <h3>
          <span>Hodimlar soni:</span> {workerNumbers}
        </h3>
        <p>
          <span>Izoh:</span> {comment}
        </p>
      </div>
    </div>
  );
}

export default Card;
