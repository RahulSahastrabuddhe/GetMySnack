import { useEffect } from "react";
import itemImg from "./../images/item.png";
import itemImg2 from "./../images/item4.png";
import itemImg3 from "./../images/item2.png";
import itemImg4 from "./../images/item3.png";

const Item = ({ item }) => {
  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ];
  useEffect(() => {
    if (item[2] > 5) {
      item[6] = true;
    }
    var date = new Date(item[5]);
    const seconds = Math.floor(
      (Date.now() - new Date(item[5]).getTime()) / 1000
    );
    var minutes = seconds / 60;
    if (minutes >= -350 && minutes <= 3) item[7] = true;
    console.log(minutes);
  }, []);

  return (
    <div className="ItemsArray">
      <div className="row g-0 ">
        <div className="card w-75">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-title">{item[1]}</h5>
              <div className="foodItemImage">
                <img
                  src={
                    [itemImg, itemImg2, itemImg3, itemImg4][
                      Math.floor(Math.random() * 3)
                    ]
                  }
                  alt="food_img"
                  style={{ maxWidth: "70px" }}
                />
              </div>
            </div>
            <div
              className="d-flex justify-content-between"
              style={{ marginBottom: "10px" }}
            >
              {item[6] ? (
                <span class="badge rounded-pill bg-warning">
                  5 purchased recently
                </span>
              ) : (
                <p></p>
              )}
              {item[7] ? (
                <span class="badge rounded-pill bg-danger">
                  ordered 3 min ago
                </span>
              ) : (
                <p></p>
              )}
            </div>
            <div className="d-flex justify-content-between">
              <p className="card-text">${item[3]}</p>
              <div className="clearfix">
                <a href="#" class="btn btn-primary float-right">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Item;
