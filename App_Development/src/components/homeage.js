import React from 'react';
import { Link } from 'react-router-dom';

const ShopByAge = () => {
  return (
    <div className="shop-by-age-container">
      <style>
        {`
          .shop-by-age-container {
            padding: 20px;
            text-align: center;
            // background-color: #0E8EE6;
          }

          .shop-by-age-title {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 20px;
            color: white;
          }

          .card-container {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
          }

          .card {
            width: 200px;
            border: 1px solid red;
            border-radius: 8px;
            overflow: hidden;
            text-align: center;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
          }

          .card img {
            width: 100%;
            height: 150px;
            object-fit: cover;
          }

          .card-content {
            padding: 10px;
            color: red;
          }

          .card:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 8px rgba(0,0,0,0.4);
          }

          .card a {
            text-decoration: none;
            color: inherit;
            font-size: 16px;
            font-weight: bold;
          }
        `}
      </style>

      <div className="shop-by-age-title"></div>
      <div className="card-container">
        <div className="card">
          <Link to="/three">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv9SC2Jwr-YTxgYScH_tbqt5WlfyGeqVddCg&s" alt="0-2 Years" />
            <div className="card-content">0-2 Years</div>
          </Link>
        </div>
        <div className="card">
          <Link to="/eight">
            <img src="https://www.pngitem.com/pimgs/m/467-4674159_little-girl03-cartoon-early-child-things-hd-png.png" alt="3-5 Years" />
            <div className="card-content">3-5 Years</div>
          </Link>
        </div>
        <div className="card">
          <Link to="/eight">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZqDhq6d2l4KhXLGWU5jpigm-VecZeA97cCQ&s" alt="6-8 Years" />
            <div className="card-content">6-8 Years</div>
          </Link>
        </div>
        <div className="card">
          <Link to="/all">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCRipwb7WNoGOSaUYwyXmMQf5ayyzhSrcCUA&s" alt="9-12 Years" />
            <div className="card-content">9+ Years</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopByAge;
