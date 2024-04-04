import React from "react";
import "../styles/product.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { winner } from "../constant/winner";
import { handleDataDetail } from "../utils/handleData";

const Product = ({ product }) => {
  const { isWinner, description, details, img, sale, title } = product;
  console.log(product);
  // const dataDetail = () => handleDataDetail(details), [details];
  return (
    <div className="main-component">
      {isWinner && <div className="banner">{winner}</div>}
      <div className="main-item-1">
        <div className="img-container">
          <img src={img} alt="" className="product-img" />
        </div>
        <div className="product-infor">
          <div className="title">
            <h3>{title}</h3>
            <span>{sale} OFF</span>
          </div>
          <p className="content">{description}</p>
          <div className="btn-box"></div>
          <div className="scroll-1">
            <span>Product feature</span>
            <i className="bi bi-chevron-up" />
          </div>
        </div>
        <div className="product-rate">
          <div className="rating">
            <label>9.8</label>
            <span>
              <i className="bi bi-emoji-smile" />
              score
            </span>
          </div>
          <div className="btn-group-1">
            <button id="more-info-btn">
              <label>More info</label>
            </button>
            <div className="scroll-2">
              <span>Compare prices</span>
              <i className="bi bi-chevron-down" />
            </div>
          </div>
        </div>
      </div>
      <div className="main-item-2 " id="main-item-2">
        <div className="product-highlights">
          <h4 style={{ fontWeight: 700, fontSize: 14 }}>Product highlights</h4>
          <ul
            className="hl-list"
            style={{ listStyle: "none", padding: 0, margin: 0 }}
          >
            <li className="text">
              <i
                className="bi bi-check-circle-fill"
                style={{ marginRight: 10, color: "#18A661" }}
              />
              Cooling capacity (btu): 12000 - number of cooling speeds: 3
            </li>
            <li className="text">
              <i
                className="bi bi-check-circle-fill"
                style={{ marginRight: 10, color: "#18A661" }}
              />
              Weight: 75.00 lbs - 115 volts
            </li>
            <li className="text">
              <i
                className="bi bi-check-circle-fill"
                style={{ marginRight: 10, color: "#18A661" }}
              />
              Width: 19" x height: 14.5" x depth: 19.81"
            </li>
            <li className="text">
              <i
                className="bi bi-check-circle-fill"
                style={{ marginRight: 10, color: "#18A661" }}
              />
              Energy star - ul certification
            </li>
          </ul>
        </div>
        <div className="product-highlights">
          <h4 style={{ fontWeight: 700, fontSize: 14 }}>Product highlights</h4>
          <ul
            className="brand-list"
            style={{ listStyle: "none", padding: 0, margin: 0 }}
          >
            <li>
              <span className="brand">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                    fill="#F7F7F7"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.0876 9.93303C12.3875 9.93303 12.6346 9.77879 12.6679 9.57966L12.964 6.26914C12.964 5.94196 12.5762 5.67334 12.0885 5.67334C11.6014 5.67334 11.2139 5.94196 11.2139 6.26914L11.5098 9.57966C11.5424 9.77879 11.7893 9.93303 12.0885 9.93303H12.0876ZM10.2772 10.9669C10.4277 10.7106 10.4164 10.4224 10.2577 10.2942L7.5045 8.38546C7.21829 8.22173 6.78913 8.41884 6.54543 8.83638C6.30114 9.25334 6.34438 9.71908 6.62986 9.88296L9.67843 11.2858C9.869 11.3557 10.1289 11.2213 10.2782 10.9651L10.2772 10.9669ZM13.8995 10.9652C14.0497 11.2215 14.3083 11.3559 14.499 11.2861L17.5477 9.8831C17.8349 9.71937 17.8758 9.25349 17.6336 8.83653C17.3889 8.41942 16.9588 8.22187 16.6734 8.38575L13.92 10.2945C13.7625 10.4224 13.7509 10.7107 13.9005 10.9672L13.8994 10.9652H13.8995ZM12.0876 14.0683C12.3875 14.0683 12.6346 14.2212 12.6679 14.4205L12.964 17.7306C12.964 18.0588 12.5762 18.3268 12.0885 18.3268C11.6014 18.3268 11.2139 18.0588 11.2139 17.7306L11.5098 14.4205C11.5424 14.2212 11.7893 14.0683 12.0885 14.0683H12.0876ZM13.8995 13.0341C14.0497 12.7769 14.3083 12.6439 14.499 12.7144L17.5477 14.1163C17.8349 14.2803 17.8758 14.7465 17.6336 15.1639C17.3889 15.5797 16.9588 15.7778 16.6734 15.6142L13.92 13.7073C13.7625 13.5784 13.7509 13.2897 13.9005 13.0335H13.8994L13.8995 13.0341ZM10.2772 13.0336C10.4277 13.2897 10.4164 13.5784 10.2577 13.7074L7.5045 15.6144C7.21829 15.778 6.78913 15.5799 6.54543 15.1641C6.30114 14.7468 6.34438 14.2806 6.62986 14.1166L9.67843 12.7146C9.869 12.644 10.1289 12.7772 10.2782 13.0342H10.2772"
                    fill="#FF9900"
                  />
                </svg>
                <label>Walmart</label>
              </span>

              <div className="sale">
                <span
                  style={{
                    backgroundColor: "rgba(242, 245, 255, 1)",
                    borderRadius: 10,
                    padding: 5,
                    marginLeft: 10,
                    fontSize: 12,
                  }}
                >
                  7% OFF
                </span>
              </div>
              <button className="scroll-btn">
                <i className="bi bi-chevron-down" style={{ color: "white" }} />
              </button>
            </li>
            <li>
              <span className="brand">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                    fill="#F7F7F7"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.8067 11.1031C12.8067 11.6994 12.8217 12.1966 12.5209 12.7262C12.2781 13.1567 11.8935 13.4215 11.4637 13.4215C10.8771 13.4215 10.5355 12.9737 10.5355 12.3129C10.5355 11.0084 11.7022 10.7716 12.8067 10.7716V11.1031ZM14.3609 14.8275C14.2597 14.9179 14.1132 14.9244 13.9991 14.8641C13.491 14.442 13.4006 14.2461 13.1207 13.8434C12.2809 14.7004 11.6867 14.9567 10.5972 14.9567C9.30963 14.9567 8.30627 14.1621 8.30627 12.5709C8.30627 11.3284 8.9802 10.4822 9.93834 10.0688C10.7694 9.70274 11.93 9.63814 12.8171 9.53694V9.33884C12.8171 8.97494 12.8451 8.54429 12.6319 8.22991C12.4446 7.94784 12.0872 7.83156 11.7728 7.83156C11.1893 7.83156 10.6683 8.13086 10.5412 8.751C10.5154 8.88881 10.4142 9.02446 10.2764 9.03092L8.79073 8.87158C8.66585 8.84359 8.52805 8.74239 8.5625 8.55075C8.90484 6.75063 10.5305 6.20801 11.986 6.20801C12.7309 6.20801 13.7042 6.40611 14.292 6.97026C15.0369 7.66576 14.9659 8.59381 14.9659 9.60369V11.9895C14.9659 12.7065 15.263 13.0209 15.5429 13.4085C15.642 13.5463 15.6635 13.7121 15.5386 13.8154C15.2264 14.076 14.6709 14.5605 14.3652 14.8318L14.3609 14.8275"
                    fill="#030303"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.4742 16.2328C15.2521 17.1336 13.4807 17.6142 11.9556 17.6142C9.81708 17.6142 7.89191 16.8233 6.43544 15.5078C6.32101 15.4043 6.42354 15.2634 6.56085 15.3439C8.13267 16.2584 10.0761 16.8086 12.0837 16.8086C13.4377 16.8086 14.9271 16.5285 16.2966 15.9472C16.5035 15.8593 16.6765 16.0827 16.4742 16.2328Z"
                    fill="#FF9900"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.9823 15.6511C16.8266 15.4515 15.9497 15.5568 15.556 15.6035C15.4361 15.6181 15.4178 15.5138 15.5258 15.4387C16.2243 14.9471 17.3704 15.089 17.5041 15.2538C17.6377 15.4195 17.4693 16.5684 16.8129 17.1167C16.7122 17.2009 16.6161 17.1561 16.661 17.0444C16.8083 16.6764 17.1388 15.8516 16.9823 15.6511Z"
                    fill="#FF9900"
                  />
                </svg>
                <label>Amazon</label>
              </span>
              <button className="goto-btn">Go to</button>
            </li>
            <li>
              <span className="brand">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                    fill="#F7F7F7"
                  />
                  <path
                    d="M7.73684 18C7.25263 18 6.84211 17.8316 6.50526 17.4947C6.16842 17.1579 6 16.7474 6 16.2632V7.73684C6 7.25263 6.16842 6.84211 6.50526 6.50526C6.84211 6.16842 7.25263 6 7.73684 6H16.2632C16.7474 6 17.1579 6.16842 17.4947 6.50526C17.8316 6.84211 18 7.25263 18 7.73684V16.2632C18 16.7474 17.8316 17.1579 17.4947 17.4947C17.1579 17.8316 16.7474 18 16.2632 18H7.73684ZM7.73684 17.0526H16.2632C16.4842 17.0526 16.6712 16.9762 16.824 16.8234C16.9764 16.6709 17.0526 16.4842 17.0526 16.2632V7.73684C17.0526 7.51579 16.9764 7.32884 16.824 7.176C16.6712 7.02358 16.4842 6.94737 16.2632 6.94737H7.73684C7.51579 6.94737 7.32905 7.02358 7.17663 7.176C7.02379 7.32884 6.94737 7.51579 6.94737 7.73684V16.2632C6.94737 16.4842 7.02379 16.6709 7.17663 16.8234C7.32905 16.9762 7.51579 17.0526 7.73684 17.0526ZM8.58947 15.4737L10.7368 13.3263L11.8895 14.4632L13.2632 12.7263L15.4579 15.4737H8.58947ZM9.63158 10.5789C9.32632 10.5789 9.06589 10.4712 8.85032 10.2556C8.63432 10.0396 8.52632 9.77895 8.52632 9.47368C8.52632 9.16842 8.63432 8.90779 8.85032 8.69179C9.06589 8.47621 9.32632 8.36842 9.63158 8.36842C9.93684 8.36842 10.1975 8.47621 10.4135 8.69179C10.6291 8.90779 10.7368 9.16842 10.7368 9.47368C10.7368 9.77895 10.6291 10.0396 10.4135 10.2556C10.1975 10.4712 9.93684 10.5789 9.63158 10.5789Z"
                    fill="#1C1B1F"
                  />
                </svg>
                <label>Efloors</label>
              </span>
              <button className="goto-btn">Go to</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Product;
